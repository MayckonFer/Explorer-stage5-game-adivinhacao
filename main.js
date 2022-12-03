const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const errorFieldAny = document.querySelector(".errorFieldAny");
const errorNumberInvalid = document.querySelector(".errorNumberInvalid");
const inputNumber = document.querySelector("#input-number");
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", handlePress);

function handleTryClick(event) {
  event.preventDefault();

  if (inputNumber.value === "") {
    inputValueClean();
    return;
  }

  if (Number(inputNumber.value) <= 0 || Number(inputNumber.value) > 10) {
    numberInvalid();
    clearInput();
    return;
  }

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();

    document.querySelector(
      ".screen2 h2"
    ).innerText = `acertou em ${xAttempts} tentativas`;
  }

  clearInput();
  xAttempts++;
}

function handleResetClick() {
  toggleScreen();
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function handlePress(event) {
  if (event.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
}

function inputValueClean() {
  errorFieldAny.classList.add("show");

  setTimeout(() => {
    errorFieldAny.classList.remove("show");
  }, 2000);
}

function numberInvalid() {
  errorNumberInvalid.classList.add("show");

  setTimeout(() => {
    errorNumberInvalid.classList.remove("show");
  }, 2000);
}

function clearInput() {
  inputNumber.value = "";
}

// Dark Mode

const buttonDarkMode = document.querySelector(".button-darkMode");
const buttonLightMode = document.querySelector(".button-lightMode");

buttonDarkMode.addEventListener("click", handleDarkMode);
buttonLightMode.addEventListener("click", handleLightMode);

function handleDarkMode() {
  buttonDarkMode.classList.add("hide");
  buttonLightMode.classList.remove("hide");
  document.querySelector("body").classList.add("bg-darkMode");
  document.querySelector("main").classList.add("bg-card");
  document.querySelector("main h1").classList.add("title-darkMode");
  document.querySelector("main h2").classList.add("title-darkMode");
  document.querySelector("main p").classList.add("title-darkMode");
}

function handleLightMode() {
  buttonDarkMode.classList.remove("hide");
  buttonLightMode.classList.add("hide");
  document.querySelector("body").classList.remove("bg-darkMode");
  document.querySelector("main").classList.remove("bg-card");
  document.querySelector("main h1").classList.remove("title-darkMode");
  document.querySelector("main h2").classList.remove("title-darkMode");
  document.querySelector("main p").classList.remove("title-darkMode");
}
