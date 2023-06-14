const dropdown_div = document.querySelector(".dropdown-content");
const btn = document.querySelector(".dropdown-button");

btn.addEventListener("click", function () {
    if (dropdown_div.style.display == "block") {
        dropdown_div.style.display = "none";
    }
    else {
        dropdown_div.style.display = "block";
    }
});

