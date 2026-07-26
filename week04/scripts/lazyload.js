// declare a new date object and use it to display the Year
const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();

// declare a new date object created from the lastModified method string and display it as a formatted time
const lastMod = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = lastMod.toLocaleString("en-US", {
    year: "numeric",
    month:"long",
    day: "numeric",
    hour: "numeric",
    // minute: "2-digit",
    // second: "2-digit",
    weekday: "long",
    timeZoneName: "short"
});

const allImages = document.querySelectorAll("img");
allImages.forEach(imgItem => {
    imgItem.addEventListener("load", () => {
        imgItem.classList.add("show");
    });
});
imgSelect.classList.add("show");