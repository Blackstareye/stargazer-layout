# Configuration

## SEO

Canonical Link: [Wiki](https://en.wikipedia.org/wiki/Canonical_link_element)

```yaml
# if this is true, the website sets a canon link 
# <link rel="canonical" href="http://example.com/">
useCanonify: True
```

and the usual [hugo configs](https://gohugo.io/getting-started/configuration/#configuration-file):

## Deactivate Demo Content

```yaml
demo: 
    beer: false
    branding: false
```

## Set Theme

set the primary color and generate a whole theme

```yaml
themeColor: '#44d8f1'
```

## Define Menus

see [Hugo Menu Page](https://gohugo.io/templates/menu/) for more details

```yaml
#example config/menus.yaml
main: 
  - name: Home
    pageRef: /
    pre: <i> Home </i>
    weight: 10
  - name: Blogs
    pre: <i> Pages </i>
    weight: 20
    #useful for targeting the children
    identifier: blog_parent 
  - name: Technical
    pre: <i> Integration_Instructions </i>
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
  #  have another level of nesting
  # - name: Creative Part lorem 
  #   pre: <i> Palette </i>
  #   pageRef: /creative
  #   parent: blog_creative
  #   weight: 20
  #   identifier: blog_creative_part
```

## Disable content typ

Disable content type that should be not displayed in `recent posts`, `related posts` and `categories` page

```yaml
disabled:
  sections: 
      - testing
      - _index
```

## Set your Brand

```yaml

brand: 
  # img src attribute and alt attribute
  logo:
    src: "images/logo/stargazer/stargazer_layout_big.png"
    alt: "brand_logo"
  # name of your brand - this will be displayed in the tablet and mobile view
  title: Demo-Manier
```

## Custom SCSS/ CSS / JS / TS

`node_modules` will be added automatically with the wildcard below.
if you want to have a more `fine grained` control you can adjust the wildcard
or use **explizit** files

Dont change the ones marked with `!!!`

```yaml
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

## Importmap - Using your modules in your custom module

You can use modules like you are used to do it in other frameworks

Here an example for a `vue` web app with a component `ChildComp`

```yaml
importmap: # !!!
  your_site: 
    # vue
    vue: /vendorlibs/vue/dist/vue.esm-browser.prod.js
    # component
    compact_child: "js/ChildComp.js"
```

```js
import * from "compact_child";
```

>[!IMPORTANT]
> it is important that the file is actually **on** the path you configured. If you put your js in `assets/js/foo/bar.js`
> then the path is `js/foo/bar.js`

## Controll logging

>[!NOTE]
> This is more a feature that helps to develop and have "some" logging structure

You can debug your page using the snippet

```go
{{ partial "logging/show_info" (dict "level" "debug" "pre" "Debug Message"  "inner" (debug.Dump .) }}
```

### Parameters

* level: level of logging
* (optional) pre: a prefix that should be printed before the debug message. This is helpful for finding your debug info in your website
* inner: the actual message

### Configure whether the message should be displayed or not

you can control this by setting the following values in your config:

```yaml
show_infos: 
  error: True
  warning: True
  info: True
  debug: False # messages with level "debug" are not visible
```

>[!IMPORTANT] for Devs
> atm, there is no **logging** level in the usual cascading style of logging frameworks. You have to controll the visibility of your message level by level.
