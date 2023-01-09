const form = document.querySelector("form");
const input = document.querySelector("input");
const alertInfo = document.querySelector(".alert");
const alertImg = document.querySelector("#img-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (input.value == "") {
    alertMsg();
    return (alertInfo.innerHTML = "Please fill in your email.");
  }

  if (!input.value.match(pattern)) {
    alertMsg();
    return (alertInfo.innerHTML = "Please provide a valid email");
  }

  return alert("Thank you for filling in your email.");
});

function alertMsg() {
  input.style.borderColor = "hsl(0, 93%, 68%)";
  alertImg.style.display = "block";
  alertInfo.style.display = "block";
}

function clearAlert() {
  input.style.borderColor = "hsla(0, 36%, 70%, 50%)";
  alertImg.style.display = "none";
  alertInfo.style.display = "none";
  input.focus();
}

input.addEventListener("keypress", () => {
  clearAlert();
});
