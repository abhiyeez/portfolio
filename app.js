/* ============================================================
   WEBSITE FUNCTIONALITY
   You normally DO NOT need to edit this file.
   ============================================================ */

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

function $(s, root=document){ return root.querySelector(s); }
function $$(s, root=document){ return [...root.querySelectorAll(s)]; }

function setProfile(){
  const p = PORTFOLIO.profile || {};
  const first = $('#hero-first-name');
  const last = $('#hero-last-name');
  const eye = $('#hero-eyebrow');
  const deck = $('#hero-deck');

  if(first) first.textContent = p.firstName || "";
  if(last) last.textContent = (p.lastName || "") + ".";
  if(eye) eye.textContent = p.locationLine || "";
  if(deck) deck.innerHTML = p.hero || "";

  document.title = `${p.firstName || ""} ${p.lastName || ""} — Mechanical Engineering`.trim();
}

addEventListener('load', () => {
  setProfile();
  setTimeout(() => $('.boot')?.classList.add('hide'), reduce ? 0 : 650);
});

const progress = $('.progress');
addEventListener('scroll', () => {
  if(!progress) return;
  const m = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${m ? scrollY / m : 0})`;
}, {passive:true});

const menu = $('.menu');
const nav = $('.nav');
if(menu && nav){
  menu.onclick = () => nav.classList.toggle('open');
  $$('a', nav).forEach(a => a.onclick = () => nav.classList.remove('open'));
}

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.classList.add('show');
      io.unobserve(e.target);
    }
  });
}, {threshold:.1});

$$('.reveal').forEach(x => io.observe(x));

/* -----------------------------
   PROJECT CARDS
   ----------------------------- */
const list = $('#projects');
const modal = $('#modal');

let activeProject = null;
let activeImage = 0;

function safeImages(project){
  if(Array.isArray(project.images) && project.images.length) return project.images;
  if(project.image) return [project.image];
  return [];
}

function renderProjects(){
  if(!list) return;
  list.innerHTML = "";

  (PORTFOLIO.projects || []).forEach((p, i) => {
    const images = safeImages(p);
    const el = document.createElement('article');
    el.className = 'project reveal';

    el.innerHTML = `
      <div class="project-media">
        ${images[0] ? `<img src="${images[0]}" alt="${p.title || 'Engineering project'}">` : ""}
      </div>
      <div class="project-copy">
        <div>
          <div class="project-no">${String(i+1).padStart(2,'0')}</div>
          <div class="project-type">${p.type || ""}</div>
          <h3>${p.title || ""}</h3>
          <p class="project-summary">${p.cardSummary || p.intro || ""}</p>
        </div>
        <div>
          <div class="tags">${(p.tags || []).slice(0,4).map(t => `<span>${t}</span>`).join('')}</div>
          <div style="display:flex;justify-content:flex-end;margin-top:30px"><div class="open">↗</div></div>
        </div>
      </div>
    `;

    el.onclick = () => openProject(p);
    list.appendChild(el);
    io.observe(el);
  });
}

/* -----------------------------
   PROJECT POPUP + IMAGE GALLERY
   ----------------------------- */

function renderGallery(){
  if(!activeProject) return;

  const images = safeImages(activeProject);
  if(!images.length) return;

  activeImage = (activeImage + images.length) % images.length;

  const main = $('#modal-img');
  const count = $('#gallery-count');
  const thumbs = $('#gallery-thumbs');
  const prev = $('#gallery-prev');
  const next = $('#gallery-next');

  main.src = images[activeImage];
  main.alt = `${activeProject.title || 'Project'} image ${activeImage + 1}`;
  const galleryMain = $('.modal-gallery-main');
  if(galleryMain){
    const bg = images[activeImage].replace(/\"/g, '\\"');
    galleryMain.style.setProperty('--gallery-bg', `url("${bg}")`);
  }

  count.textContent = `${String(activeImage + 1).padStart(2,'0')} / ${String(images.length).padStart(2,'0')}`;

  thumbs.innerHTML = images.map((src, i) => `
    <button class="gallery-thumb ${i === activeImage ? 'active' : ''}" data-index="${i}" aria-label="Show image ${i+1}">
      <img src="${src}" alt="">
    </button>
  `).join('');

  $$('.gallery-thumb', thumbs).forEach(btn => {
    btn.onclick = () => {
      activeImage = Number(btn.dataset.index);
      renderGallery();
    };
  });

  const showControls = images.length > 1;
  prev.style.display = showControls ? "" : "none";
  next.style.display = showControls ? "" : "none";
  thumbs.style.display = showControls ? "" : "none";
  count.style.display = showControls ? "" : "none";
}

function renderMetrics(p){
  const box = $('#modal-metrics');
  const metrics = p.metrics || [];
  box.innerHTML = metrics.map(m => `
    <div class="project-metric">
      <strong>${m.value || ""}</strong>
      <span>${m.label || ""}</span>
    </div>
  `).join('');
  box.style.display = metrics.length ? "" : "none";
}

function formatInlineText(text){
  return String(text || "").replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

function renderContribution(p){
  const box = $('#modal-contribution');
  if(!box) return;
  const contribution = (p.contribution || "").trim();
  box.textContent = contribution;
  box.style.display = contribution ? "" : "none";
}

function renderSections(p){
  const box = $('#modal-sections');
  const sections = (p.sections || []).filter(section =>
    section.heading || (section.paragraphs || []).length || (section.bullets || []).length
  );

  box.innerHTML = sections.map((section, index) => `
    <details class="modal-section" ${index < 3 ? "open" : ""}>
      <summary>
        <h4>${section.heading || "Project detail"}</h4>
        <span class="modal-section-toggle" aria-hidden="true">+</span>
      </summary>
      <div class="modal-section-content">
        ${(section.paragraphs || []).map(x => `<p>${formatInlineText(x)}</p>`).join('')}
        ${(section.bullets || []).length
          ? `<ul>${section.bullets.map(x => `<li>${formatInlineText(x)}</li>`).join('')}</ul>`
          : ""}
      </div>
    </details>
  `).join('');
}

function renderLinks(p){
  const box = $('#modal-links');
  box.innerHTML = (p.links || []).map(link => `
    <a class="project-link" href="${link.url}" target="_blank" rel="noopener">${link.label || "Open link"} ↗</a>
  `).join('');
  box.style.display = (p.links || []).length ? "" : "none";
}

function openProject(p){
  activeProject = p;
  activeImage = 0;

  $('#modal-type').textContent = p.type || "";
  $('#modal-title').textContent = p.title || "";
  $('#modal-summary').textContent = p.intro || p.cardSummary || "";
  $('#modal-tags').innerHTML = (p.tags || []).map(x => `<span>${x}</span>`).join('');

  renderContribution(p);
  renderMetrics(p);
  renderSections(p);
  renderLinks(p);
  renderGallery();

  modal.showModal();
  $('.modal-detail')?.scrollTo(0,0);
}

$('#gallery-prev')?.addEventListener('click', () => {
  activeImage--;
  renderGallery();
});
$('#gallery-next')?.addEventListener('click', () => {
  activeImage++;
  renderGallery();
});

$('.close')?.addEventListener('click', () => modal.close());
modal?.addEventListener('click', e => {
  if(e.target === modal) modal.close();
});

addEventListener('keydown', e => {
  if(!modal?.open) return;
  if(e.key === "Escape") modal.close();
  if(e.key === "ArrowLeft"){ activeImage--; renderGallery(); }
  if(e.key === "ArrowRight"){ activeImage++; renderGallery(); }
});

renderProjects();

/* -----------------------------
   HERO PARALLAX
   ----------------------------- */
if(!reduce && matchMedia('(pointer:fine)').matches){
  const stage = $('#stage');
  if(stage){
    let tx=0,ty=0,cx=0,cy=0;
    stage.addEventListener('pointermove', e => {
      const r=stage.getBoundingClientRect();
      tx=((e.clientX-r.left)/r.width-.5)*2;
      ty=((e.clientY-r.top)/r.height-.5)*2;
    });
    stage.addEventListener('pointerleave',()=>tx=ty=0);

    (function loop(){
      cx+=(tx-cx)*.06;
      cy+=(ty-cy)*.06;

      $$('[data-depth]', stage).forEach((el,i)=>{
        const d=+el.dataset.depth;
        const rot=i===1?-3.5:i===2?3:1.5;
        el.style.transform=`translate3d(${cx*18*d}px,${cy*14*d}px,0) rotate(${rot+cx*d}deg)`;
      });
      requestAnimationFrame(loop);
    })();
  }
}

/* -----------------------------
   MAIN CFD-STYLE PARTICLE FIELD
   ----------------------------- */
(function(){
  const c=$('#flow');
  if(!c) return;

  const ctx=c.getContext('2d');
  let W,H,D=1,pts=[];

  function resize(){
    D=Math.min(devicePixelRatio||1,2);
    W=c.clientWidth;
    H=c.clientHeight;
    c.width=W*D;
    c.height=H*D;
    ctx.setTransform(D,0,0,D,0,0);
    pts=Array.from({length:Math.floor(Math.min(260,W*.22))},()=>({
      x:Math.random()*W,
      y:Math.random()*H,
      px:0,py:0,
      life:Math.random()*240
    }));
  }

  function field(x,y){
    const nx=x/W-.5,ny=y/H-.5;
    const a=Math.sin(ny*6+nx*2)*.55 + Math.cos(nx*4)*.25;
    const speed=.55+1.1*(1-Math.min(1,Math.abs(ny)));
    return [Math.cos(a)*speed,Math.sin(a)*speed];
  }

  function frame(){
    ctx.fillStyle='rgba(11,12,13,.07)';
    ctx.fillRect(0,0,W,H);
    ctx.lineWidth=.55;

    for(const p of pts){
      p.px=p.x;p.py=p.y;
      const [vx,vy]=field(p.x,p.y);
      p.x+=vx*1.6;
      p.y+=vy*1.6;
      p.life++;

      if(p.x>W+10||p.y>H+10||p.y<-10||p.life>330){
        p.x=-10;
        p.y=Math.random()*H;
        p.life=0;
      }

      const g=ctx.createLinearGradient(p.px,p.py,p.x,p.y);
      g.addColorStop(0,'rgba(160,170,155,.0)');
      g.addColorStop(1,'rgba(205,211,198,.36)');
      ctx.strokeStyle=g;
      ctx.beginPath();
      ctx.moveTo(p.px,p.py);
      ctx.lineTo(p.x,p.y);
      ctx.stroke();
    }

    if(!reduce) requestAnimationFrame(frame);
  }

  resize();
  addEventListener('resize',resize);
  frame();
})();

/* -----------------------------
   SMALL FLOW ANIMATIONS
   ----------------------------- */
for(const c of $$('.mini-canvas')){
  const x=c.getContext('2d');
  let t=0;

  function r(){
    c.width=c.clientWidth*devicePixelRatio;
    c.height=c.clientHeight*devicePixelRatio;
    x.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);
  }

  function d(){
    const w=c.clientWidth,h=c.clientHeight;
    x.clearRect(0,0,w,h);
    x.strokeStyle='rgba(215,220,210,.18)';
    x.lineWidth=1;

    for(let j=0;j<18;j++){
      x.beginPath();
      for(let i=0;i<=40;i++){
        const px=i/40*w;
        const py=h*(.25+.5*j/18)+Math.sin(i*.28+j*.42+t)*9+(i/40)*j*.15;
        i ? x.lineTo(px,py) : x.moveTo(px,py);
      }
      x.stroke();
    }

    t+=.012;
    if(!reduce) requestAnimationFrame(d);
  }

  r();
  addEventListener('resize',r);
  d();
}

/* ============================================================
   V6 FORMATTING FIXES
   ============================================================ */

/* True seamless marquee.
   It measures one complete phrase group in pixels, clones enough
   copies to cover the screen, then wraps by exactly that width. */
(function setupInfiniteHeroTicker(){
  const track = $('.ticker-track');
  if(!track) return;

  const seed = $('.ticker-group', track);
  if(!seed) return;

  const template = seed.cloneNode(true);
  let groupWidth = 0;
  let offset = 0;
  let last = performance.now();
  let raf = 0;
  let resizeTimer = 0;

  function rebuild(){
    track.innerHTML = '';
    const first = template.cloneNode(true);
    track.appendChild(first);

    groupWidth = first.getBoundingClientRect().width || 1;
    const copies = Math.max(4, Math.ceil((innerWidth * 2.4) / groupWidth) + 2);
    for(let i=1;i<copies;i++) track.appendChild(template.cloneNode(true));

    offset = 0;
    last = performance.now();
    track.style.transform = 'translate3d(0,0,0)';
  }

  function frame(now){
    const dt = Math.min((now - last) / 1000, .08);
    last = now;

    if(!reduce && groupWidth > 0){
      offset -= 34 * dt;
      while(-offset >= groupWidth) offset += groupWidth;
      track.style.transform = `translate3d(${offset}px,0,0)`;
    }
    raf = requestAnimationFrame(frame);
  }

  rebuild();
  raf = requestAnimationFrame(frame);

  addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(rebuild, 120);
  }, {passive:true});
})();

/* Replace the cropped curve with a proper golden logarithmic spiral.
   The process labels progress from the centre outward. */
(function setupGoldenRatioProcess(){
  const holder = $('.golden-process');
  if(!holder) return;
  const svg = $('svg', holder);
  if(!svg) return;

  const PHI = (1 + Math.sqrt(5)) / 2;
  const b = Math.log(PHI) / (Math.PI / 2);
  const a = 7;
  const cx = 820;
  const cy = 350;
  const maxTheta = 4.2 * Math.PI;
  const points = [];

  for(let i=0;i<=360;i++){
    const theta = maxTheta * i / 360;
    const r = a * Math.exp(b * theta);
    const angle = theta - Math.PI / 2;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    points.push([x,y]);
  }

  const d = points.map((p,i) => `${i ? 'L' : 'M'}${p[0].toFixed(2)} ${p[1].toFixed(2)}`).join(' ');
  svg.setAttribute('viewBox','0 0 1600 700');
  svg.setAttribute('preserveAspectRatio','xMidYMid slice');
  svg.innerHTML = `
    <path class="golden-ghost" d="${d}"></path>
    <path class="golden-line" d="${d}"></path>
    <circle cx="${cx}" cy="${cy-7}" r="4"></circle>
  `;

  const positions = {
    q:[51.25,49.0],
    a:[55.4,46.9],
    b:[51.2,67.9],
    v:[37.9,40.1]
  };

  Object.entries(positions).forEach(([key,[left,top]]) => {
    const label = $(`.golden-label.${key}`, holder);
    if(label){
      label.style.left = `${left}%`;
      label.style.top = `${top}%`;
    }
  });
})();

/* ============================================================
   V7 MICRO FIXES
   ============================================================ */

/* Use the LinkedIn URL already stored in PORTFOLIO.profile.linkedin
   in the Contact section instead of the old static location row. */
(function wireLinkedInContact(){
  const linkedinRaw = (PORTFOLIO?.profile?.linkedin || '').trim();
  if(!linkedinRaw) return;

  const linkedin = /^(https?:)?\/\//i.test(linkedinRaw)
    ? (linkedinRaw.startsWith('//') ? `https:${linkedinRaw}` : linkedinRaw)
    : `https://${linkedinRaw}`;

  const contactLinks = $('.contact-links');
  if(!contactLinks || contactLinks.children.length < 2) return;

  const oldRow = contactLinks.children[1];
  const link = document.createElement('a');
  link.className = 'contact-link';
  link.href = linkedin;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.innerHTML = '<span>LinkedIn</span><b>View profile ↗</b>';
  oldRow.replaceWith(link);
})();

/* Keep CV links in sync with the path stored in PORTFOLIO.profile.cv. */
(function wireCvLinks(){
  const cv = (PORTFOLIO?.profile?.cv || '').trim();
  if(!cv) return;
  $$('[data-cv-link]').forEach(link => {
    link.href = cv;
  });
})();

/* ============================================================
   V8 FINAL POLISH
   ============================================================ */

/* Move VALIDATE upward/outward so it stays visible rather than being
   covered by the large Approach heading. */
(function moveValidateLabel(){
  const validate = $('.golden-label.v');
  if(!validate) return;
  validate.style.left = innerWidth <= 900 ? '66%' : '57%';
  validate.style.top = innerWidth <= 900 ? '13%' : '17%';
})();

/* Full-card minimal technical animations for Capabilities 03–05.
   These replace the two stock images and the previous tiny line effects. */
(function setupCapabilityMotion(){
  const cards = [3,4,5].map(n => $(`.bento .skill-card:nth-child(${n})`));
  if(cards.some(card => !card)) return;

  const TAU = Math.PI * 2;
  const canvases = cards.map((card, i) => {
    let canvas = $('.cap-anim', card);
    if(!canvas){
      canvas = document.createElement('canvas');
      canvas.className = `cap-anim cap-anim-${i+3}`;
      canvas.setAttribute('aria-hidden','true');
      card.prepend(canvas);
    }
    return canvas;
  });

  const states = canvases.map(canvas => ({canvas, ctx:canvas.getContext('2d'), w:1,h:1,dpr:1}));

  function resize(state){
    const {canvas,ctx} = state;
    const r = canvas.getBoundingClientRect();
    const dpr = Math.min(devicePixelRatio || 1, 2);
    state.w = Math.max(1,r.width);
    state.h = Math.max(1,r.height);
    state.dpr = dpr;
    canvas.width = Math.round(state.w*dpr);
    canvas.height = Math.round(state.h*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  states.forEach(resize);
  const ro = new ResizeObserver(entries => {
    entries.forEach(entry => {
      const s = states.find(x => x.canvas === entry.target);
      if(s) resize(s);
    });
  });
  canvases.forEach(c => ro.observe(c));

  function clear(ctx,w,h){ ctx.clearRect(0,0,w,h); }

  function drawGrid(ctx,w,h,alpha=.045,step=30){
    ctx.save();
    ctx.strokeStyle=`rgba(35,37,33,${alpha})`;
    ctx.lineWidth=1;
    for(let x=0;x<w;x+=step){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();}
    for(let y=0;y<h;y+=step){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}
    ctx.restore();
  }

  /* 03 Manufacturing: a pair of meshing gear/toolpath forms with a
     travelling CNC-style path. Intentionally schematic rather than literal. */
  function drawManufacturing(s,t){
    const {ctx,w,h}=s; clear(ctx,w,h); drawGrid(ctx,w,h,.035,28);
    const accent='rgba(184,167,122,';
    const ink='rgba(37,39,35,';

    function gear(cx,cy,r,teeth,rot,alpha){
      ctx.save(); ctx.translate(cx,cy); ctx.rotate(rot);
      ctx.strokeStyle=ink+alpha+')'; ctx.lineWidth=1.15;
      ctx.beginPath();
      for(let i=0;i<teeth*2;i++){
        const a=i*Math.PI/teeth;
        const rr=i%2===0?r:r*.86;
        const x=Math.cos(a)*rr, y=Math.sin(a)*rr;
        i?ctx.lineTo(x,y):ctx.moveTo(x,y);
      }
      ctx.closePath(); ctx.stroke();
      ctx.beginPath();ctx.arc(0,0,r*.57,0,TAU);ctx.stroke();
      ctx.beginPath();ctx.arc(0,0,r*.17,0,TAU);ctx.stroke();
      for(let i=0;i<6;i++){
        const a=i*TAU/6;
        ctx.beginPath();ctx.moveTo(Math.cos(a)*r*.21,Math.sin(a)*r*.21);
        ctx.lineTo(Math.cos(a)*r*.52,Math.sin(a)*r*.52);ctx.stroke();
      }
      ctx.restore();
    }

    const r=Math.min(w,h)*.18;
    gear(w*.70,h*.30,r,18,t*.00022,.25);
    gear(w*.88,h*.43,r*.68,14,-t*.00032,.18);

    /* tool path */
    const x0=w*.10, y0=h*.18, pw=w*.42, ph=h*.34;
    ctx.strokeStyle=accent+'.33)';ctx.lineWidth=1.2;ctx.setLineDash([5,8]);
    ctx.beginPath();ctx.roundRect(x0,y0,pw,ph,18);ctx.stroke();ctx.setLineDash([]);
    const u=((t*.000055)%1);
    const perimeter=2*(pw+ph);
    let d=u*perimeter, px=x0,py=y0;
    if(d<pw){px=x0+d;py=y0}
    else if((d-=pw)<ph){px=x0+pw;py=y0+d}
    else if((d-=ph)<pw){px=x0+pw-d;py=y0+ph}
    else {d-=pw;px=x0;py=y0+ph-d}
    ctx.fillStyle=accent+'.88)';ctx.beginPath();ctx.arc(px,py,3.5,0,TAU);ctx.fill();
    ctx.strokeStyle=accent+'.13)';ctx.beginPath();ctx.arc(px,py,12,0,TAU);ctx.stroke();
  }

  /* 04 Electronics: circuit traces and moving signal pulses. */
  const nodes=[
    [.12,.22],[.34,.18],[.57,.27],[.80,.16],
    [.20,.46],[.45,.47],[.72,.43],[.89,.55],
    [.30,.70],[.58,.67],[.78,.77]
  ];
  const edges=[[0,1],[1,2],[2,3],[0,4],[4,5],[1,5],[5,6],[2,6],[6,7],[4,8],[8,9],[5,9],[9,10],[7,10]];
  function drawElectronics(s,t){
    const {ctx,w,h}=s;clear(ctx,w,h);drawGrid(ctx,w,h,.03,32);
    const accent='rgba(184,167,122,';
    const ink='rgba(35,37,33,';
    ctx.lineWidth=1.15;
    edges.forEach(([a,b],i)=>{
      const A=nodes[a],B=nodes[b], ax=A[0]*w,ay=A[1]*h,bx=B[0]*w,by=B[1]*h;
      ctx.strokeStyle=ink+'.14)';
      ctx.beginPath();ctx.moveTo(ax,ay);
      const mx=(ax+bx)/2;
      ctx.lineTo(mx,ay);ctx.lineTo(mx,by);ctx.lineTo(bx,by);ctx.stroke();
      const phase=((t*.00008)+(i/edges.length))%1;
      if(phase<.28){
        const p=phase/.28;
        let x,y;
        if(p<.5){x=ax+(mx-ax)*(p*2);y=ay}
        else if(p<.75){x=mx;y=ay+(by-ay)*((p-.5)*4)}
        else{x=mx+(bx-mx)*((p-.75)*4);y=by}
        ctx.fillStyle=accent+'.85)';ctx.beginPath();ctx.arc(x,y,2.5,0,TAU);ctx.fill();
      }
    });
    nodes.forEach((n,i)=>{
      const x=n[0]*w,y=n[1]*h;
      ctx.fillStyle=i%3===0?accent+'.62)':ink+'.28)';
      ctx.beginPath();ctx.arc(x,y,i%3===0?3.4:2.2,0,TAU);ctx.fill();
      if(i%3===0){ctx.strokeStyle=accent+'.14)';ctx.beginPath();ctx.arc(x,y,8+2*Math.sin(t*.002+i),0,TAU);ctx.stroke();}
    });
  }

  /* 05 Delivery: a full-card project system — milestone loop plus faint
     schedule bars, more substantial than the old one-pixel progress line. */
  function drawDelivery(s,t){
    const {ctx,w,h}=s;clear(ctx,w,h);
    const accent='rgba(184,167,122,';
    const ink='rgba(35,37,33,';
    const y=h*.68;
    const xs=[.10,.29,.49,.69,.90].map(v=>v*w);

    /* ghost planning bars */
    for(let i=0;i<5;i++){
      const yy=h*(.18+i*.075);
      const start=w*(.12 + (i%2)*.08);
      const len=w*(.22 + (i%3)*.065);
      ctx.fillStyle=ink+(0.035+i*.008)+')';
      ctx.fillRect(start,yy,len,4);
      ctx.fillStyle=accent+'.14)';
      ctx.fillRect(start,yy,len*((Math.sin(t*.0007+i)+1)/2),4);
    }

    /* engineering loop */
    ctx.strokeStyle=ink+'.17)';ctx.lineWidth=1.15;
    ctx.beginPath();ctx.moveTo(xs[0],y);
    for(let i=1;i<xs.length;i++){
      const c=(xs[i-1]+xs[i])/2;
      ctx.bezierCurveTo(c,y-34,c,y+34,xs[i],y);
    }
    ctx.stroke();
    xs.forEach((x,i)=>{
      ctx.fillStyle='rgba(243,240,233,.9)';ctx.strokeStyle=ink+'.28)';ctx.lineWidth=1;
      ctx.beginPath();ctx.arc(x,y,7,0,TAU);ctx.fill();ctx.stroke();
      ctx.fillStyle=accent+(i===0?'.75)':'.42)');ctx.beginPath();ctx.arc(x,y,2.2,0,TAU);ctx.fill();
    });

    const progress=(t*.000045)%1;
    const segment=progress*(xs.length-1);
    const i=Math.min(xs.length-2,Math.floor(segment));
    const u=segment-i;
    const x0=xs[i],x1=xs[i+1],c=(x0+x1)/2;
    const omt=1-u;
    /* cubic Bezier where C1=(c,y-34), C2=(c,y+34) */
    const px=omt*omt*omt*x0 + 3*omt*omt*u*c + 3*omt*u*u*c + u*u*u*x1;
    const py=omt*omt*omt*y + 3*omt*omt*u*(y-34) + 3*omt*u*u*(y+34) + u*u*u*y;
    ctx.fillStyle=accent+'.95)';ctx.beginPath();ctx.arc(px,py,4,0,TAU);ctx.fill();
    ctx.strokeStyle=accent+'.16)';ctx.beginPath();ctx.arc(px,py,12,0,TAU);ctx.stroke();
  }

  let raf=0;
  function frame(t){
    drawManufacturing(states[0],t);
    drawElectronics(states[1],t);
    drawDelivery(states[2],t);
    if(!reduce) raf=requestAnimationFrame(frame);
  }
  frame(0);
})();
