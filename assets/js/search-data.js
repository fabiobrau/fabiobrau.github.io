// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about-me",
    title: "About Me",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Selected scientific publications",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Last Update, November 2025",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-seminars",
          title: "Seminars",
          description: "Slides and materials from tutorials and talks.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/seminars/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Materials for courses you taught. Replace this text with your description.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-theses",
          title: "Theses",
          description: "Thesis proposals for Master and Ph.D. students. Click a card to read the full proposal. If you are interested, feel free to drop me an email.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/theses/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "dropdown-repositories",
              title: "repositories",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/repositories/";
              },
            },{id: "post-the-tick-that-poisoned-your-training-set",
        
          title: "The Tick That Poisoned Your Training Set",
        
        description: "Alpha-gal syndrome is a textbook backdoor attack. The classifier is your immune system, the trigger is a sugar, and the payload fires three hours after dinner.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/the-tick-that-poisoned-your-training-set/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-my-web-page-is-online-it-s-still-messy-will-be-ready-soon-smile",
          title: 'My web page is online! It’s still messy, will be ready soon :smile:...',
          description: "",
          section: "News",},{id: "news-star-the-paper-som-directions-are-better-than-one-has-been-accepted-to-aaai-26-star-congrats-to-giorgio-piras-and-raffaele-mura",
          title: ':star: The paper SOM Directions are better than one has been accepted to...',
          description: "",
          section: "News",},{id: "news-loudspeaker-the-slides-of-the-tutorial-on-from-evasion-to-jailbreak-adversarial-machine-learning-in-the-age-of-llms-held-with-raffaele-mura-at-taic-are-now-available-on-the-seminars-page",
          title: ':loudspeaker: The slides of the Tutorial on “From Evasion to Jailbreak: Adversarial Machine...',
          description: "",
          section: "News",},{id: "news-microphone-honored-to-have-delivered-the-keynote-refusal-suppression-at-the-workshop-on-management-of-complex-threats-mct-at-ieee-noms-2026-in-rome-warm-thanks-to-prof-pierre-parrend-for-the-kind-invitation-slides-on-the-seminars-page",
          title: ':microphone: Honored to have delivered the keynote Refusal Suppression at the Workshop on...',
          description: "",
          section: "News",},{id: "news-books-a-new-theses-page-is-online-first-proposal-equivariant-image-representation-via-gaussian-splats-open-to-bachelor-s-master-s-and-phd-students",
          title: ':books: A new Theses page is online! First proposal: Equivariant Image Representation via...',
          description: "",
          section: "News",},{id: "news-pencil-new-blog-post-the-tick-that-poisoned-your-training-set-alpha-gal-syndrome-read-as-a-textbook-data-poisoning-backdoor-attack-on-the-immune-system",
          title: ':pencil: New blog post: The Tick That Poisoned Your Training Set — alpha-gal...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-coevolution",
          title: 'CoEvolution',
          description: "A COMPREHENSIVE TRUSTWORTHY FRAMEWORK FOR CONNECTED MACHINE LEARNING AND SECURE INTERCONNECTED AI SOLUTIONS",
          section: "Projects",handler: () => {
              window.location.href = "/projects/coevolution/";
            },},{id: "projects-sec4ai4sec",
          title: 'Sec4AI4Sec',
          description: "Cybersecurity for AI-augmented systems",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sec4ai4sec/";
            },},{id: "theses-equivariant-image-representation-via-gaussian-splats",
          title: 'Equivariant Image Representation via Gaussian Splats',
          description: "Exploration of Gaussian Splatting as an alternative to pixel-wise image representation.",
          section: "Theses",handler: () => {
              window.location.href = "/theses/1_gaussian_splatting/";
            },},{id: "theses-robustness-against-adversarial-kernel-perturbations",
          title: 'Robustness against Adversarial Kernel Perturbations',
          description: "A structured family of convolutional adversarial perturbations, their certifiable robustness, and mitigation strategies.",
          section: "Theses",handler: () => {
              window.location.href = "/theses/2_adversarial_kernel_perturbations/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%61%62%69%6F.%62%72%61%75@%75%6E%69%63%61.%69%74", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/fabiobrau", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/fabio-brau", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=p9Laky4AAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.saiferlab.ai/people/fabiobrau", "_blank");
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
