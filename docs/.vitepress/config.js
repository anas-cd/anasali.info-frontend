import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/frontend/",
  title: "portfolio documentation",
  description: "documentation you can rely on for your projects",

  head: [["link", { rel: "icon", href: "./assets/brand/favicon.ico" }]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "", // for logo only
    logo: "/assets/brand/header-logo.png",

    outline: "deep",

    nav: [
      // { text: "Home", link: "/" }, // relying on header logo instead
      // { text: "Guid", link: "/guid/getting-started" }, // relying on main CTA button
    ],

    search: {
      provider: "local",
    },

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Getting Started", link: "/guide/getting-started" },
          { text: "Legend", link: "/guide/legend" },
        ],
      },
      {
        text: "Project Structure",
        items: [{ text: "Directories", link: "/structure/directories.md" }],
      },
      {
        text: "Components",
        items: [
          { text: "Structure", link: "/components/structure.md" },
          {
            text: "CVPage/",
            link: "/components/CVPage/index.md",
            items: [
              {
                text: "ContactCard.vue",
                link: "/components/CVPage/ContactCard.md",
              },
              {
                text: "CoursesCard.vue",
                link: "/components/CVPage/CoursesCard.md",
              },
              {
                text: "EducationCard.vue",
                link: "/components/CVPage/EducationCard.md",
              },
              {
                text: "ExperienceCard.vue",
                link: "/components/CVPage/ExperienceCard.md",
              },
              {
                text: "HobbiesCard.vue",
                link: "/components/CVPage/HobbiesCard.md",
              },
              {
                text: "InterestsCard.vue",
                link: "/components/CVPage/InterestsCard.md",
              },
              {
                text: "LanguagesCard.vue",
                link: "/components/CVPage/LanguagesCard.md",
              },
              {
                text: "ProfileCard.vue",
                link: "/components/CVPage/ProfileCard.md",
              },
              {
                text: "ProjectsCard.vue",
                link: "/components/CVPage/ProjectsCard.md",
              },
              {
                text: "SkillsCard.vue",
                link: "/components/CVPage/SkillsCard.md",
              },
              {
                text: "TechAndToolsCard.vue",
                link: "/components/CVPage/TechAndToolsCard.md",
              },
            ],
          },
          {
            text: "macros",
            items: [
              {
                text: "CourseCard.vue",
                link: "/components/macro/CourseCard.md",
              },
              {
                text: "InterestCard.vue",
                link: "/components/macro/InterestCard.md",
              },
              {
                text: "ProjectCard.vue",
                link: "/components/macro/ProjectCard.md",
              },
            ],
          },
        ],
      },
      {
        text: "styling",
        items: [
          {
            text: "SFC styling",
            link: "/styling/SFC-styling.md",
          },
          {
            text: "global variables",
            link: "/styling/global-variables.md",
          },
          {
            text: "global classes",
            link: "/styling/global-classes.md",
          },
        ],
      },
      {
        text: "Layouts",
        items: [
          {
            text: "Layout switching",
            link: "/layouts/layout-switching.md",
          },
        ],
      },
      {
        text: "State Management",
        items: [
          {
            text: "Pinia Stores",
            link: "/state-management/Pinia-stores.md",
            items: [
              {
                text: "Portfolio Store",
                link: "/state-management/stores/portfolio-store.md",
              },
            ],
          },
        ],
      },
      {
        text: "plugins",
        items: [
          {
            text: "Adding Global Plugins",
            link: "/plugins/adding-global-plugins.md",
          },
        ],
      },
      {
        text: "Utilities",
        items: [
          {
            text: "devAPI",
            link: "/utilities/devAPI.md",
          },
          {
            text: "handleError",
            link: "/utilities/handleError.md",
          },
          {
            text: "localBrowser",
            link: "/utilities/localBrowser.md",
          },
          {
            text: "scrollToElement",
            link: "/utilities/scrollToElement.md",
          },
          {
            text: "Root Utilities",
            link: "/utilities/root-utilities/index.md",
          },
        ],
      },
      {
        text: "Service Handlers",
        items: [
          {
            text: "Data Fetching",
            link: "/services/data-fetching.md",
          },
          {
            text: "API Handlers",
            link: "/services/API-services/index.md",
            items: [
              {
                text: "coursesAPI",
                link: "/services/API-services/coursesAPI.md",
              },
              {
                text: "educationAPI",
                link: "/services/API-services/educationAPI.md",
              },
              {
                text: "experienceAPI",
                link: "/services/API-services/experienceAPI.md",
              },
              {
                text: "hobbiesAPI",
                link: "/services/API-services/hobbiesAPI.md",
              },
              {
                text: "interestsAPI",
                link: "/services/API-services/interestsAPI.md",
              },
              {
                text: "languagesAPI",
                link: "/services/API-services/languagesAPI.md",
              },
              {
                text: "profileAPI",
                link: "/services/API-services/profileAPI.md",
              },
              {
                text: "projectsAPI",
                link: "/services/API-services/projectsAPI.md",
              },
              {
                text: "skillsAPI",
                link: "/services/API-services/skillsAPI.md",
              },
              {
                text: "techStackAPI",
                link: "/services/API-services/techStackAPI.md",
              },
              {
                text: "mailsAPI",
                link: "/services/API-services/mailsAPI.md",
              },
            ],
          },
        ],
      },
      {
        text: "Docs",
        items: [
          {
            text: "Documentation",
            link: "/docs/documentation.md",
          },
        ],
      },
    ],

    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/anas-cd/anasali.info-frontend",
      },
    ],
  },
});
