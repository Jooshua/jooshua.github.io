// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A Collection of What I&#39;ve Built and Imagined",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-academics",
          title: "academics",
          description: "Exploring, Sharing, and Growing Along the Way",
          section: "Navigation",
          handler: () => {
            window.location.href = "/academics/";
          },
        },{id: "nav-career",
          title: "career",
          description: "Shaping My Path, One Step at a Time",
          section: "Navigation",
          handler: () => {
            window.location.href = "/career/";
          },
        },{id: "nav-legal",
          title: "legal",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/legal/";
          },
        },{id: "nav-privacy",
          title: "privacy",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/privacy/";
          },
        },{id: "projects-3d-printing",
          title: '3d printing',
          description: "mainly DnD minis",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_3d_printing/";
            },},{id: "projects-this-website",
          title: 'This website',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_website/";
            },},{id: "projects-journey-log",
          title: 'Journey log',
          description: "Places I have visited so far.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_travel/";
            },},{id: "projects-aircraft-noise-data-handling-and-visualization",
          title: 'Aircraft noise data handling and visualization',
          description: "practical terms of my dual bachelor studies",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_bachelor_dlr/";
            },},{id: "projects-bachelor-student-projects",
          title: 'Bachelor student projects',
          description: "university terms of my dual bachelor studies",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_bachelor_dhbw/";
            },},{id: "projects-virtualsatellite",
          title: 'VirtualSatellite',
          description: "part time work during my master studies",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_master_dlr/";
            },},{id: "projects-master-student-projects",
          title: 'Master student projects',
          description: "university terms of my master studies",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_master_tubs/";
            },},{id: "projects-qubra",
          title: 'QuBRA',
          description: "Quantum Methods and Benchmarks for Resource Allocation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_qubra_kit/";
            },},{id: "projects-current-research",
          title: 'Current research',
          description: "View- and model-based quantum software",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_moqel_kit/";
            },},{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/350/5147.html", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%6F%73%68%75%61@%6A%61%6D%6D%65%72%6D%61%6E%6E.%65%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/joshua-ammermann-7a0421188", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-5533-7274", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=kYbtqncAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
