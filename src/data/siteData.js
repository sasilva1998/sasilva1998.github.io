export const siteData = {
  // kicker: "Personal profile",
  name: "Steven Silva",
  role: "Robotics teacher and PhD student at Cardiff University",
  intro:
    "On the path to become an expert on robot navigation and leaving a footprint in the world.",
  photoCaption:
    "Bonding with Reachy robot 🤖",
  quickFacts: [
    "from Ecuador 🇪🇨",
    "at Cardiff University",
    "Becoming robot navigation expert",
    "Collaborating with ESPOL and Rice University",
  ],
  skillSummary:
    "Mechatronics engineer with a broad robotics profile: research, robot software, embedded systems, hardware integration, and design for real-world systems.",
  skillHighlights: [
    "Computational robotics",
    "Social robot navigation",
    "ROS1/ROS2 systems",
    "Embedded and IoT robotics",
  ],
  skillGroups: [
    {
      title: "Robotics and Autonomy",
      skills: [
        "Social robot navigation",
        "Path and motion planning",
        "Sampling-based planning",
        "Grid-based planning",
        "Kinodynamic constraints",
        "SLAM, mapping, and localization",
        "ROS1/ROS2 navigation",
        "Robot manipulation",
        "Social agents simulation",
        "Human trajectory prediction",
      ],
    },
    {
      title: "Software and Machine Learning",
      skills: [
        "Python",
        "C++",
        "C",
        "Java",
        "MATLAB",
        "LabVIEW",
        "MicroPython",
        "VHDL",
        "PyTorch pipelines",
        "Linux",
        "Git",
      ],
    },
    {
      title: "Embedded Systems and IoT",
      skills: [
        "Microcontrollers",
        "ESP32",
        "Raspberry Pi",
        "ROS-embedded bridges",
        "Smart servo control",
        "MQTT networks",
        "AWS IoT Core",
        "Ubidots",
        "Pozyx/UWB positioning",
        "Cloud-connected sensors",
      ],
    },
    {
      title: "Mechatronics and Design",
      skills: [
        "Mechanical design",
        "3D design",
        "Autodesk Inventor",
        "Fusion 360",
        "Onshape",
        "EasyEDA",
        "CAD/CAM workflows",
        "CNC",
        "3D printing",
        "Additive manufacturing",
        "HMI systems",
        "Articulated industrial robots",
      ],
    },
  ],
  researchStrengths: [
    "Human-robot interaction studies",
    "Qualitative research and case studies",
    "Social acceptability of robots",
    "Crowded indoor navigation",
    "Learning-informed motion planning",
    "Technical writing and peer-reviewed publication",
  ],
  primaryLink: {
    label: "See latest project",
    href: "#project",
  },
  secondaryLink: {
    label: "Browse papers",
    href: "#papers",
  },
  featuredProject: {
    title: "PhD Project: Social Robot Navigation in Real-World Indoor Environments",
    status: "PhD project",
    year: "2023-2026",
    summary:
      "My PhD project studies how mobile service robots can navigate indoor public spaces while remaining socially acceptable around people, combining real-world user studies with online navigation in large crowds.",
    impact:
      "This work connects the technical side of crowd-aware navigation with people's perceptions of comfort, safety, speed, appearance, and spatial behavior across Ecuador and the UK.",
    tags: [
      "Social Robot Navigation",
      "HRI",
      "Crowded Environments",
      "OzCHI 2024",
      "ICRA 2023",
    ],
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dFreXVsIJmc",
    videoTitle: "Video demonstration of the social robot navigation project",
    lastCommit: "Last commit: Apr 29, 2026",
    lastCommitDate: "2026-04-29",
    links: [
      {
        label: "Read OzCHI paper",
        href: "https://dl.acm.org/doi/10.1145/3726986.3727028",
      },
      {
        label: "Read ICRA paper",
        href: "https://ieeexplore.ieee.org/document/10160603",
      },
      {
        label: "Watch ICRA video",
        href: "https://www.youtube.com/watch?v=Gq149wFVj7A",
      },
      {
        label: "GitHub repository",
        href: "https://github.com/CardiffUniversityComputationalRobotics/social-multi-fed-nav-stack",
      },
    ],
  },
  projects: [
    {
      title: "OMPL motion planning tutorials",
      status: "Tutorial",
      year: "Past project",
      lastCommit: "Last commit: Nov 5, 2022",
      lastCommitDate: "2022-11-05",
      summary:
        "Created tutorial material for learning the Open Motion Planning Library in a ROS workspace, based on a core planning tutorial and adapted as a practical package.",
      impact:
        "The project includes launchable planning examples that show how to run OMPL with SimpleSetup as well as a lower-level Planner and ProblemDefinition flow, helping robotics learners inspect and understand the C++ planning code.",
      tags: ["OMPL", "ROS", "Motion Planning", "C++", "Tutorial"],
      links: [
        {
          label: "OMPL tutorials repository",
          href: "https://github.com/sasilva1998/ompl_tutorials",
        },
      ],
    },
    {
      title: "Design and implementation of an autonomous mobile disinfection robot for social navigation in closed and dynamic environments",
      status: "Completed",
      year: "2021",
      lastCommit: "Last commit: Sep 26, 2022",
      lastCommitDate: "2022-09-26",
      summary:
        "Designed and assembled a Covid disinfecting robot that moves autonomously while detecting people and avoiding collisions. The robot would move around while disinfecting spaces by the use of UV lights which would turn off in the presence of humans.",
      impact:
        "Showed the advantages of using UV lights for indoor spaces disinfection and how a robot can be built with commercial hardware and programmed with the use of Python, C++ and ROS1.",
      image: "/covibot.png",
      imageAlt: "Covibot autonomous mobile disinfection robot",
      tags: ["Social Robot Navigation", "Graduation Project", "Crowded Environments"],
      links: [
        {
          label: "Thesis paper",
          href: "https://www.dspace.espol.edu.ec/handle/123456789/52776",
        },
        {
          label: "Gitlab Repository",
          href: "https://gitlab.com/dpailla/amr",
        },
      ],
    },
    {
      title: "Pozyx bridge for ROS",
      status: "Open source",
      year: "2022",
      lastCommit: "Last commit: May 4, 2022",
      lastCommitDate: "2022-05-04",
      summary:
        "Supported a ROS bridge for Pozyx positioning hardware, connecting a Pozyx gateway with ROS so tag information can be consumed in robotics systems.",
      impact:
        "The package is split into ROS messages for publishing Pozyx tag data and bridge code that retrieves gateway information through MQTT, making indoor positioning data available through ROS topics.",
      tags: ["Pozyx", "ROS", "MQTT", "Indoor Positioning", "UWB"],
      links: [
        {
          label: "Pozyx bridge repository",
          href: "https://github.com/CardiffUniversityComputationalRobotics/pozyx_bridge",
        },
      ],
    },
    {
      title: "MicroPython rosserial support for ROS 1",
      status: "Open source",
      year: "2020-2021",
      lastCommit: "Latest repo commit: Oct 7, 2021",
      lastCommitDate: "2021-10-07",
      summary:
        "Created a small set of MicroPython libraries to support rosserial communication between ROS 1 and microcontrollers such as the ESP32.",
      impact:
        "The toolkit includes a rosserial implementation for MicroPython with topic advertising, publishing, and subscribing; a message generator for creating uPy classes from ROS .msg files; and the rosserial_msgs TopicInfo support needed for topic negotiation.",
      image: "/urosserial.jpeg",
      imageAlt: "Example of use of rosserial for micropython.",
      tags: ["MicroPython", "ROS 1", "rosserial", "ESP32", "Open Source"],
      links: [
        {
          label: "uPy-rosserial",
          href: "https://github.com/FunPythonEC/uPy-rosserial",
        },
        {
          label: "uPy-genpy",
          href: "https://github.com/FunPythonEC/uPy-genpy",
        },
        {
          label: "uPy-rosserial_msgs",
          href: "https://github.com/FunPythonEC/uPy-rosserial_msgs",
        },
      ],
    },
    {
      title: "MicroPython support for Dynamixel and Lewansoul servo motors",
      status: "Open source",
      year: "Past project",
      lastCommit: "Latest repo commit: Oct 21, 2020",
      lastCommitDate: "2020-10-21",
      summary:
        "Built MicroPython libraries to control several smart servo motor families from ESP boards, including Dynamixel XL-320, Dynamixel AX-12, and Lewansoul LX-16 servos.",
      impact:
        "These libraries wrap UART-based servo communication and expose practical methods for packet creation, ID and baudrate setup, angle and speed commands, torque control, and reading servo state, making it easier to prototype robotics projects with MicroPython.",
      tags: ["MicroPython", "Servo Motors", "Dynamixel", "Lewansoul", "ESP32"],
      links: [
        {
          label: "XL-320 MicroPython",
          href: "https://github.com/FunPythonEC/xl320_upy",
        },
        {
          label: "AX-12 MicroPython",
          href: "https://github.com/FunPythonEC/AX12_uPy",
        },
        {
          label: "Lewansoul LX-16 MicroPython",
          href: "https://github.com/FunPythonEC/uPy_Lewansoul_LX-16",
        },
      ],
    },
    {
      title: "Human trajectory predictor for ROS 2",
      status: "ROS 2 package",
      year: "2025-2026",
      lastCommit: "Last commit: Apr 14, 2026",
      lastCommitDate: "2026-04-14",
      summary:
        "Supported an ament_python ROS 2 package that predicts future human trajectories from pedsim agent states and robot odometry.",
      impact:
        "The node keeps recent motion histories, runs a trained collision-grid/LSTM predictor, and publishes predicted agent trajectories plus RViz markers so downstream navigation components can reason about likely human motion.",
      tags: ["ROS 2", "Human Trajectory Prediction", "pedsim", "LSTM", "Social Navigation"],
      links: [
        {
          label: "Human trajectory predictor repository",
          href: "https://github.com/CardiffUniversityComputationalRobotics/human_traj_predictor",
        },
      ],
    },
  ],
  papers: [
    // {
    //   title:
    //     "Social Robot Navigation in Public Indoor Crowded Spaces via Hybrid Informed Sampling under Kinodynamic Constraints",
    //   venue: "IEEE Robotics and Automation Letters (RA-L)",
    //   year: "2025",
    //   description:
    //     "With V. Romero-Cano, N. Verdezoto, and J. D. Hernandez. Decision pending.",
    // },
    {
      title:
        "Social Robot Navigation Under Kinodynamic Constraints Using Learning-Informed Sampling for Indoor Environments",
      venue: "IEEE RA-L 2026",
      year: "2026",
      firstAuthor: true,
      // href: "https://dl.acm.org/doi/10.1145/3726986.3727028",
      description:
        "With V. Romero-Cano and J. D. Hernandez. To be published at IEEE Robotics and Automation Letters",
    },
    {
      title:
        "Exploring the Perceptions and Challenges of Social Robot Navigation: Two Case Studies in Different Socio-Technical Contexts",
      venue: "ACM OzCHI 2024",
      year: "2024",
      firstAuthor: true,
      href: "https://dl.acm.org/doi/10.1145/3726986.3727028",
      description:
        "With P. Oliinyk, J. Patino, D. Paillacho, J. D. Hernandez, and N. Verdezoto. Presented at the Australian Conference on Human-Computer Interaction in Brisbane, Australia.",
    },
    {
      title:
        "Online Social Robot Navigation in Indoor, Large and Crowded Environments",
      venue: "IEEE ICRA 2023",
      year: "2023",
      firstAuthor: true,
      href: "https://ieeexplore.ieee.org/document/10160603",
      description:
        "With N. Verdezoto, D. Paillacho, S. Millan-Norman, and J. D. Hernandez. IEEE International Conference on Robotics and Automation, London, United Kingdom.",
    },
    {
      title: "Towards Online Socially Acceptable Robot Navigation",
      venue: "IEEE CASE 2022",
      year: "2022",
      firstAuthor: true,
      href: "https://ieeexplore.ieee.org/document/9926686",
      description:
        "With D. Paillacho, N. Verdezoto, and J. D. Hernandez. IEEE International Conference on Automation Science and Engineering, Mexico City, Mexico.",
    },
    {
      title:
        "Implementation of an UVC Lights Desinfection System for a Differential Robot Applying Security Methods in Indoor",
      venue: "ICAT 2021 Proceedings",
      year: "2022",
      firstAuthor: false,
      href: "https://link.springer.com/book/10.1007/978-3-031-03884-6?page=2",
      description:
        "With R. Velez Burgos, A. P. Ruiz, D. Paillacho Chiluiza, and J. Paillacho Corredores. Published in Applied Technologies: Third International Conference proceedings by Springer Nature.",
    },
    {
      title:
        "Autonomous Intelligent Navigation For Mobile Robots In Closed Environments",
      venue: "ICAT 2020 Proceedings",
      year: "2021",
      firstAuthor: true,
      href: "https://link.springer.com/chapter/10.1007/978-3-030-71503-8_30",
      description:
        "With D. P. Chiluiza, D. S. Leon, M. G. Pintado, and J. P. Corredores. Published in Applied Technologies: Second International Conference proceedings by Springer Nature.",
    },
  ],
  passions: [
    {
      title: "Vivid Crossfiter 🏋️",
      description:
        "Been doing crossfit for about 10 years (no serious injuries) and haven't been able to do it constantly everyday. I like running and anything related to doing sports.",
      // image: "/running.jpg",
    },
    {
      title: "Playing videogames 🎮",
      description:
        "Play videogames as a hobby, currently loving street fighter 6 and doing my best to finish the latest resident evil game while coping with my research.",
    },
    {
      title: "Teaching, learning, and sharing 🤖",
      description:
        "As part of the FunPython community from Ecuador, I love to share my experiences and mentor younger enthusiast in robotics. Enjoy teaching what I know about robotics and encouraging others to try new things and collaborate.",
    },
  ],
  profileImage: "/profilePic.jpg",
  profileImageAlt: "Placeholder profile illustration",
};
