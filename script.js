const messageElement = document.getElementById("dynamic-message");
messageElement.style.color = "purple";
messageElement.style.fontWeight = "bold";

const form = document.getElementById("contact-form");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");

form.addEventListener("submit", (event) => {
  if (!emailInput.checkValidity()) {
    event.preventDefault();
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
});

const image = document.getElementById("my-image");
image.addEventListener("mouseover", () => {
  image.src = "./images/apple-7061902_1280.png";
});
image.addEventListener("mouseout", () => {
  image.src = "./images/rTLnkxaxc.png";
});

const image1 = document.getElementById("my-image1");
image1.addEventListener("mouseover", () => {
  image1.src = "./images/apple-154492_1280.png";
});
image1.addEventListener("mouseout", () => {
  image1.src = "./images/bpiq86rc9.png";
});

const btn = document.getElementById("btn");
btn.style.backgroundColor = "red";

function showAlert() {
  alert("are you Confirmed!");
  btn.innerText = "submited";
  btn.style.backgroundColor = "green";
}

const btn1 = document.getElementById("btn1");
btn1.style.backgroundColor = "red";
function changeColor() {
  btn1.style.backgroundColor = "green";
  btn1.innerText = "clicked";
}
