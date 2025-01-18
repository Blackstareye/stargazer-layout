# Configuration

## SEO

Canonical Link: [Wiki](https://en.wikipedia.org/wiki/Canonical_link_element)

```yaml
# if this is true, the website sets a canon link 
# <link rel="canonical" href="http://example.com/">
useCanonify: True
```

and the usual [hugo configs](https://gohugo.io/getting-started/configuration/#configuration-file):

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
