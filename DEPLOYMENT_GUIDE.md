# 部署到 Cloudflare Pages

本指南将帮助您将数学应用部署到 Cloudflare Pages，确保在中国可以正常访问。

## 📋 前置要求

- Git 已安装
- 代码已推送到 GitHub 仓库（使用 GitHub 集成方法）
- 或者安装 Node.js 18+ 和 npm（使用 Wrangler CLI 方法）

## 🚀 方法一：GitHub 集成部署（推荐）

这是最简单的方法，支持自动构建和部署。

### 1. 推送代码到 GitHub

如果还没有推送代码：

```bash
# 初始化 git 仓库（如果还没有）
git init
git add .
git commit -m "Initial commit"

# 添加远程仓库并推送
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

### 2. 连接 Cloudflare Pages

1. 访问 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 登录或注册账号
3. 在左侧菜单选择 **Workers & Pages**
4. 点击 **Create application** > **Pages** > **Connect to Git**
5. 授权 Cloudflare 访问您的 GitHub 账号
6. 选择您的数学应用仓库

### 3. 配置构建设置

在构建配置页面填写以下信息：

| 配置项 | 值 |
|--------|-----|
| **Production branch** | `main` (或您的主分支名) |
| **Framework preset** | `Vite` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |

> 💡 Cloudflare Pages 会自动检测到项目使用 Vite，并预填充这些值。

### 4. 部署

1. 点击 **Save and Deploy**
2. Cloudflare 将自动克隆、构建并部署您的应用
3. 部署完成后，您将获得一个 `.pages.dev` 域名

### 5. 访问应用

部署成功后，您的应用将可以通过以下地址访问：
```
https://your-project-name.pages.dev
```

---

## 🔧 方法二：使用 Wrangler CLI 直接部署

如果您不想使用 GitHub 集成，可以使用 Wrangler CLI 直接上传构建文件。

### 1. 安装 Wrangler

```bash
npm install -g wrangler
```

### 2. 登录 Cloudflare

```bash
wrangler login
```

这将打开浏览器窗口让您登录 Cloudflare 账号。

### 3. 构建项目

```bash
npm run build
```

这将在 `dist` 目录生成生产构建文件。

### 4. 部署到 Cloudflare Pages

```bash
wrangler pages deploy dist --project-name=math-app
```

> 💡 首次部署时，Wrangler 会为您创建项目。后续部署会更新同一项目。

### 5. 查看部署

部署完成后，终端会显示部署 URL：
```
✨ Deployment complete! Take a peek over at https://math-app.pages.dev
```

---

## 🌐 自定义域名（可选）

### 在 Cloudflare Pages 中添加自定义域名

1. 在 Cloudflare Dashboard 中打开您的 Pages 项目
2. 进入 **Custom domains** 标签
3. 点击 **Set up a custom domain**
4. 输入您的域名（例如：`math.example.com`）
5. 按照提示配置 DNS 记录

### DNS 配置

如果您的域名托管在 Cloudflare：
- Cloudflare 会自动添加所需的 CNAME 记录

如果域名托管在其他服务商：
- 添加一条 CNAME 记录指向 `your-project-name.pages.dev`

---

## 🔄 自动部署

使用 GitHub 集成时：
- 每次推送到主分支会自动触发生产部署
- Pull Request 会生成预览部署，方便测试

---

## ⚙️ 环境变量（如有需要）

如果您的应用使用环境变量：

1. 在 Cloudflare Dashboard 中打开您的 Pages 项目
2. 进入 **Settings** > **Environment variables**
3. 添加必要的环境变量（分别为 Production 和 Preview 环境配置）

---

## 🛠️ 故障排查

### 页面刷新后 404

确保 `public/_redirects` 文件存在且内容正确：
```
/* /index.html 200
```

### 构建失败

1. 检查 Node 版本是否兼容（建议 18+）
2. 在本地运行 `npm run build` 确认可以正常构建
3. 查看 Cloudflare Pages 构建日志获取详细错误信息

### 在中国访问慢

1. 确认使用的是 Cloudflare Pages（`.pages.dev` 域名）
2. Cloudflare 在中国有 CDN 节点，通常访问速度较快
3. 如果使用自定义域名，确保启用了 Cloudflare CDN

---

## 📚 更多资源

- [Cloudflare Pages 官方文档](https://developers.cloudflare.com/pages/)
- [Wrangler CLI 文档](https://developers.cloudflare.com/workers/wrangler/)
- [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html)

---

## ✅ 快速开始清单

- [ ] 代码推送到 GitHub（方法一）或本地构建完成（方法二）
- [ ] Cloudflare 账号已创建
- [ ] 连接 GitHub 仓库或安装 Wrangler CLI
- [ ] 配置构建设置（方法一）或执行 `wrangler pages deploy`（方法二）
- [ ] 部署成功，访问 `.pages.dev` 域名验证
- [ ] （可选）配置自定义域名

---

祝您部署顺利！🎉
