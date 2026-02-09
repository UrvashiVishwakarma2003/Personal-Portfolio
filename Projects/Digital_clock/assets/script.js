// JavaScript for switching clock format
const formatSwitchBtn = document.querySelector(".format-switch-btn");

formatSwitchBtn.addEventListener("click", () => {
    formatSwitchBtn.classList.toggle("active");
    let formatValue = formatSwitchBtn.getAttribute("data-format");
    formatSwitchBtn.setAttribute("data-format", formatValue === "12" ? "24" : "12");
});

function clock() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let period = hours >= 12 ? "PM" : "AM";
    
    // Convert to 12-hour format if needed
    if (formatSwitchBtn.getAttribute("data-format") === "12") {
        hours = hours % 12 || 12;
    }
    
    document.querySelector(".hours").innerHTML = hours.toString().padStart(2, "0");
    document.querySelector(".minutes").innerHTML = minutes.toString().padStart(2, "0");
    document.querySelector(".seconds").innerHTML = seconds.toString().padStart(2, "0");
    document.querySelector(".period").innerHTML = period;
}

setInterval(clock, 1000);

// Fixing date display
let today = new Date();
document.querySelector(".month-name").innerHTML = today.toLocaleString("default", { month: "long" });
document.querySelector(".day-name").innerHTML = today.toLocaleString("default", { weekday: "long" });
document.querySelector(".day-number").innerHTML = today.getDate();
document.querySelector(".year").innerHTML = today.getFullYear();

// Toggle menu visibility
const dotMenuBtn = document.querySelector(".dot-menu-btn");
const dotMenu = document.querySelector(".dot-menu");

dotMenuBtn.addEventListener("click", () => {
    dotMenu.classList.toggle("active");
    dotMenu.style.visibility = dotMenu.classList.contains("active") ? "visible" : "hidden";
    dotMenu.style.opacity = dotMenu.classList.contains("active") ? "1" : "0";
});














































