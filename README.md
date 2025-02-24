# 🌟 Stargazer Layout

![Version](https://img.shields.io/badge/Version-1.0.4-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue) ![GitHub
issues](https://img.shields.io/github/issues/Blackstareye/stargazer-layout)
![GitHub
forks](https://img.shields.io/github/forks/Blackstareye/stargazer-layout)
![GitHub
stars](https://img.shields.io/github/stars/Blackstareye/stargazer-layout)
![GitHub last
commit](https://img.shields.io/github/last-commit/Blackstareye/stargazer-layout)
![Maintenance](https://img.shields.io/maintenance/yes/2025)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/H2H096MU7)

A Product made by Blackeye
([Oldschoolmanier](https://oldschoolmanier.de))

![screenshot](https://github.com/Blackstareye/stargazer-layout/blob/master/images/screenshot.png)

👉 [DEMO](https://blackstareye.github.io/stargazer-layout/)

## Description

Stargazer Layout is a hugo theme module that uses [beer
css](https://www.beercss.com/) for styling and supports `node_modules`
and `importmaps`. It offers features like minification, fingerprinting,
and custom JS/CSS integration.

It uses `beercss` as default styling. It also enables node_modules and
importmaps. Also custom js and css is available.

This is the theme module that contains all layout specific files and
functions. It can be used as a standalone or as a bundle with Stargazer
(coming soon).

## 🚀 Features

-   minify and fingerprint on `prod` 🚀 build

-   add css and js as you like

-   enable node module support with vendor folders

-   discover [beer css](https://www.beercss.com/) - full material design
    ahead!

-   add **js es-modules** with and use it in your own modules with the
    **importmap**

    -   ✅ works also with `fingerprint and minify`

-   🔨💻 logging functionality integrated, control it with
    info,warning,debug,error flags :\>

-   pagination with [beer css](https://www.beercss.com/) 🍺

-   languages: **en** and **de** available and already translated 🌍\

-   🌗 dark and light mode toggle included\

-   choose your theme using a **Color** with the param `themeColor` 🎨\

-   responsive pages and views -- a beautiful blog experience on
    desktop, tablet, and mobile 📱💻🖥️

### Blogging

[Demo](https://blackstareye.github.io/stargazer-layout/)

-   home page contains `recent posts`, and organizes content in a
    beutiful grid
-   all what you need: `list` , `single` , `tags`, `home` page is
    created

### Soon

-   **soon:** includes
    [snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets)
    for vs code
    -   for logging with `logging`
-   **soon:** autodetect scss,ts,js and css in your asset folder

## Screenshots

### Homepage

![alt
text](https://github.com/Blackstareye/stargazer-layout/blob/master/_docs/sec/assets/04_Screenshots/image-2.png)

### Posts

![alt
text](https://github.com/Blackstareye/stargazer-layout/blob/master/_docs/sec/assets/04_Screenshots/image-1.png)

### Recent Posts

![recentPosts](https://github.com/Blackstareye/stargazer-layout/blob/master/_docs/sec/assets/04_Screenshots/image.png)

## ⚙️ Configuration

### 🔍 SEO

Canonical Link:
[Wiki](https://en.wikipedia.org/wiki/Canonical_link_element)

``` yaml
# If enabled, the website sets a canonical link  
# <link rel="canonical" href="http://example.com/">
useCanonify: True
```

And the usual [Hugo
configurations](https://gohugo.io/getting-started/configuration/#configuration-file)
apply.

### 🚫 Deactivate Demo Content

``` yaml
demo: 
    beer: false
    branding: false
```

### 🎨 Set Theme

Define the primary color and generate a complete theme:

``` yaml
themeColor: '#44d8f1'
```

### 📝 Define Menus

For more details, check out the [Hugo Menu
documentation](https://gohugo.io/templates/menu/).

``` yaml
# Example config/menus.yaml
main: 
  - name: Home
    pageRef: /
    pre: <i> Home </i>
    weight: 10
  - name: Blogs
    pre: <i> Pages </i>
    weight: 20
    identifier: blog_parent  
  - name: Technical
    pre: <i> Integration Instructions </i>
    parent: blog_parent
    pageRef: /technique
    weight: 10
    identifier: blog_technique
  - name: Creative
    pre: <i> Palette </i>
    pageRef: /creative
    parent: blog_parent
    weight: 20
    identifier: blog_creative
```

### ❌ Disable Content Types

Prevent specific content types from appearing in `recent posts`,
`related posts`, and `categories` pages.

``` yaml
disabled:
  sections: 
      - testing
      - _index
```

### 🚀 Set Your Brand

``` yaml
brand: 
  # Logo settings (image src and alt text)
  logo:
    src: "images/logo/stargazer/stargazer_layout_big.png"
    alt: "brand_logo"
  # Brand title (displayed on tablet and mobile view)
  title: Demo-Manier
# will be displayed in the Footer in the Copyright tag if set
owner: FooMaker
```

### Set the owner

### 🎭 Custom SCSS / CSS / JS / TS

`node_modules` are automatically included with the wildcard below.\
For finer control, adjust the wildcard or specify files explicitly.

⚠️ **Do not modify sections marked with `!!!`**

``` yaml
regex_folders: 
    your_site:
      vendor:  #!!!
        js: # !!!
          - "vendorlibs/**/dist/**/*.min.js" # Mounted in assets  
          # Explicit files  
          - "vendorlibs/my-explicit-file.js"
        css: # !!!
          - "vendorlibs/**/dist/**/*.min.css"
      custom: # !!!
        # Custom CSS  
        css: # !!!
          - "css/*.css"
          - "scss/main.scss"
        # Custom JS  
        js: # !!!
          - "ts/*.ts"
          - "js/*.js"
```

### 🛋️ Importmap - Using Modules in Your Custom Module

Use modules just like in other frameworks.

Example: Vue web app with a `ChildComp` component

``` yaml
importmap: # !!!
  your_site: 
    # Vue  
    vue: /vendorlibs/vue/dist/vue.esm-browser.prod.js
    # Component  
    compact_child: "js/ChildComp.js"
```

``` js
import * from "compact_child";
```

> 🔥 **Important:**\
> Ensure the file exists at the configured path.\
> If your JS file is in `assets/js/foo/bar.js`, then the path should be
> `js/foo/bar.js`.

### 🛠️ Control Logging

> 📝 **Note:**\
> This feature helps with development and provides a structured logging
> system.

Enable debugging with this snippet:

``` go
{{ partial "logging/show_info" (dict "level" "debug" "pre" "Debug Message"  "inner" (debug.Dump .) }}
```

#### 🔹 Parameters

-   `level`: The logging level\
-   *(optional)* `pre`: A prefix before the debug message (helps in
    locating logs)\
-   `inner`: The actual message

#### 🛠️ Configure Log Visibility

Control which messages are displayed with:

``` yaml
show_infos: 
  error: True
  warning: True
  info: True
  debug: False # "debug" messages are hidden
```

> ⚠️ **Important for Devs:**\
> Currently, there's no **logging hierarchy** as in traditional logging
> frameworks.\
> You must manually enable/disable log levels as needed.

## 🎯 Installation

### ⏫ Quickstart

Just copy and paste this into your working directory:

``` sh
hugo new site my-site
cd my-site
echo "theme=[\"stargazer-layout\"]" >> hugo.toml
git clone https://github.com/Blackstareye/stargazer-layout themes/stargazer-layout
cd themes/stargazer-layout
npm install
cd ../..
hugo serve
```

### 🚀 Install Theme

#### As a Git Submodule

Inside your Hugo site folder, run:

``` sh
git submodule add https://github.com/Blackstareye/stargazer-layout themes/stargazer-layout

# Go to the theme directory
cd themes/stargazer-layout
npm install
```

#### Add Theme to Config

Include this in your Hugo config:

``` yaml
theme: 
  - stargazer-layout
```

Or, if you are using multiple themes:

``` yaml
theme: 
  - your-theme
  - stargazer-layout
```

For **TOML** users:

``` toml
theme=["stargazer-layout"]
```

For more details, check out Hugo's official [Quick
Start](https://gohugo.io/getting-started/quick-start/) guide.

That's it! You're all set. 🙌

### 🌟 Run It

``` sh
hugo serve
```

## 🛠️ Tech-Stack

-   HTML,JS,SCSS,TS,CSS
-   [Hugo](https://gohugo.io/getting-started/quick-start/)

## 📄 LICENSE

this project is under the MIT License, see
[LICENSE](https://github.com/Blackstareye/stargazer-layout/blob/master/LICENSE)

## 🙏 Credits

inspired by those great themes (check them also out 💚):

-   [Gohugo Theme
    Anananke](https://github.com/theNewDynamic/gohugo-theme-ananke)
-   [Hugo Profile](https://github.com/gurusabarish/hugo-profile)

## 📬 Contact

-   **GitHub**: [@blackstareye](https://github.com/Blackstareye)

-   **Website** for Freelancing:
    [Oldschoolmanier](https://oldschoolmanier.de)

## Support

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/H2H096MU7)

If you enjoy the work I do and would like to support me, I would be
truly grateful for any donations. Your contribution doesn't just help
keep this project going --- it enables me to pursue new ideas, work on
exciting future projects, and continue creating content that I'm
passionate about. Every donation, no matter how big or small, makes a
real difference and helps me dedicate more time and energy to what I
love doing. Your support enables me doing exactly that, thank you 💚.

*Made with ❤️ by Blackeye
([Oldschoolmanier](https://oldschoolmanier.de))*
