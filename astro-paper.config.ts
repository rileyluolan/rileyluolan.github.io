import { defineAstroPaperConfig } from "./src/types/config";
export default defineAstroPaperConfig({
  site: {
    url: "https://rileyluolan.github.io/", title: "罗澜",
    description: "华东师范大学本科生，记录空间智能、具身系统、论文阅读与工程实践。",
    author: "罗澜", profile: "https://rileyluolan.github.io/about/",
    ogImage: "og.png", lang: "zh-CN", timezone: "Asia/Shanghai", dir: "ltr",
  },
  posts: { perPage: 8, perIndex: 5, scheduledPostMargin: 0 },
  features: {
    lightAndDarkMode: true, dynamicOgImage: false, showArchives: false,
    showBackButton: true, editPost: { enabled: false }, search: "pagefind",
  },
  socials: [{ name: "github", url: "https://github.com/rileyluolan", linkTitle: "罗澜的 GitHub" }],
  shareLinks: [],
});
