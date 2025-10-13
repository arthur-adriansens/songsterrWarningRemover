// Chenge icon

async function updateIcon(tabId) {
    if (!tabId) return;

    try {
        const [result] = await chrome.scripting.executeScript({
            target: { tabId },
            func: () => localStorage.getItem("disabled"),
        });

        const isDisabled = result?.result === "true";
        const iconPath = isDisabled ? "icons/off.png" : "icons/on.png";
        await chrome.action.setIcon({ tabId, path: iconPath });
    } catch (err) {
        // Happens if tab doesn't allow script execution (e.g. Chrome Web Store or internal page)
        console.warn("Icon update failed:", err);
    }
}

// When a tab is activated
chrome.tabs.onActivated.addListener(async ({ tabId }) => {
    updateIcon(tabId);
});

// When the active tab finishes loading
chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (changeInfo.status === "complete") {
        updateIcon(tabId);
    }
});
