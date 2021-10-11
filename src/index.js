import "./styles.scss";
import "font-awesome/css/font-awesome.min.css";
import Toast from "./toast";

function createToast() {
  const toast = new Toast(2000,'bottom')
  toast.init()
  toast.showToast()
}
const sin = document.getElementById('in');
const sout = document.getElementById('out');

sin.addEventListener('click', createToast)
// sout.addEventListener('click',removeToast)