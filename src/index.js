import "./styles.scss";
import "font-awesome/css/font-awesome.min.css";

const toast = document.querySelector(".toast");
const sin = document.getElementById('in');
const sout = document.getElementById('out');

function slidein() {
  toast.classList.remove("slideout")
  toast.classList.add("slidein")
}

function slideout() {
  toast.classList.add("slideout")
  toast.classList.remove("slidein")
}

function remove() {
  slideout()
  setTimeout(() => toast.remove(), 1500)
}

toast.addEventListener('animationend', remove)
sin.addEventListener('click', slidein)
sout.addEventListener('click', slideout)