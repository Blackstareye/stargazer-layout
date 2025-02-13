# ⚙️ Configuration  

## 🔍 SEO  

Canonical Link: [Wiki](https://en.wikipedia.org/wiki/Canonical_link_element)  

```yaml
# If enabled, the website sets a canonical link  
# <link rel="canonical" href="http://example.com/">
useCanonify: True
```

And the usual [Hugo configurations](https://gohugo.io/getting-started/configuration/#configuration-file) apply.  

## 🚫 Deactivate Demo Content  

```yaml
demo: 
    beer: false
    branding: false
```

## 🎨 Set Theme  

Define the primary color and generate a complete theme:  

```yaml
themeColor: '#44d8f1'
```

## 📝 Define Menus  

For more details, check out the [Hugo Menu documentation](https://gohugo.io/templates/menu/).  

```yaml
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

## ❌ Disable Content Types  

Prevent specific content types from appearing in `recent posts`, `related posts`, and `categories` pages.  

```yaml
disabled:
  sections: 
      - testing
      - _index
```

## 🚀 Set Your Brand  

```yaml
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

## Set the owner



## 🎭 Custom SCSS / CSS / JS / TS  

`node_modules` are automatically included with the wildcard below.  
For finer control, adjust the wildcard or specify files explicitly.  

⚠️ **Do not modify sections marked with `!!!`**  

```yaml
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

## 🛋️ Importmap - Using Modules in Your Custom Module  

Use modules just like in other frameworks.  

Example: Vue web app with a `ChildComp` component  

```yaml
importmap: # !!!
  your_site: 
    # Vue  
    vue: /vendorlibs/vue/dist/vue.esm-browser.prod.js
    # Component  
    compact_child: "js/ChildComp.js"
```

```js
import * from "compact_child";
```

> 🔥 **Important:**  
> Ensure the file exists at the configured path.  
> If your JS file is in `assets/js/foo/bar.js`, then the path should be `js/foo/bar.js`.  

## 🛠️ Control Logging  

> 📝 **Note:**  
> This feature helps with development and provides a structured logging system.  

Enable debugging with this snippet:  

```go
{{ partial "logging/show_info" (dict "level" "debug" "pre" "Debug Message"  "inner" (debug.Dump .) }}
```

### 🔹 Parameters  

- `level`: The logging level  
- *(optional)* `pre`: A prefix before the debug message (helps in locating logs)  
- `inner`: The actual message  

### 🛠️ Configure Log Visibility  

Control which messages are displayed with:  

```yaml
show_infos: 
  error: True
  warning: True
  info: True
  debug: False # "debug" messages are hidden
```

> ⚠️ **Important for Devs:**  
> Currently, there's no **logging hierarchy** as in traditional logging frameworks.  
> You must manually enable/disable log levels as needed.  
