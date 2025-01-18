# 🎯 Installation

## Quickstart

just copy this and paste it in your working directory

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

## Install Theme

As Git Submodule
Inside the folder of your Hugo site run:

```sh
git submodule add  https://github.com/Blackstareye/stargazer-layout themes/stargazer-layout

# go to the directory
cd themes/stargazer-layout
npm install

```

Put this in your config:

```yaml
theme: 
  - stargazer-layout
```

or add it to your other themes

```yaml
theme: 
  - your-theme
  - stargazer-layout
```

if you prefer toml:

```toml
theme=["stargazer-layout"]
```

For more information read the official [Quick Start](https://gohugo.io/getting-started/quick-start/) guide of Hugo.

Thats it, you are all set. 🙌

### Run it

```
hugo serve
```


