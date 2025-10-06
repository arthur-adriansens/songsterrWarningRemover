const selectorsToRemove = [".C8325s", ".uxw1uw", ".vgc1tt", ".B3a4ku", "#showroom"];
const selector = selectorsToRemove.join(", ");

// Try removing emidiately on page load
if (localStorage.getItem("disabled") !== "true") {
    document.querySelectorAll(selector).forEach((el) => el.remove());
}

// Observe for dynamically added elements after page load
const observer = new MutationObserver(() => {
    if (localStorage.getItem("disabled") !== "true") {
        document.querySelectorAll(selector).forEach((el) => el.remove());
    }
});

observer.observe(document.body, { childList: true, subtree: true });
