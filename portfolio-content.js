/* ============================================================
   PORTFOLIO CONTENT
   ============================================================
   THIS IS THE MAIN FILE YOU EDIT.

   You do NOT need to edit index.html, styles.css or app.js.

   BASIC RULES:
   - Keep text inside "quotation marks".
   - Keep commas between items.
   - Image paths start with: assets/
   - Duplicate a whole project block to add another project.
   - Add as many images as you want inside the images: [ ... ] list.
   ============================================================ */

const PORTFOLIO = {

  profile: {
    firstName: "Abhimaneu",
    lastName: "Nair",
    locationLine: "Mechanical Engineering Graduate · London",

    hero:
      'First Class Mechanical Engineering graduate working across <strong>design, simulation, manufacturing and prototyping.</strong>',

    email: "nairabhimaneu@gmail.com",
    linkedin: "https://www.linkedin.com/in/abhiyee/",
    cv: "assets/Abhimaneu_Nair_CV.pdf"
  },


  /* =========================================================
     PROJECTS

     CARD TEXT stays short.
     The detailed popup can be much longer.

     images:
       Add as many as you want.

       Example:
       images: [
         "assets/my-image-1.jpg",
         "assets/my-image-2.jpg",
         "assets/my-image-3.png"
       ]

     sections:
       These become headings inside the project popup.
       You can write paragraphs AND bullet points.
     ========================================================= */

  projects: [

    {
      title: "Intake Flow CFD Dissertation",
      type: "CFD · Thermofluids · Research",

      cardSummary:
        "Parametric CFD investigation into intake geometry, valve configuration, pressure loss and turbulence.",

      images: [
        "assets/anim_1.gif",
        "assets/CFD_1.webp",
        "assets/CFD_3.webp",
        "assets/CFD_2.webp",
      ],

      tags: [
        "ANSYS Fluent",
        "SolidWorks",
        "CFD",
        "Thermofluids",
        "Parametric CAD",
        "Flow optimisation",
      ],

      metrics: [
        { value: "30+", label: "CAD configurations" },
        { value: "4.5M", label: "Final optimised mesh cells" },
        { value: "800+", label: "Post-processing images" }
      ],

      intro:
        "This project investigated how intake-system geometry influences airflow through a poppet valve and into the combustion chamber. 32 parametric CAD configurations were analysed using ANSYS Fluent and SolidWorks Flow Simulation, focusing on pressure loss, mass flow, velocity distribution and turbulence. The study was completed in two stages, first comparing different cylinder-equivalent geometries and valve lifts, then investigating valve seat angles from 30° to 45°. The final aim was to identify a configuration that improved airflow performance while maintaining practical and realistic geometry.",

      sections: [
        {
          heading: "Objective",
          paragraphs: [
            "The objective was to understand how changes in intake geometry affect the flow entering the combustion chamber and to identify a design that reduced pressure losses while maintaining strong airflow and chamber coverage. The investigation focused particularly on cylinder-equivalent geometry, valve lift and valve seat angle, as these have a direct influence on the available flow area and the behaviour of air as it passes through the valve curtain."
          ]
        },

        {
          heading: "Method",
          paragraphs: [
            "A fully parametric intake-valve model was developed in SolidWorks so that key dimensions could be changed consistently between simulations. 32 configurations were created across the study.",
            "The first stage compared 1, 2, 3 and 4-cylinder equivalent geometries at several valve lift-to-diameter ratios. Based on these results, the 2-cylinder configuration was selected for further investigation.",
            "The second stage then compared valve seat angles of 30°, 35°, 40° and 45° using the selected geometry.",
            "Simulations were carried out using steady-state RANS CFD. ANSYS Fluent was used for the main analysis with the SST k-ω turbulence model, while SolidWorks Flow Simulation was also used during the project for comparison and earlier development work.",
            "Mesh refinement was carried out progressively, with the final Fluent models reaching approximately 4.5 million cells. Convergence was assessed using residuals together with inlet/outlet mass-flow balance and stability of the monitored engineering quantities"
          ],
          bullets: [
            "Developed 30+ parametric intake and valve configurations.",
            "Used ANSYS Fluent and SolidWorks Flow Simulation.",
            "Applied steady-state RANS modelling.",
            "Used the SST k-ω turbulence model for the final Fluent analysis.",
            "Maintained consistent boundary conditions to allow fair comparison between designs."
          ]
        },

        {
          heading: "Results & Engineering Decisions",
          paragraphs: [
            "The first stage showed that the 2-cylinder equivalent configuration provided the strongest overall balance of chamber flow coverage and turbulence behaviour. The 4-cylinder geometry produced a higher pressure drop, while the 1-cylinder configuration had a relatively short intake-port arrangement. The 2-cylinder geometry was therefore carried forward into the valve-seat investigation.",
            "In the second stage, reducing the valve seat angle improved overall flow performance. At the highest valve lift, the 30° design produced the highest mass flow rate of approximately 0.0518 kg/s and the lowest pressure drop of approximately 6.43 kPa. In comparison, the 45° configuration produced approximately 0.0473 kg/s with a pressure drop of around 7.04 kPa.",
            "The 35° geometry produced the highest average turbulence kinetic energy, showing that the configuration with the greatest mass flow was not necessarily the one with the highest turbulence. This meant the final selection could not be based on a single result alone.",
            "Considering mass flow, pressure loss and the overall flow behaviour together, the final recommended configuration was the 2-cylinder equivalent geometry with a 30° valve seat angle."
          ],
          bullets: [
            "Selected the 2-cylinder equivalent geometry after comparing four configurations.",
            "Lower valve seat angles generally improved mass-flow performance.",
            "30° seat angle achieved the highest mass flow at high valve lift.",
            "30° also produced the lowest pressure drop of the four seat angles.",
            "35° produced the highest average turbulence kinetic energy.",
            "Final recommendation: 2-cylinder equivalent geometry + 30° valve seat."
          ]
        },
        {
          heading: "Limitations & Further Work",
          paragraphs: [
            "The study used steady-state CFD and therefore did not model the transient movement of the piston or valves during a complete engine cycle. A single turbulence model was used for the final comparison and the work did not include experimental validation.",
            "Further work could include transient simulations with moving piston and valve boundaries, comparison of multiple turbulence models and experimental validation using a flow bench or similar test setup."
          ],
          bullets: [
            "Steady-state rather than transient analysis.",
            "Fixed piston and valve positions for each simulation.",
            "Single turbulence model used for final comparison.",
            "No experimental validation.",
            "Future work could include moving-mesh CFD and physical flow testing."
          ]
        },

        {
          heading: "What I learned",
          bullets: [
            "Parametric CAD modelling for simulation-driven design.",
            "CFD setup, meshing, convergence monitoring and post-processing.",
            "Interpreting velocity, pressure and turbulence results rather than relying on one metric.",
            "Making engineering decisions from competing performance criteria.",
            "Identifying limitations and uncertainty within numerical analysis.",
            "Processing and comparing large sets of simulation results.",
            "Technical report writing and presenting quantitative findings.",
            "Managing a large independent engineering project from geometry development through final recommendation."
          ]
        }
      ],

      links: [
        
        { label: "View report", url: "assets/dwq.pdf" }
        
      ]
    },


    {
      title: "UEL Racing",
      type: "Formula Student · Technical Team Lead",

      cardSummary:
        "Multidisciplinary engineering leadership across vehicle development, planning, technical documentation and delivery.",

      images: [
        "assets/workp.gif",
        "assets/UEL Racing group.webp",
        "assets/UEL Racing Final model.webp",
        "assets/UEL Racing 2.webp",
        "assets/UEL Racing Chassis.webp",
        "assets/3D Scan Engine.webp",
        "assets/Budget list.webp"
      ],

      tags: [
        "Formula Student",
        "Leadership",
        "Team Management",
        "Manufacturing",
        "Project Delivery",
        "Compliance"
      ],

      metrics: [
        { value: "50+", label: "Active Members Managed" },
        { value: "600cc", label: "Kawasaki Ninja ZX-6R" },
        { value: "£15,000", label: "Average Cost · Owner Maintained" }
      ],

      intro:
        "As Technical Team Lead for UEL Racing's inaugural entry into the IMechE Formula Student competition, I managed a multidisciplinary team of members through the complete lifecycle of a single-seater race car, from CAD design and structural simulation to physical fabrication, engine tuning, and compliance testing.",

      contribution:
        "Technical Team Lead — coordinated chassis, suspension, drivetrain and system-integration work; managed planning, budgets, documentation and supplier communication; and contributed to fabrication, assembly and testing.",

      sections: [
        {
          heading: "Engineering Leadership & Coordination",
          bullets: [
            "Led cross-functional sub-teams across chassis, suspension, drivetrain, and system integration.",
            "Managed project timelines, overall budget constraints, documentation, and supplier communications.",
            "Organised internal skill-building workshops covering SolidWorks, ANSYS, 3D printing, 3D scanning, and metalworking."
          ]
        },
        {
          heading: "Powertrain & Mechanical Design",
          bullets: [
            "**Powertrain:** Integrated a 600cc inline-4 carbureted Kawasaki Ninja ZX-6R engine with stock downpipe and integrated sequential gearbox.",
            "**Drivetrain:** Designed a chain-driven Limited Slip Differential (LSD) system tailored for dynamic cornering efficiency.",
            "**Chassis & Suspension:** Developed a steel spaceframe chassis and custom double wishbone suspension arms utilizing mini Cooper 13-inch rims, hubs, and dedicated brake assemblies."
          ]
        },
        {
          heading: "Design Strategy & Scrutineering Compliance",
          paragraphs: [
            "Operating as a first-time entry with limited workspace and budget, design choices strictly prioritised cost-effectiveness, reliability, and ease of maintenance.",
            "To guarantee compliance during IMechE technical scrutineering, explicit design buffers were applied to rulebook limits such as increasing the minimum ground clearance rule from 10mm to 20mm to prevent disqualifications due to tolerance stack-ups."
          ]
        },
        {
          heading: "Manufacturing & System Assembly",
          bullets: [
            "**Fabrication:** Executed manual welding, joining, lathe work, and milling for frame node points and suspension mounting tabs.",
            "**Machining & Rapid Prototyping:** Utilized 3-axis/5-axis CNC machining alongside 3D-printed display mockups to validate component fitments.",
            "**Systems Testing & Tuning:** Supervised system servicing including engine tuning, brake bleeding, steering alignment checks, and electrical lighting integration."
          ]
        },
        {
          heading: "Outreach & Institutional Impact",
          bullets: [
            "Elevated university reputation and media visibility through public engagement, sim-racing competitions, and active social media updates.",
            "Generated long-term value for the institution through industry connections, sponsor alignment, and established technical documentation for future team iterations."
          ]
        },
      ],

      links: [
        
        { label: "Instagram", url: "https://www.instagram.com/uelracing/" }
        
      ]
    },


    {
      title: "IMechE Design Challenge 2025",
      type: "Autonomous Systems · Mechanical & Embedded Design",

      cardSummary:
        "Designed and built a winning autonomous engineering system through continuous iteration under competition constraints.",

      images: [
        "assets/Regional Final Me 3.webp",
        "assets/National Finals Group Photo 1.webp",
        "assets/Admans Plug National Final 1.webp",
        "assets/Admans Plug Card.webp",
        "assets/Admans Plug National Final 2.webp",
        "assets/Admans Plug National Final 3.webp",
        "assets/Admans Plug National Final 4.webp",
        "assets/Admans Plug National Final 5.webp",
        "assets/Admans Plug Regional Final 1.webp",
        "assets/Admans Plug Regional Final 2.webp",
        "assets/Admans Plug Regional Final 3.webp",
        "assets/National Finals Group Photo 2.webp",
        "assets/Regional Final ME 1.webp",
        "assets/Regional Final Me 2.webp"
      ],

      tags: [
        "Embedded Systems",
        "Sensors and Control",
        "Systems Integration",
        "Real-World Problem Solving",
        "Team Collaboration",
        "DfMA",
        "Rapid Prototyping"
      ],

      metrics: [
        { value: "1st", label: "London" },
        { value: "3rd", label: "United Kingdom" },
        { value: "20+", label: "Software Iterations" },
        { value: "5+", label: "Working Prototypes" }
      ],

      intro:
        "The 2025 IMechE Design Challenge Advanced Challenge required a fully autonomous EV-charging demonstrator that could navigate unknown distances, engage two targets at different heights, provide visual and audio confirmation and return to specified stopping points without software adjustment between runs. Between the London Regional competition and National Final, the design progressed from a belt-driven Arduino system to an ESP32-based dual-motor direct-drive platform with independent wheel control and a passive gravity-operated charging armature.",

      contribution:
        "Team project — I contributed to mechanical design, electronics, embedded control, testing, Bill of Materials management and competition operation of the device.",

      sections: [
        {
          heading: "Competition Mission",
          paragraphs: [
            "The Advanced Challenge simulated an autonomous robotic EV-charging system. The device started from a defined horizontal target and had to travel autonomously towards a vertical barrier without knowing the exact lane length in advance.",
            "The first charging target was positioned 150 mm above the track. After making contact, the device had to remain engaged, provide both visual and audible confirmation, return to the original starting point and then repeat the mission towards a second charging target positioned 50 mm above the track.",
            "After completing the second charging operation, the device then had to reverse and stop accurately on an intermediate horizontal target whose position was also unknown beforehand.",
            "No remote control, distance input or software tuning was permitted between competition runs, so the system had to determine its own movement and stopping behaviour autonomously."
          ],
          bullets: [
            "Fully autonomous after manual start.",
            "Unknown competition lane distances.",
            "Red LED and audible signal during charging engagement.",
            "Complete mission required within three minutes."
          ]          
        },
        {
          heading: "Mechanical Architecture",
          paragraphs: [
            "The device used a compact delta-style three-wheel chassis. Two rear wheels provided propulsion while the front support stabilised and guided the platform.",
            "For the Regional competition, the front wheel arrangement was mechanically adjustable so that alignment could be tuned during testing. For the National Final, this was replaced with a spherical PTFE front ball. The lower directional resistance of the spherical support reduced the tendency of the front wheel to introduce unwanted steering forces and allowed the independently driven rear wheels to correct alignment more effectively.",
            "Acrylic and plywood were both evaluated as chassis materials. Acrylic was visually clean but showed greater susceptibility to warping and was less suitable for repeated assembly and integration. The final Regional and National versions therefore used plywood, providing a more stable, easier-to-manufacture and more sustainable structure.",
            "The device was designed without conventional screw fastening for the main structural assembly. Components were produced as controlled push-fit parts so that the device could be assembled and disassembled quickly while remaining mechanically secure during operation.",
            "The push-fit mechanical architecture also meant many components could be removed or replaced without damaging the surrounding structure, which was valuable throughout repeated testing and competition preparation."
          ]
          
        },
        {
          heading: "Armature & Product Design",
          paragraphs: [
            "A key part of the design was the charging armature extending from the main device towards the front-mounted EV charging plug simulator.",
            "Rather than using another actuator to move the charging interface between the two required target heights, the mechanism was designed to operate mechanically using the geometry of the wall contact, gravity and a latch.",
            "During the first charging cycle, the armature was positioned for the 150 mm target. When the upper target was engaged, the contact mechanism released the latch and allowed the armature to fall into its second mechanical position. This automatically aligned the charging plug with the lower 50 mm target for the next cycle.",
            "The result was a passive height-changing system requiring no additional motor, actuator or software command. This reduced component count, electrical load and control complexity while still meeting the Advanced Challenge requirement for automatic target-height adjustment.",
            "The charging mechanism was built around an aluminium U-profile extending towards the front of the device. The profile provided structural support for the charging plug while also allowing electrical functions to be integrated into the same assembly.",
            "LEDs were concealed within the profile so that the required visual indication remained clearly visible without exposed wiring or loosely mounted components. The aluminium structure also contributed to the electrical grounding arrangement.",
            "Custom-manufactured brass buttons were used as physical switches. These provided a robust mechanical interface while giving the finished device a more deliberate and product-like appearance than exposed generic switches. The objective was to make the device look and behave like an engineered product rather than a temporary competition prototype."
          ],
          bullets: [
            "Mechanical rather than motorised height adjustment.",
            "Gravity-operated transition between target positions.",
            "Reduced electrical and software complexity."
          ]  
        },
        {
          heading: "Drive System - Regional",
          paragraphs: [
            "The Regional competition device used an Arduino Uno as the central controller, an A4988 stepper driver and a single stepper motor.",
            "The motor drove an adjustable rear axle through a belt transmission. The axle arrangement allowed physical alignment adjustments during development and provided repeatable movement based on step counting.",
            "A colour sensor was used for target detection, while the stepper system provided deterministic travel for sections of the mission where the device could return by replaying the number of forward steps.",
            "The charging mechanism was built around an aluminium U-profile extending towards the front of the device. The profile provided structural support for the charging plug while also allowing electrical functions to be integrated into the same assembly.",
          ],
          bullets: [
            "Arduino Uno controller.",
            "Single stepper motor.",
            "A4988 stepper driver.",
            "Belt-driven adjustable rear axle.",
            "Colour-sensor target detection.",
            "Step-count-based position tracking."
          ]  
        },
        {
          heading: "Drive System - National",
          paragraphs: [
            "For the National Final, the drivetrain and electronics were substantially redesigned. The Arduino Uno was replaced by an ESP32, providing greater computational capability and making development and debugging easier. The ESP32's wireless functionality was disabled to comply with competition rules.",
            "The single belt-driven motor was replaced by two independently controlled rear stepper motors, each directly driving its own wheel. This removed transmission losses associated with the belt system and gave the software direct control over the behaviour of each side of the vehicle.",
            "Independent wheel control allowed the device to correct its own alignment by applying small differences in wheel motion. Rather than relying primarily on mechanical adjustment, the device could actively compensate for veering and effectively self-steer.",
            "TMC2208 stepper drivers were introduced in place of the earlier A4988 arrangement. These produced quieter and smoother operation while reducing unnecessary acoustic noise and heat generation.",
          ],
          bullets: [
            "ESP32 controller.",
            "Two independently controlled rear stepper motors.",
            "TMC2208 silent stepper drivers.",
            "Direct-drive rear wheels.",
            "Electronic self-correction for alignment.",
            "Improved drivetrain efficiency and controllability."
          ]  
        },
        {
          heading: "Control Logic",
          paragraphs: [
            "The final control system was structured around a non-blocking internal timing system rather than conventional delay commands. Early versions of the code used delays, but these prevented other functions from operating while the controller was waiting and made interactions between sensors, motors and timing events more difficult to manage.",
            "The final architecture therefore used an internal clock to track multiple behaviours in real time. Motor control, LED states, charging timing, sensor operation and mission transitions could all be monitored without freezing the rest of the program.",
            "Acceleration and deceleration ramps were also introduced so that the device did not instantaneously demand full motor speed. This improved stability, reduced abrupt mechanical loading and made stopping and alignment more predictable.",
          ]
           
        },
        {
          heading: "Mission Sequence",
          paragraphs: [
            "Pressing the start button activated the controller, green status LED, motor drivers and stepper motors. Both rear motors began moving in synchronisation, while the software continuously compared their commanded motion and corrected any difference.",
            "During the first outward and return journey, the colour sensor remained disabled. Because the stepper motors provided accurate step counts, the device could return to its original position by reversing the commanded motion. Keeping the sensor inactive when it was unnecessary also reduced electrical consumption and avoided unnecessary use of additional subsystems.",
            "When the front charging armature contacted the first vertical target, a switch integrated into the plunger was activated. The device stopped, illuminated the red charging LED and activated the buzzer for approximately 12 seconds before reversing.",
            "The device then returned to the original starting position using motor step counting. During the first engagement, the mechanical armature latch had already repositioned the charging plug to the second target height. The device then repeated the outward journey and engaged the lower target. After this second charging cycle, the required final stopping point was an unknown intermediate target rather than the original starting position. Motor step counting alone could therefore no longer determine where to stop, so the colour sensor was activated for the final return phase."
          ]
           
        },
        {
          heading: "Colour-Sensor Development",
          paragraphs: [
            "An early approach attempted to measure the target colours during the initial part of the run and then recognise the white centre of the target during the final return. Although theoretically flexible, the sensor readings changed with ambient lighting, vehicle movement, sensor height and other environmental effects.",
            "A more reliable strategy was developed by detecting the blue region of the target. Blue provided a clearer distinction from surrounding colours under controlled testing. Once blue was detected, the device moved a fixed number of additional steps to reach the required stopping position. Because the physical spacing between the printed target bands was constant, this allowed the final positioning to be calibrated repeatably.",
            
          ]
           
        },
        {
          heading: "Regional Competition Adaptability",
          paragraphs: [
            "At the London Regional competition, the open venue introduced lighting conditions that were significantly different from the controlled environment used during development.",
            "The colour sensor's RGB readings shifted substantially under the new ambient illumination, making the previously validated blue threshold unreliable. Recalibrating multiple RGB thresholds at the venue would have been time-consuming and potentially fragile.",
            "The problem was reconsidered by the team, from the underlying optical behaviour of the target instead. The black target region reflects considerably less visible light than the coloured regions, so its detection depended less on the relative balance of red, green and blue illumination.",
            "The software was changed at the competition to detect the low-reflectance black region instead. This provided a much more robust reference under the venue lighting conditions and became the successful competition strategy.",
          ],
          bullets: [
            "Diagnosed unexpected sensor behaviour at the venue.",
            "Moved away from a colour-specific threshold strategy.",
            "Used low reflected intensity from black as the more robust physical characteristic.",
            "Modified and validated the control logic under competition pressure.",

          ]  
        },
        {
          heading: "Electronics & Safety Architecture",
          paragraphs: [
            "The electronic system was mounted primarily beneath the chassis. This created a cleaner external appearance while physically protecting wiring and components from accidental contact.",
            "The layout also reflected the architecture used in many engineered vehicles and products, where electrical and control hardware is packaged away from the primary user-facing surfaces.",
            "Safety was implemented at both hardware and software levels. The National Final system included duplicated drive hardware across the two rear wheels, separate motor drivers, multiple switches and separate visual indicators. The control logic was designed so that failure of one subsystem would not necessarily remove all device functionality.",
            "This redundancy became particularly useful during development because the system could identify or tolerate certain partial failures rather than immediately losing complete control."
          ]
           
        },
        {
          heading: "Battery Selection & Power System",
          paragraphs: [
            "Sodium-ion batteries were selected for the final power system. The aim was to provide strong current delivery and stable voltage behaviour while retaining a safer battery chemistry for a compact competition device.",
            "Battery selection was particularly important because the system had to supply the controller, two stepper motors, motor drivers, sensors, LEDs and audible signalling while remaining fully self-contained.",
            "The competition rules prohibited lithium batteries, so the selected sodium-ion system also provided a practical route to achieving the required electrical performance while remaining within the competition safety requirements.",

          ]
           
        },
        {
          heading: "Bill of Materials & Cost Control",
          paragraphs: [
            "I was responsible for managing the Bill of Materials for the project. This was a formal competition deliverable and had to remain aligned with both the CAD assembly and the physical device.",
            "Every manufactured and purchased component had to be recorded, including part identification, design revision, quantity, material, manufacturing method, supplier, VAT-inclusive cost and mass. Spare or alternative parts intended for competition use also had to be accounted for.",
            "The Advanced Challenge operated under an IMechE BoM budget limit of £90, meaning that each design change also had to be considered commercially. Changes such as the transition from acrylic to plywood, the drivetrain redesign, motor-driver upgrades and additional National Final electronics all had to be reflected in the cost model.",
            "Managing the BoM throughout the development process gave me practical experience of configuration control and the relationship between engineering design, procurement, manufacturing and project cost.",
          ],
          bullets: [
            "Maintained detailed component and material records.",
            "Managed supplier and costing evidence.",
            "Maintained alignment between CAD, BoM and physical hardware",
          ]  
        },
        {
          heading: "Device Controller & Competition Operation",
          paragraphs: [
            "I also acted as the person responsible for preparing and starting the device during the Regional competition runs.",
            "Before each attempt I had to ensure that the device was correctly positioned and aligned, that the armature latches were properly secured in their starting configuration and that the relevant safety features and electrical systems remained intact.",
            
          ],
          bullets: [
            "Final alignment before each run.",
            "Armature and latch verification.",
            "Electrical and safety inspection.",
          ]  
        },
        {
          heading: "National Final & Reliability Lesson",
          paragraphs: [
            "At the National Final, the device performed exceptionally well in the main autonomous tasks, including functions that proved difficult for several competing devices.",
            "However, the buzzer began malfunctioning, potentially following transport or an unknown issue at the venue. Audible confirmation was explicitly part of the charging engagement requirement, alongside the red visual indicator.",
            "Although the autonomous navigation, alignment and charging engagement itself continued to operate correctly, failure of this small subsystem meant that marks associated with the charging events were lost.",
            "We had brought repair equipment, including a soldering iron, but replacing and resoldering the buzzer at the venue created additional risks. Competition turnaround time was limited, and making an unverified electrical modification after scrutineering could have resulted in the device being late for the next run or potentially being considered unsafe.",
            "The decision was therefore made not to perform a rushed modification without sufficient time to test it properly."

          ]
           
        },
        {
          heading: "Insights Gained and Lessons Learned",
          paragraphs: [
            "The project reinforced that good engineering is not just about making the most sophisticated part of a system work. The National Final device could autonomously navigate, correct its own alignment, change charging height mechanically, control two independent stepper motors and detect its final stopping target, yet a small failed buzzer still had a major effect on the final result.",
            "It also showed the value of repeatedly challenging the architecture of a design. Between Regionals and Nationals, improvements were made to the chassis, front support, drivetrain, motor control, processor, electronics layout and software rather than simply making cosmetic changes.",
            
          ],
          bullets: [
            "System-level mechanical, electrical and software integration.",
            "Autonomous control and embedded programming.",
            "Independent motor control and self-correction.",
            "Sensor integration under uncontrolled environmental conditions.",
            "Using first-principles reasoning to simplify engineering problems.",
            "Design for Manufacture and Assembly and Sustainable material selection.",
            "Electrical safety and packaging.",
            "Reliability engineering and failure-mode thinking."

          ]  
        },
      ],

      links: []
    },


    {
      title: "HGV Passive Air Curtain",
      type: "Aerodynamics · CFD · Market Research",

      cardSummary:
        "CFD-led development of a passive air-curtain system integrated into an HGV trailer side skirt, using vehicle-generated pressure to control airflow around the rear bogie and reduce aerodynamic drag.",

      images: [
        "assets/Cover truck.webp",
        "assets/Design 1.webp",
        "assets/Design 2.webp",
        "assets/Design 1 bottom.webp",
        "assets/Design 2 bottom.webp",
        "assets/D1 Pressure.webp",
        "assets/D2 Pressure.webp"
      ],

      tags: [
        "ANSYS Fluent",
        "SolidWorks",
        "Fusion 360",
        "Fluid Mechanics",
        "RANS"
    
      ],

      metrics: [
        { value: "12", label: "CFD Cases" },
        { value: "4%", label: "Increase in efficiency" },
      
      ],

      intro:
        "Team CFD project investigating a passive air-curtain system integrated into an HGV trailer side skirt to reduce aerodynamic losses around the rear bogie. Four configurations were compared in ANSYS Fluent at 0°, 7.5° and 15° yaw, including unskirted and conventional-skirt baselines and two air-curtain concepts.",

      contribution:
        "Team project — I contributed to CAD geometry development, CFD setup and simulation, and aerodynamic result interpretation. Contributors: Jennise, Will, Joel and Harry.",

      sections: [
        {
          heading: "Concept & CAD Development",
          paragraphs: [
            "The engineering problem focused on the exposed bogie beneath an HGV trailer. Air interacting with the wheels, axles and suspension produces separation and a turbulent low-pressure wake, increasing aerodynamic drag. Conventional side skirts reduce this by shielding the underbody, but they do little to actively control the remaining airflow approaching the wheel region.",
            "Our concept extended the side skirt into a passive flow-control device. Incoming air was captured at the skirt, routed through an internal longitudinal duct and discharged near the rear wheels as an air curtain. I was involved in developing and preparing the CAD geometry used to investigate this concept.",
            "Four configurations were created for comparison: an unskirted baseline, a conventional skirted baseline and two modified air-curtain designs. The two air-curtain concepts deliberately used different intake and outlet geometries so that the effect of flow restriction, pressure recovery and jet concentration could be compared."


          ],
          bullets: [
            "Baseline 1 : standard HGV trailer without a side skirt.",
            "Baseline 2 : conventional HGV trailer side skirt.",
            "Design 1 : narrower scoop and outlet configuration intended to produce a concentrated air curtain.",
            "Design 2 : larger 850 × 850 mm intake, smooth curved duct and 50 × 400 mm outlet.",
            "Design 2 used an approximately 5 m duct with a 36.1:1 inlet-to-outlet area ratio.",
            "Small aerodynamic details were defeatured where appropriate to control mesh complexity."
          ]
        },
        {
          heading: "CFD Methodology",
          paragraphs: [
            "I was involved directly in setting up and running the CFD simulations used to compare the concepts. ANSYS Fluent was used with a steady-state RANS approach and the k-ω SST turbulence model, selected to provide suitable treatment of adverse pressure gradients, separation and external aerodynamic flow.",
            "A comparative test matrix was created using all four configurations at yaw angles of 0°, 7.5° and 15°, producing 12 primary CFD cases. The 7.5° case represented typical UK on-road HGV crosswind conditions, while 15° represented a more severe but plausible operating condition.",
            "The computational domain was sized to allow the external flow and trailer wake to develop while maintaining a low blockage ratio. Meshing focused additional resolution around the air-curtain duct, intake and outlet, tractor-trailer interaction region, bogie and downstream wake where the strongest flow gradients were expected.",
            "The available computational resources meant that simplification was necessary during the study. The final comparative analysis therefore prioritised consistent modelling between configurations so that aerodynamic trends could be evaluated reliably rather than treating the results as a fully resolved representation of every three-dimensional vehicle-flow feature."
          ],
          bullets: [
            "ANSYS Fluent steady-state RANS.",
            "k-ω SST turbulence model.",
            "SIMPLE pressure-velocity coupling.",
            "0°, 7.5° and 15° yaw conditions.",
            "Approximately 1.25% domain blockage ratio.",
            "No-slip vehicle surfaces.",
            "Moving-ground representation.",
            "Targeted mesh refinement around ducts, wheels and wake regions."
          ]
        },
        {
          heading: "Results & Engineering Decisions",
          paragraphs: [
            "The simulations showed that the air-curtain geometry significantly changed both the internal duct flow and the external flow around the trailer. The most successful configuration was Design 2, which produced the lowest reported drag coefficient at all three evaluated yaw angles.",
            "The unskirted baseline produced drag coefficients of 0.745, 0.761 and 0.793 at 0°, 7.5° and 15° respectively. Design 2 reduced these to 0.721, 0.738 and 0.767. The results therefore indicated that the wider curved air-curtain geometry could outperform both the unskirted configuration and the conventional skirt within the comparative simulations.",
            "Pressure and velocity contours also revealed why geometry alone could not be judged from outlet size. The narrower configuration imposed greater resistance and showed susceptibility to unstable or reversed duct flow when the available intake pressure was insufficient. The wider curved geometry provided a less restrictive flow path and maintained more consistent forward flow.",
            "Yaw angle became one of the most important findings. At low yaw, the side-skirt intake experienced relatively limited positive pressure. At 15° yaw, however, the windward skirt developed an approximately 1,200 Pa pressure differential, providing a substantially stronger passive driving force for the duct.",
            "The results also exposed another trade-off. At 7.5° yaw the Design 2 duct generated a jet approximately twice the freestream velocity, but the jet became misaligned and interacted directly with the wheel. This showed that maximising velocity was not sufficient; outlet direction and stability under changing yaw conditions were equally important."
          ],
          bullets: [
            "Design 2 produced the lowest Cd across all three tested yaw conditions.",
            "0° yaw: Cd reduced from 0.745 baseline to 0.721.",
            "7.5° yaw: Cd reduced from 0.761 to 0.738.",
            "15° yaw: Cd reduced from 0.793 to 0.767.",
            "Higher yaw substantially increased the available intake pressure.",
            "Narrower outlets increased jet concentration but also increased resistance and backflow risk.",
            "CFD identified jet direction under crosswind as an important area for further optimisation.",

          ]
        },
      ],

      links: [

        { label: "View Report", url: "assets/HGV CFD Study.pdf" }
      ]
    },


    {
      title: "FEA & Structural Analysis",
      type: "Simulation · Structural",

      cardSummary:
        "Structural analysis of a wheel rim and thin-walled cantilever tube, using FEA to validate theoretical behaviour, investigate failure modes and guide design changes.",

      images: [
        "assets/Cover FEA.webp",
        "assets/Wheel intro.webp",
        "assets/Wheel drawing.webp",
        "assets/Wheel sim.webp",
        "assets/Wheel sim 1.webp",
        "assets/FEA sim.webp",
        "assets/FEA sim 1.webp",
        "assets/FEA sim 2.webp",
      ],

      tags: [
        "FEA",
        "SolidWorks Simulation",
        "Mesh Convergence",
        "Structural Analysis",
        "Design Validation"
      ],

      metrics: [],

      intro:
        "These projects explored structural behaviour using two different FEA applications. The first involved designing and analysing an automotive wheel rim in Fusion 360, where loading methods, mesh sensitivity, material selection and spoke geometry were investigated to understand stress distribution and improve the design. The second used SolidWorks Simulation to analyse a 5 m thin-walled steel cantilever tube as a shell structure, comparing FEA results against analytical beam theory before investigating yielding, eigenvalue buckling and nonlinear ovalisation. Together, the studies developed my understanding of model setup, boundary conditions, remote loading, shell behaviour, mesh convergence and the need to validate simulation results before using them for engineering decisions.",

      sections: [
        {
          heading: "Wheel Rim : CAD, Loading & Design Optimisation",
          paragraphs: [
            "The wheel-rim study began with a fully dimensioned 3D model produced in Fusion 360. The initial wheel used Aluminium 2014, with a steel axle and fixture added so that realistic cornering-style loading could be represented in the structural model.",
            "A 5,000 N load acting 500 mm from the wheel hub was analysed using two loading approaches. The first applied the load through the modelled armature, while the second used a remote force directly on the hub. The armature absorbed part of the applied load, so the remote-load approach was selected for subsequent studies because it transferred the intended load more directly into the wheel.",
            "Using the remote-load setup, the initial design produced a maximum von Mises stress of approximately 34.3 MPa and a minimum safety factor of 8.46. The stress distribution showed that the spokes aligned most closely with the applied load carried the highest structural demand.",
            "The design was then modified rather than simply accepting the original high safety factor. Spoke count, spoke width, rim profile and material were varied to investigate how efficiently material was being used. Increasing the number of thinner spokes reduced the safety factor substantially, while changing from Aluminium 2014 to Magnesium AZ91E T6 provided another means of changing structural performance. A combined 10-spoke magnesium configuration achieved a safety factor of approximately 2.02, with fillets added at spoke transitions to reduce stress concentration."
          ],
          bullets: [
            "Created the wheel and loading fixture in Fusion 360.",
            "Compared direct armature loading with remote-load application.",
            "Used von Mises stress and minimum safety factor as principal design metrics.",
            "Investigated 6-, 8- and 10-spoke configurations.",
            "Compared Aluminium 2014 with Magnesium AZ91E T6.",
            "Adjusted spoke width, wheel lip geometry and spoke-root fillets.",
            "Reduced the initial high safety factor toward a target value of approximately 2.",

          ]
        },
        {
          heading: "Thin-Walled Tube : Validation & Failure Modes",
          paragraphs: [
            "The second study investigated a 5 m long, 500 mm diameter steel tube with an 8 mm wall thickness. The structure was modelled using shell elements, fixed at one end and loaded 4.5 m from the support.",
            "Before investigating failure, the simulation was checked against Euler–Bernoulli beam theory. At 50 kN, analytical bending stress was calculated as approximately 150.3 MPa compared with 151.3 MPa from FEA, giving a difference of only 0.66%. Predicted displacement was approximately 20.29 mm compared with 19.82 mm from the simulation, a difference of 2.37%. This gave confidence that the boundary conditions, stiffness and loading representation were behaving sensibly.",
            "Buckling analysis showed that the lowest positive eigenvalue occurred at a load factor of approximately 64.12, corresponding to a critical load on the order of 3 MN. This was far above the load required to initiate yielding, meaning ideal elastic buckling was not the governing failure mechanism for the model.",
            "A nonlinear static analysis was also used to investigate cross-sectional ovalisation. Although some distortion of the circular section was visible, material yielding and local bending near the loading region developed before significant quantitative Brazier ovalisation could be established. Yield initiation was therefore identified as the most credible governing failure mode."
          ],
          bullets: [
            "Shell-element model of a thin-walled steel tube.",
            "Linear static, eigenvalue buckling and nonlinear static studies.",
            "Validated simulation against analytical beam theory.",
            "Predicted yield initiation at approximately 78.2 kN.",
            "Buckling critical load substantially higher than yield load.",
            "Investigated Brazier ovalisation and nonlinear deformation.",
            "Identified yield initiation as the governing failure mode.",

          ]
        },
        {
          heading: "Mesh, Boundary Conditions & Modelling Decisions",
          paragraphs: [
            "Both studies demonstrated that the way a structural model is loaded and meshed can significantly influence the result. In the pipe study, a concentrated load applied through a very small region initially generated an unrealistic local stress concentration. The loading method was therefore revised to use a distributed remote connection, producing results that aligned much more closely with analytical expectations.",
            "A mesh study was also performed on the pipe using global element sizes of 80, 60 and 40 mm, with additional local refinement of approximately 5–10 mm around the loading region. Displacement changed from 34.09 mm to 36.01 mm and then 36.12 mm, showing that the global displacement response was close to convergence by the 60–40 mm range. Peak von Mises stress remained more sensitive to local refinement, illustrating why local stress values must be interpreted carefully.",
            "The wheel-rim study produced a similar result. Progressive mesh refinement caused the reported peak stress and minimum safety factor to change substantially rather than cleanly converge. Instead of treating the finest result automatically as the correct answer, the behaviour was identified as a limitation of the model and a reason to interpret local stress concentrations cautiously.",
          ],
          
        },
        {
          heading: "Engineering Learning",
          paragraphs: [
            "The main lesson from these studies was that FEA is most useful when it is treated as an engineering model rather than simply a contour-generation tool. Results depended on assumptions about loading, constraints, element formulation, material behaviour and mesh density, and each of these needed to be checked before drawing conclusions.",
            "The wheel-rim project showed how simulation can be used iteratively to guide design changes, while the pipe project demonstrated the importance of validating a numerical model against known analytical behaviour before extending it to more complex failure mechanisms.",
            "Together, the projects improved my ability to distinguish between physically meaningful structural behaviour and numerical artefacts such as singular stresses, unconverged local peaks or idealised eigenvalue buckling loads.",
          ],
          bullets: [
            "Linear and nonlinear structural FEA.",
            "Shell modelling of thin-walled structures.",
            "Remote loads and distributed coupling.",
            "Mesh-convergence assessment.",
            "Analytical verification of simulation results.",
            "Yield, buckling and ovalisation behaviour.",
            "Identified yield initiation as the governing failure mode.",

          ]
        },

      ],

      links: [

        { label: "View Report 1", url: "assets/Pipe_FEA.pdf" },
        { label: "View Report 2", url: "assets/Wheelrim_FEA.pdf" }
      ]
    },


    {
      title: "Personal Engineering & Prototyping",
      type: "Personal Projects · Manufacturing · Prototyping",

      cardSummary:
        "A selection of smaller engineering projects, practical manufacturing work and ongoing personal development across mechanical design, electronics and experimental systems.",

      images: [
        "assets/Cover poke.webp",
        "assets/Poke solo.webp",
        "assets/Poke cad.webp",
        "assets/Certif 1.webp",
        "assets/Certif 2.webp",
        "assets/Certif 3.webp",
        "assets/Certif 4.webp",
        "assets/Certif 5.webp"
      ],

      tags: [
        "ESP32",
        "Arduino",
        "3D Printing",
        "Electronics",
        "WITNESS",
        "Machining",
        "Laser Cutting"
      ],

      metrics: [],

      intro:
        "Alongside my larger engineering projects, I regularly develop smaller mechanical and electronic systems to explore manufacturing methods, embedded hardware and practical design problems. This section includes completed manufacturing work, current personal projects and selected technical certificates.",

      sections: [
        {
          heading: "Manual Fan : Design & Manufacture",
          paragraphs: [
            "Designed and manufactured a compact hand-powered fan using Fusion 360, 3D printing and laser cutting. The project focused on translating a mechanical concept into a functioning physical product while accounting for gear design, manufacturing tolerances, assembly, friction and usability.",
            "The design evolved through several iterations. An early four-gear compound arrangement produced excessive friction and was sensitive to alignment, so the powertrain was simplified to a three-gear system. The base and housing were also combined into a single printed structure, improving shaft alignment and reducing assembly variation.",
            "The final design used a manual crank, printed gears and blades, an ergonomic grip and slide-in laser-cut covers. Push-fit construction allowed components to be assembled, inspected and replaced without adhesives.",
          ],
          bullets: [
            "Designed all primary components in Fusion 360.",
            "Developed and tested multiple gear-train configurations.",
            "Simplified a four-gear system into a lower-friction three-gear arrangement.",
            "Used motion links to check gear interaction before manufacturing.",
            "Designed fan blades using lofted and embossed geometry.",
            "Used FDM 3D printing for gears, housing, blades and mechanical components.",
            "Used laser cutting for flat enclosure panels.",
            "Designed around DFMA principles with replaceable push-fit components."
          ]
        },
        {
          heading: "Current Projects",
          paragraphs: [
            "I also continue to develop personal engineering projects outside formal coursework. These projects are currently in development and are used to explore sensor integration, airflow visualisation, embedded electronics, data logging and practical prototyping.",
          ],
          bullets: [
            "Desktop smoke visualiser : development of a compact airflow-visualisation system intended to make otherwise invisible flow behaviour observable using a controlled smoke source and airflow path.",
            "Portable particulate-matter sensing and travel-logging system : an ongoing embedded sensing project intended to record environmental particulate measurements alongside travel data for later analysis.",

          ]
        },
        {
          heading: "Certificates & Continued Development",
          paragraphs: [
            "Selected certificates and technical development activities are included here alongside the project work. I use these to continue developing practical knowledge in areas relevant to mechanical design, simulation, manufacturing and engineering software.",
          ]
          
        }
      ],

      links: []
    }

  ]
};
