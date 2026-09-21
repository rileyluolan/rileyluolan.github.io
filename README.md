# 罗澜 · Lan Luo

个人主页与博客：<https://rileyluolan.github.io/>

基于 [AstroPaper v6.1.0](https://github.com/satnaing/astro-paper/releases/tag/v6.1.0)，保留原主题的响应式布局、搜索、标签、分页、明暗模式和文章阅读组件。网站由 GitHub Pages 免费托管，推送到 `main` 后自动发布。

## 日常写文章

1. 复制 `templates/post.md` 到 `src/content/posts/`，例如 `paper-reading.md`。
2. 修改标题、摘要、日期、标签，使用 Markdown 写正文。
3. 完成后将 `draft: true` 改为 `draft: false`。
4. 提交并推送。GitHub 仓库的 **Actions → Deploy to GitHub Pages** 变绿后，文章就会上线。

也可以直接在 GitHub 网页上打开 `src/content/posts/`，选择 **Add file → Create new file**，粘贴模板并编辑，不必在电脑上安装开发环境。

```yaml
---
title: 我的文章标题
description: 一两句话介绍内容。
pubDatetime: 2026-09-21T12:00:00+08:00
tags:
  - 论文阅读
draft: false
featured: false
---
```

- `featured: true`：在首页精选区域展示。
- `modDatetime`：可选，填写最近一次实质更新的时间。
- `draft: true`：不会生成文章页面、列表、RSS 或搜索结果；但源文件仍在公开 GitHub 仓库中，私人材料请留在本地。
- 日期设在未来：下次构建时才判断是否发布，不会自动按时间触发部署。
- 图片放在 `public/images/`，正文使用 `![图片说明](/images/example.webp)`。文件名尽量使用英文、数字和连字符。
- 文章按 `##`、`###` 标题自动生成目录：电脑左侧固定，窄屏可折叠，并高亮当前章节。不需要手写目录；可用 `toc: false` 关闭。旧 `## 目录` 写法仍兼容。
- 文章支持代码高亮、复制、图片放大和可横向滚动的表格。

## 修改个人资料

| 内容                             | 文件                         |
| -------------------------------- | ---------------------------- |
| 首页简短介绍                     | `src/pages/index.astro`      |
| About 完整介绍                   | `src/content/pages/about.md` |
| 网站名称、描述、GitHub、分页数量 | `astro-paper.config.ts`      |
| 英文界面文案                     | `src/i18n/lang/en.ts`        |
| 主题颜色                         | `src/styles/theme.css`       |

目前仅展示 Home、Blog、About，界面和个人介绍以英文为主，文章可以使用中文或英文。首页采用英文介绍、右侧 GitHub 头像、Research Interests 和按日期排列的 Latest Posts。标签从 Blog 页和文章页进入。以后有正式发表时再增加 Publications。

头像使用公开 GitHub 头像的本地副本，位于 `public/profile-avatar.jpg`，可以直接替换为自己的照片。

## 本地预览

使用 Node.js 22.12 或更新版本，以及 pnpm 11.19.0。

```bash
pnpm install --frozen-lockfile
pnpm dev
```

正式构建及预览（搜索依赖构建生成的索引）：

```bash
pnpm build
pnpm preview
```

## 发布与恢复

- 部署配置在 `.github/workflows/deploy.yml`。
- GitHub 仓库 **Settings → Pages → Source** 应为 **GitHub Actions**。
- 地址保持 `https://rileyluolan.github.io/`，不需要自购域名。
- 旧 `/notes/`、`/notes/welcome/` 链接会跳转到新博客；旧 `/now/`、`/projects/` 转到 About。
- 已有 Git 历史保留。需要恢复时可以 revert 对应提交并重新部署，无需删除仓库。

## 维护原则

平时只更新内容。依赖按提交的锁文件安装，不需要每次发文都升级；只在修复必要问题或确实需要新功能时升级，先本地构建与预览。

为降低维护量，使用系统字体和静态分享图，不依赖远程字体服务、服务器、数据库、评论后端或追踪服务。AstroPaper 后续更新不会自动覆盖本网站；必要时可以参考上游发行说明选择性同步。

相对上游的主要改动：个人内容、英文界面、学术主页排版、精简导航与页脚、旧链接跳转、GitHub Pages 部署、本地字体策略及长表格适配。主题 MIT 许可证保留在 `LICENSE`。

搜索使用统一的中英文索引（`pagefind.yml`），保留中文分词能力；搜索界面为英文。
