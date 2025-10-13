if (localStorage.getItem("disabled") === "true") {
    document.body.classList.add("enabled"); // will be disabled on first update() call
}

update = () => {
    let enabled = document.body.classList.toggle("enabled");

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tabId = tabs[0].id;

        // Inject a script that runs in the context of the page and sets localStorage
        chrome.scripting.executeScript({
            target: { tabId },
            func: (enabled) => {
                localStorage.setItem("disabled", enabled ? "false" : "true");
            },
            args: [enabled], // pass 'true' or 'false' depending on your toggle
        });
    });

    document.querySelector("#status").textContent = enabled ? "Active" : "Inactive";
    document.querySelector("#toggler").textContent = enabled ? "Disable" : "Enable";
};

update();
document.querySelector("#toggler").onclick = () => {
    update();
    chrome.tabs.reload();
};
