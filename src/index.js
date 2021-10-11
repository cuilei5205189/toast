import "./styles.css";
import "@fortawesome/fontawesome-free/scss/fontawesome";
// import "@fortawesome/fontawesome-free/js/all.js";

const toast = document.querySelector(".toast");

function slidein() {
  toast.classList = "slidein";
}

function slideout() {
  toast.classList = "slideout";
}
