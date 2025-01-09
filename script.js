// const document = dom.window.document;
console.log("Script loaded");
const messageElement = document.getElementById("dynamic-message");
const form = document.getElementById("hobby-form");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const emailDiv = document.getElementById("email-div");
const submitForm = document.getElementById("formSubmit");
const myInput = document.getElementById("my-input");

setInterval(() => {
  const currentTime = new Date();
  messageElement.textContent = `Welcome! The current time is: ${currentTime.toLocaleTimeString()}`;
}, 1000);

// form.onsubmit((event) => {
//   event.preventDefault();
//   console.log("submitted");
// });
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("some text~");
  if (!emailInput.checkValidity()) {
    console.log(emailInput.checkValidity());
    console.log(emailError.classList);
    emailError.classList.remove("d-none");
    emailError.classList.add("d-block");
    emailError.classList.add("invalid-feedback");

    emailInput.classList.add("is-invalid");
    console.log(emailError.classList);
  } else {
    emailError.classList.remove("d-block");
    emailError.classList.add("d-none");
    emailError.classList.remove("invalid-feedback");

    emailInput.classList.remove("is-invalid");
    console.log("Submitted");
    form.submit();
  }
});

// submitForm.addEventListener("click", (event) => {
//   if (!emailInput.checkValidity()) {
//     console.log(emailInput.checkValidity());
//     console.log(emailError.classList);
//     emailError.classList.remove("d-none");
//     emailError.classList.add("d-block");
//     emailError.classList.add("invalid-feedback");

//     emailInput.classList.add("is-invalid");
//     console.log(emailError.classList);
//   } else {
//     emailError.classList.remove("d-block");
//     emailError.classList.add("d-none");
//     emailError.classList.remove("invalid-feedback");

//     emailInput.classList.remove("is-invalid");
//     console.log("Submitted");
//     form.submit();
//   }
// });

const hoverBox = document.getElementById("hover-box");

hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "lightgreen";
});

hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = "lightblue";
});

// Change image on hover
const image = document.getElementById("my-image");
image.addEventListener("mouseover", () => {
  image.src = "./images/bunny1.jpg"; // Replace with the path to another image
});
image.addEventListener("mouseout", () => {
  image.src = "./images/bunny.jpg"; // Replace with the path to the original image
});

myInput.addEventListener("focus", (event) => {
  myInput.style.borderColor = "blue";
});

myInput.addEventListener("blur", (event) => {
  myInput.style.borderColor = "gray";
});
console.log("Script ends");
