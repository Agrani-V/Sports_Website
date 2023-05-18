/* Functions for the popup */
function openPopup(imgSrc, description) {
    // Display the popup
    document.querySelector(".popup").style.display = "block";
    // Set the image source and description in the popup
    document.querySelector("#popup-img").src = imgSrc;
    document.querySelector("#popup-text").innerHTML = description;
    // Mark the selected thumbnail as "selected"
    var thumbs = document.querySelectorAll(".gallery img");
    for (var i = 0; i < thumbs.length; i++) {
        thumbs[i].classList.remove("selected");
    }
    event.target.classList.add("selected");
}



function closePopup() {
    // Hide the popup
    document.querySelector(".popup").style.display = "none";
    // Remove the "selected" class from all thumbnails
    var thumbs = document.querySelectorAll(".gallery img");
    for (var i = 0; i < thumbs.length; i++) {
        thumbs[i].classList.remove("selected");
    }
}

/* Functions for changing font size and color theme */
function changeFontSize(size) {
    document.body.style.fontSize = size;
}

function changeColorTheme(theme) {
    document.body.className = theme;
    document.querySelector(".popup-description").className = "popup-description " + theme;
    document.footer.className = theme;
    document.nav.className = theme;
}

/* Event listeners */
document.addEventListener("DOMContentLoaded", function (event) {
    // Add event listeners to thumbnails to open the popup
    var thumbs = document.querySelectorAll(".gallery img");
    for (var i = 0; i < thumbs.length; i++) {
        thumbs[i].addEventListener("click", function () {
            openPopup(this.src, this.getAttribute("data-description"));
        });
    }
    // Add event listener to close button
    document.querySelector(".close").addEventListener("click", closePopup);
    // Add event listeners to font size buttons
    document.querySelector("#font-small").addEventListener("click", function () {
        changeFontSize("16px");
    });
    document.querySelector("#font-medium").addEventListener("click", function () {
        changeFontSize("20px");
    });
    document.querySelector("#font-large").addEventListener("click", function () {
        changeFontSize("24px");
    });
    // Add event listeners to color theme buttons
    document.querySelector("#theme-light").addEventListener("click", function () {
        changeColorTheme("light");
    });
    document.querySelector("#theme-dark").addEventListener("click", function () {
        changeColorTheme("dark");
    });
    document.querySelector("#theme-blue").addEventListener("click", function () {
        changeColorTheme("blue");
    });
});


