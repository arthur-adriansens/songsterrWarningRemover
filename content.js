const selectorsToRemove = [".uxw1uw", ".vgc1tt", ".B3a4ku", "#showroom", ".Bnc1el", "#showroom_header_desktop"]; // ".C8325s" is popup, but button needs to be clicked
const selector = selectorsToRemove.join(", ");

console.log(localStorage.getItem("disabled"));

// Try removing emidiately on page load
if (localStorage.getItem("disabled") !== "true") {
    document.querySelectorAll(selector).forEach((el) => el?.remove());
}

// Observe for dynamically added elements after page load
const observer = new MutationObserver(() => {
    if (localStorage.getItem("disabled") !== "true") {
        document.querySelectorAll(selector).forEach((el) => el?.remove());

        if (document.querySelector('.C8325s a[href=""]')) {
            // Make pointer visible immidiately (avoid flikkering)
            const activePointers = document.querySelectorAll(".Cfl4ni[style]");
            if (activePointers?.length > 0) activePointers[activePointers.length - 1].style.visibility = "visible";

            // Hide popup and click continue button
            document.querySelector(".C8325s").style.display = "none";
            document.querySelector('.C8325s a[href=""]')?.click();
            console.log("clicked continue button!");
        }
    }
});

observer.observe(document.body, { childList: true, subtree: true });
