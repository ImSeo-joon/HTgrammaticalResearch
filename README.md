# 高桌文法研究中心

一所没有围墙的小型文学院。静态站点，中 / EN / FR 三语可切换，默认英文。五个正文模块之外，另设可检索的**语言文字资料库**：

**文法 · 情绪 · 社交 · 爱恋 · 创作 · 语言文字资料库**

每一页末尾固定声明：

> 仅作建议，不得当作依赖。

## 本地预览

在包含 `index.html` 的目录中启动任意静态服务器：

```bash
python -m http.server 4173 --bind 127.0.0.1
```

打开 <http://127.0.0.1:4173>。直接双击 `index.html` 也能阅读，但 PWA 安装、离线缓存与相对路径检查需要本地服务器。

## 部署到 GitHub Pages

本目录就是完整的站点，不需要构建。

1. 把本目录的**全部站点文件**放到仓库根目录（`index.html` 必须在根目录）。
2. 推送到 `main` 分支。
3. 打开仓库的 **Settings → Pages**。
4. 在 **Build and deployment** 中选择 **Deploy from a branch**。
5. 分支选 `main`，目录选 `/ (root)`，保存。
6. 等一两分钟，GitHub 会给出站点地址。

自定义域名：在仓库根目录添加 `CNAME` 文件，写入域名，并在域名服务商处配置 DNS。具体记录以 GitHub Pages 文档为准。

## 文件结构

```text
HighTableGrammaticalResearch/
├─ index.html              首页
├─ grammar.html            文法
├─ mind.html               情绪
├─ social.html             社交
├─ love.html               爱恋
├─ creation.html           创作
├─ library.html            语言文字资料库
├─ 404.html                自定义 404
├─ manifest.webmanifest    PWA 清单
├─ sw.js                   Service Worker 与离线缓存
├─ assets/
│  ├─ css/style.css        全站设计系统与响应式样式
│  ├─ fonts/               本地排版字体
│  ├─ img/brand/           背景、透明圆角 logo 与 PWA 图标
│  └─ js/
│     ├─ site.js           三语切换、渲染、目录、菜单
│     └─ content/          五个内容模块与资料库的三语文稿
│        ├─ home.js
│        ├─ grammar.js
│        ├─ mind.js
│        ├─ social.js
│        ├─ love.js
│        ├─ creation.js
│        └─ library.js
├─ tools/                  品牌图标与背景衍生资源生成脚本
├─ preview/                本地视觉检查截图
├─ robots.txt
└─ .nojekyll
```

## 修改内容

正文全部在 `assets/js/content/*.js`。每个文件的结构一致：

```js
window.GTL_CONTENT.grammar = {
  meta: {
    zh: { title: "…", description: "…" },
    en: { title: "…", description: "…" },
    fr: { title: "…", description: "…" }
  },
  page: {
    zh: { hero: {…}, sections: […], next: {…} },
    en: { hero: {…}, sections: […], next: {…} },
    fr: { hero: {…}, sections: […], next: {…} }
  }
};
```

`sections` 里的每个条目有 `id`（页内锚点）、`kicker`、`title`、`lede` 和 `blocks`。可用的块类型：

- `p`：段落，`text`
- `h3`：小标题，`text`
- `ul` / `ol`：列表，`items` 为字符串数组
- `quote`：引文，`text` 与可选的 `cite`
- `cards`：卡片组，`items` 为 `{ title, text }`
- `practice`：练习框，`title` 与 `items`（字符串或 `{ title, text }`）
- `note`：提示框，`title` 与 `text`
- `table`：表格，`caption`、`head`、`rows`

修改时请同步更新三种语言，避免切换后出现空缺。界面文案（导航、页脚、声明等）在 `assets/js/site.js` 顶部的 `CHROME` 对象中。

资料库使用单独的数据结构：`categories` 定义六个子模块，`regions` 定义地区，`resources` 保存文献条目。当前收录 51 条文学、文字研究、语言学、社会学、心理学与经济学文献。每条文献包含分类、地区、年份、三语题名/摘要/阅读视角，以及书目来源；页面支持分类、地区和关键词组合筛选。

## 语言切换

- 页面右上角提供 `中 / EN / FR`，首次访问默认英文。
- 选择会写入浏览器 `localStorage`，下次访问自动沿用。
- 也可以用链接直接分享某一语言：`index.html?lang=zh`、`?lang=en`、`?lang=fr`。

## PWA 与桌面快捷方式

- 站点提供 `manifest.webmanifest`、Service Worker、192/512 图标和独立的 maskable 图标。
- 支持安装的浏览器会显示右下角 `Install app` 入口，点击后使用系统安装流程。
- iPhone / iPad 请使用 Safari 的“分享 → 添加到主屏幕”。
- 安装和离线缓存必须在 HTTPS 或 `localhost` 下测试；GitHub Pages 默认满足该条件。
- 可安装图标的外角为透明圆角；maskable 与 Apple Touch 图标保留实底，以适配系统自身裁切。

## 设计与技术说明

- 纯静态 HTML / CSS / JavaScript，无框架、无构建、无后端。
- 标题字体 Cormorant Garamond 已本地打包；中文与正文使用系统衬线字体回退，不依赖外部字体服务。
- 每页的免责声明位于正文最末（页脚中再次出现），文案在 `site.js` 的 `CHROME.disclaimer` 中统一维护。
- 移动端会折叠导航，并在模块页显示两栏目录；宽表格支持横向滑动。
- 若不需要 `404.html` 的多语言静态写法，可替换为 GitHub Pages 默认 404。

## 品牌资源

背景图与原始 logo 保存在 `assets/img/brand/source-*.jpg`。首页首屏直接使用原始背景图；站内其他页面使用由同一图片生成的柔化背景。如需重新生成：

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\tools\make-brand-assets.ps1
powershell -NoProfile -ExecutionPolicy Bypass -File .\tools\make-background-assets.ps1
```

## 维护提醒

站内的心理、关系与沟通内容属于一般性人文讨论，不构成医疗、心理、法律或财务建议。涉及危机或持续困扰时，应引导读者寻求专业帮助。
