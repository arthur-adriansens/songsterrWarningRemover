if (localStorage.getItem("disabled") === "true") {
    document.body.classList.add("enabled"); // will be disabled on first update() call
}

update = () => {
    let enabled = document.body.classList.toggle("enabled");

    localStorage.setItem("disabled", enabled ? "false" : "true");

    document.querySelector("#status").textContent = enabled ? "Active" : "Inactive";
    document.querySelector("#toggler").textContent = enabled ? "Disable" : "Enable";
};

update();
document.querySelector("#toggler").onclick = update;
