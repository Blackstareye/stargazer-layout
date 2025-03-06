document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", async (event: Event) => {
        const target = event.target as HTMLElement;

        if (target.classList.contains("str-copycode")) {
            const button = target as HTMLButtonElement;
            const codeBlockList : Array<HTMLElement> = [ ... button.previousElementSibling?.querySelectorAll("code") as NodeListOf<HTMLElement>];
            const codeBlock : HTMLElement = codeBlockList.filter((c) => { return ! c.innerText.startsWith("1")})[0];
            if (codeBlock) {
                try {
                    await navigator.clipboard.writeText(cleanEmptyLines(codeBlock.innerText));
                    let tmp = button.innerHTML;
                    button.innerText = "✔ Copied!";
                    setTimeout(() => (button.innerHTML = tmp), 2000);
                } catch (err) {
                    console.error("Failed to copy:", err);
                }
            }
        }
    });
});



function cleanEmptyLines(s:string) {
    return s.split("\n").filter(line => line.trim() !== "").join("\n");
}