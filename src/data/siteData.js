export const siteData = {
  kicker: "Personal profile",
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
  primaryLink: {
    label: "See latest project",
    href: "#project",
  },
  secondaryLink: {
    label: "Browse papers",
    href: "#papers",
  },
  projects: [
    {
      title: "Exploring Social Robot Navigation Across Two Real-World Contexts",
      status: "Published",
      year: "2024",
      summary:
        "This project studies what makes a navigating service robot feel acceptable in real social spaces, using qualitative case studies in Ecuador and the UK with two different robots.",
      impact:
        "The findings highlight how speed, appearance, emotional responses, and spatial constraints shape people’s comfort and acceptance of social robot navigation in indoor environments.",
      tags: ["Social Robot Navigation", "HRI", "Qualitative Study", "OzCHI 2024"],
      linkLabel: "Read paper",
      href: "https://dl.acm.org/doi/10.1145/3726986.3727028",
      videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dFreXVsIJmc",
      videoTitle: "Video demonstration of the social robot navigation project",
    },
    {
      title: "Online Social Robot Navigation in Large Indoor Crowds",
      status: "Completed",
      year: "2023",
      summary:
        "This project focused on enabling robots to navigate online through large and crowded indoor environments while remaining socially aware around people.",
      impact:
        "It brought together real-time navigation, crowd interaction, and social acceptability to study how robots can move safely and naturally in busy public spaces.",
      tags: ["Social Robot Navigation", "ICRA 2023", "Crowded Environments"],
      links: [
        {
          label: "Watch video",
          href: "https://www.youtube.com/watch?v=Gq149wFVj7A",
        },
        {
          label: "GitHub repository",
          href: "https://github.com/CardiffUniversityComputationalRobotics/social-multi-fed-nav-stack",
        },
      ],
    },
    {
      title: "Design and implementation of an autonomous mobile disinfection robot for social navigation in closed and dynamic environments",
      status: "Completed",
      year: "2021",
      summary:
        "Designed and assembled a Covid disinfecting robot that moves autonomously while detecting people and avoiding collisions. The robot would move around while disinfecting spaces by the use of UV lights which would turn off in the presence of humans.",
      impact:
        "Showed the advantages of using UV lights for indoor spaces disinfection and how a robot can be built with commercial hardware and programmed with the use of Python, C++ and ROS1.",
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
