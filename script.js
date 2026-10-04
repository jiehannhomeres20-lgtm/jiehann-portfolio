console.log("Jiehann Homeres Portfolio is running!");

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.25)";

    } else {

        header.style.boxShadow = "none";

    }

});