// Sticky header effect when scrolling
window.onscroll = function () { stickHeader() };

var header = document.getElementById("sticky-header");
var sticky = header.offsetTop;

function stickHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky-header");
    } else {
        header.classList.remove("sticky-header");
    }
}

// Information pour ombrage le header
function toggleContactInfo() {
    var contactInfo = document.getElementById("contact-info");
    // Toggle the 'hide' class on the contact info
    contactInfo.classList.toggle("hide");
}
