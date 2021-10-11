import "./styles.css";
import "font-awesome/css/font-awesome.min.css";

const toast = document.querySelector(".toast");

function slidein() {
  toast.classList = "slidein";
}

function slideout() {
  toast.classList = "slideout";
}
