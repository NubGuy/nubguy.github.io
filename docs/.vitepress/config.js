import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid(
  defineConfig({
    title: "Competitive Exam Notes",
    base: "/",
    description: "Notes For my Study",
    themeConfig: {
      nav: navBar(),
      socialLinks: [{ icon: "github", link: "https://github.com/yougraj" }],
      search: {
        provider: "local",
      },
      sidebar: sideBar(),
      footer: {
        copyright: "Copyright © 🙃",
      },
    },
  }),
);

function navBar() {
  return [
    { text: "Home", link: "/" },
    { text: "About", link: "/about/about" },
    { text: "Discus", link: "/discus/index" },
  ];
}

function sideBar() {
  return [
    {
      text: "Assam History",
      items: [
        {
          text: "",
          items: [
            {
              text: "Forth to Twelfth Centuries Assamese",
              link: "/history/Forth-to-Twelfth-Centuries.md",
            },
            { text: "Assamese Language", link: "/history/assameselang" },
            { text: "Sports News", link: "/history/sportnews" },
          ],
        },
        {
          text: "Geographical Aspects",
          collapsed: true,
          items: [
            {
              text: "",
              items: [
                { text: "Geography", link: "/geographical-aspects/index" },
              ],
            },
          ],
        },
        {
          text: "Climate",
          collapsed: true,
          items: [
            {
              text: "",
              items: [
                {
                  text: "Drought and Pollutions",
                  link: "/climate/drought-and-pollution",
                },
                { text: "Ramsar Site", link: "/climate/ramsarSite" },
              ],
            },
          ],
        },
        {
          text: "Barak",
          collapsed: true,
          items: [
            {
              text: "",
              items: [{ text: "Barak", link: "/barak/index" }],
            },
          ],
        },
        {
          text: "Brahmaputra",
          collapsed: true,
          items: [
            {
              text: "",
              items: [{ text: "Brahmaputra", link: "/brahmaputra/index" }],
            },
          ],
        },
        {
          text: "National Park and Sanctuaries",
          link: "/nationalParksAndSanctuaries/index.md",
        },
      ],
    },

    {
      text: "Mind Map",
      items: [
        {
          text: "Political History of Assam",
          link: "/mindmap/assam-political-history.md",
        },
        {
          text: "Pre-Historic and Traditional Rulers",
          link: "../mindmap/pre-historic-and-traditional-rule.md",
        },
        {
          text: "The Period from Fourth to Twelfth Centuries CE",
          link: "/mindmap/twelfth-centuries.md",
        },
        {
          text: "Thirteenth to Fifteenth Centuries Major Events",
          link: "/mindmap/thirteenth-to-fifteenth-centuries-major-events.md",
        },
        { text: "Major Dynasties", link: "/mindmap/major-dynasties.md" },
        { text: "Ahom Rule", link: "/mindmap/ahome-rule.md" },
        {
          text: "British Rule and its Consolidation",
          link: "/mindmap/british-rule.md",
        },
      ],
    },
  ];
}
