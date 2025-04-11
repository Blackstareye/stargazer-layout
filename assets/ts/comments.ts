const switchquery=".str-commentswitch > input"
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(switchquery).forEach(
        e => {
            (e as HTMLInputElement).checked = getCommentEnabled() == 1;
            e.addEventListener("click", onChange);
        }
    );
    handleBlogComment();
});


function getCommentEnabled () {
    let value = localStorage.getItem("enableBlogcomments");
    console.log(value);
    if (value) {
        return value; 
    } else {
        localStorage.setItem("enableBlogcomments", "1");
        return 1; // default is true
    }
}

function setCommentStatus(value : number | string) {
    localStorage.setItem("enableBlogcomments", `${value}`);
    console.log(value);
}

function onChange() {
    // let value = getCommentEnabled();
    let status = (this as HTMLInputElement).checked;
    console.log(status);
    setCommentStatus(status ? 1 : 0);
    handleBlogComment();
}


function createScriptlet () {
    let template  = document.getElementById("giscus-scriptlet");
    let content = (template as  HTMLTemplateElement)?.content;
    console.log(content);

    const scriptInTemplate = content.querySelector("script");
    const newScripttag = document.createElement("script");
    for (const attr of scriptInTemplate.attributes) {
        newScripttag.setAttribute(attr.name, attr.value);
      }
    document.querySelector(".str-commentbox-hook")?.appendChild(newScripttag);
}

function insertGiscus() {
    let node = document.querySelector(".str-commentbox-hook > .giscus");
    if (!node) {
        createScriptlet();
    }
}

function removeGiscus() {
    let el = document.querySelector(".str-commentbox-hook > .giscus");
    console.log(el);
    el?.remove();
}

function handleBlogComment() {
    let enabled = getCommentEnabled() == 1;
    if (enabled) {
        insertGiscus();
    } else {
        removeGiscus();
    }
}