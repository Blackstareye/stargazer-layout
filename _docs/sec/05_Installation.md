# 🎯 Installation

## ⏫ Quickstart

Just copy and paste this into your working directory:

```sh
hugo new site my-site
cd my-site
echo "theme=[\"stargazer-layout\"]" >> hugo.toml
git clone https://github.com/Blackstareye/stargazer-layout themes/stargazer-layout
cd themes/stargazer-layout
npm install
cd ../..
hugo serve
```

## 🚀 Install Theme

### As a Git Submodule

Inside your Hugo site folder, run:

```sh
git submodule add https://github.com/Blackstareye/stargazer-layout themes/stargazer-layout

# Go to the theme directory
cd themes/stargazer-layout
npm install
```

### Add Theme to Config

Include this in your Hugo config:

```yaml
theme: 
  - stargazer-layout
```

Or, if you are using multiple themes:

```yaml
theme: 
  - your-theme
  - stargazer-layout
```

For **TOML** users:

```toml
theme=["stargazer-layout"]
```

For more details, check out Hugo’s official [Quick Start](https://gohugo.io/getting-started/quick-start/) guide.

That's it! You’re all set. 🙌

## 🌟 Run It

```sh
hugo serve
```