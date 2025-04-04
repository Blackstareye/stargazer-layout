if (navigator.userAgent.includes("Firefox")) {
    document.querySelectorAll(".str-text-fx").forEach( (e ) => {
        (e as HTMLElement).classList.add("str-text-fx-firefox");
        // console.debug("Firefox Debug: applied Class");
    });
}