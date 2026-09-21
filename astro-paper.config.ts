import { defineAstroPaperConfig } from "./src/types/config";
export default defineAstroPaperConfig({
  site: {
    url: "https://rileyluolan.github.io/",
    title: "Lan Luo",
    description: "Undergraduate at East China Normal University, exploring spatial AI, embodied intelligence, and multimodal systems.",
    author: "Lan Luo",
    profile: "https://rileyluolan.github.io/about/",
    ogImage: "og.png",
    lang: "en",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: { perPage: 8, perIndex: 5, scheduledPostMargin: 0 },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: false,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
  },
  socials: [{ name: "github", url: "https://github.com/rileyluolan", linkTitle: "Lan Luo on GitHub" }],
  shareLinks: [],
});
