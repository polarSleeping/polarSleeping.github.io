+++
title = "PaperMod 常用 Params 说明"
date = "2025-11-26T00:00:00+08:00"
draft = false
tags = ["hugo", "papermod", "configuration", "docs"]
+++

## 概要

本文档汇总 PaperMod 主题模版中常用的 `site.Params` 配置项（非穷尽，但覆盖常见场景），并给出示例和使用建议。可直接把示例复制到站点的 `hugo.toml` 的 `[params]` 区块。

## 使用说明

- 站点级参数放在 `hugo.toml` 的 `[params]` 下。
- 模板在构建时读取 `site.Params` 并渲染到 HTML。修改 `hugo.toml` 后需重新构建（或使用 `hugo server` 热重载）。
- 如果想覆盖主题内的 partial 或模板，请在站点根目录 `layouts/` 下放置同名文件（Hugo 优先使用站点层的模板）。

## 常用参数分类与示例

以下以分组方式列出常用的配置项和示例（TOML 语法）。按需复制到 `hugo.toml`。

### 站点外观与主题

```toml
[params]
  # 主题模式："auto" | "light" | "dark"
  defaultTheme = "auto"

  # 禁用主题模式切换器
  disableThemeToggle = false

  # 环境标记（可用于在生产环境启用某些功能）
  env = "production"
```

### 首页与列表行为

```toml
[params]
  # 首页首条显示：启用后会显示一个 homeInfo 区块（阻止首篇使用 first-entry 样式）
  homeInfoParams = { Title = "欢迎", Content = "这是我的博客简介。" , AlignSocialIconsTo = "center" }

  # 或者直接禁用首条特殊样式
  disableSpecial1stPost = true

  # 首页要列出的主 sections（类型名，通常为 posts）
  mainSections = ["posts"]
```

### 社交与作者

```toml
[params]
  # 简单的社交图标配置，被模板的 social_icons partial 使用
  socialIcons = [
    { name = "github", url = "https://github.com/yourname" },
    { name = "twitter", url = "https://twitter.com/yourname" }
  ]

  # 站点作者信息（map 或 string）
  author = { name = "Your Name", email = "you@example.com" }
```

### 资源与图标

```toml
[params.assets]
  favicon = "images/favicon.png"
  favicon16x16 = "images/favicon-16x16.png"
  favicon32x32 = "images/favicon-32x32.png"
  theme_color = "#2e2e33"
```

### SEO / OpenGraph / Schema

```toml
[params]
  description = "站点描述，显示在 meta description 中"
  keywords = ["hugo","blog","tech"]

  [params.schema]
    publisherType = "Organization" # 或 "Person"
    sameAs = ["https://github.com/yourname"]

  # RSS 设置
  ShowFullTextinRSS = false
```

### 分页、显示与文章行为

```toml
[params]
  ShowReadingTime = true
  ShowShareButtons = true
  ShowCodeCopyButtons = true
  ShowPageNums = true
  DateFormat = ":date_long"

  # 全局封面行为
  [params.cover]
    linkFullImages = true
    responsiveImages = true
```

### 搜索 / 索引（fastsearch / Fuse.js）

```toml
[params]
  searchHidden = false
  [params.fuseOpts]
    threshold = 0.4
    keys = ["title","permalink","summary","content"]
```

### 分析与验证（示例）

```toml
[params.analytics.google]
  SiteVerificationTag = "your-google-site-verification"

[params.analytics.bing]
  SiteVerificationTag = "your-bing-tag"
```

## 如何查看主题中使用了哪些 `params`

如果你想获取主题内部实际用到的 `site.Params` 键：

- 在项目目录使用命令搜索模板中的 `site.Params`（Windows PowerShell 示例）：

```powershell
Get-ChildItem -Recurse themes\PaperMod\layouts -Include *.html,*.xml |
  Select-String 'site\.Params\.[A-Za-z0-9_]+' |
  ForEach-Object { $_.Matches } | ForEach-Object { $_.Value } | Sort-Object -Unique
```

该命令列出模板中引用的 `site.Params.*` 键，便于你将常用项写入 `hugo.toml`。

## 覆盖主题而不改动 `themes/`

- 若需要修改 partial（例如 `home_info.html`），请在站点层 `layouts/partials/` 放置同名文件。Hugo 会优先使用站点层模板。

## 进阶：把参数抽成单独文件

你也可以把 params 抽为 `params.toml` 并在 `config` 目录下管理（不同项目结构略有不同），或在 `hugo.toml` 中保持清晰注释。

## 结语

如果你希望，我可以把你站点中实际使用到的所有 `site.Params` 键自动收集并生成一个带注释的 `hugo.toml` 模板文件，我可以继续自动化完成（会扫描 `themes/PaperMod/layouts` 并把发现的键整理成注释模板）。

生成于：2025-11-26
