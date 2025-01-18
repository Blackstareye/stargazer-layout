# 🌟 Stargazer Layout

![Version](https://img.shields.io/badge/Version-0.3.0-brightgreen)
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

### Soon

-   **soon:** pagination with beercss
-   **soon:** includes
    [snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets)
    for vs code
    -   for logging with `logging`
-   **soon:** autodetect scss,ts,js and css in your asset folder

## Configuration

### SEO

Canonical Link:
[Wiki](https://en.wikipedia.org/wiki/Canonical_link_element)

``` yaml
# if this is true, the website sets a canon link 
# <link rel="canonical" href="http://example.com/">
useCanonify: True
```

and the usual [hugo
configs](https://gohugo.io/getting-started/configuration/#configuration-file):

### Custom SCSS/ CSS / JS / TS

`node_modules` will be added automatically with the wildcard below. if
you want to have a more `fine grained` control you can adjust the
wildcard or use **explizit** files

Dont change the ones marked with `!!!`

``` yaml
regex_folders: 
    your_site:
      vendor:  #!!!
        js: # !!!
          - "vendorlibs/**/dist/**/*.min.js" #this is the one which is mounted in assets 
          # explizit files
          - "vendorlibs/my-explizit-file.js"
        css: # !!!
          - "vendorlibs/**/dist/**/*.min.css"
      custom: # !!!
        # put your custom css here
        css: # !!!
          - "css/*.css"
          - "scss/main.scss"
        # put your custom css here
        js: # !!!
          - "ts/*.ts"
          - "js/*.js"
```

### Importmap - Using your modules in your custom module

You can use modules like you are used to do it in other frameworks

Here an example for a `vue` web app with a component `ChildComp`

``` yaml
importmap: # !!!
  your_site: 
    # vue
    vue: /vendorlibs/vue/dist/vue.esm-browser.prod.js
    # component
    compact_child: "js/ChildComp.js"
```

``` js
import * from "compact_child";
```

> \[!IMPORTANT\] it is important that the file is actually **on** the
> path you configured. If you put your js in `assets/js/foo/bar.js` then
> the path is `js/foo/bar.js`

### Controll logging

> \[!NOTE\] This is more a feature that helps to develop and have "some"
> logging structure

You can debug your page using the snippet

``` go
{{ partial "logging/show_info" (dict "level" "debug" "pre" "Debug Message"  "inner" (debug.Dump .) }}
```

#### Parameters

-   level: level of logging
-   (optional) pre: a prefix that should be printed before the debug
    message. This is helpful for finding your debug info in your website
-   inner: the actual message

#### Configure whether the message should be displayed or not

you can control this by setting the following values in your config:

``` yaml
show_infos: 
  error: True
  warning: True
  info: True
  debug: False # messages with level "debug" are not visible
```

> \[!IMPORTANT\] for Devs atm, there is no **logging** level in the
> usual cascading style of logging frameworks. You have to controll the
> visibility of your message level by level.

## 🎯 Installation

### Quickstart

just copy this and paste it in your working directory

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

### Install Theme

As Git Submodule Inside the folder of your Hugo site run:

``` sh
git submodule add  https://github.com/Blackstareye/stargazer-layout themes/stargazer-layout

# go to the directory
cd themes/stargazer-layout
npm install
```

Put this in your config:

``` yaml
theme: 
  - stargazer-layout
```

or add it to your other themes

``` yaml
theme: 
  - your-theme
  - stargazer-layout
```

if you prefer toml:

``` toml
theme=["stargazer-layout"]
```

For more information read the official [Quick
Start](https://gohugo.io/getting-started/quick-start/) guide of Hugo.

Thats it, you are all set. 🙌

#### Run it

    hugo serve

## 🛠️ Tech-Stack

-   HTML,JS,SCSS,TS,CSS
-   [Hugo](https://gohugo.io/getting-started/quick-start/)

## 📄 LICENSE

this project is under the MIT License, see [LICENSE](LICENSE)

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
