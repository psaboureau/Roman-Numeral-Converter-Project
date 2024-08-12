const numberInput = document.getElementById("number");
const buttonElement = document.getElementById("convert-btn");
const outputElement = document.getElementById("output");

const romanArr = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

const convertToRoman = (number) => {
  let convertedNumber = "";

  for (const [value, character] of romanArr) {
    while (number >= value) {
      convertedNumber += character;
      number -= value;
    }
  }

  return convertedNumber;
};

const displayMessage = (message, isError = false) => {
  outputElement.innerText = message;
  outputElement.classList.remove("hidden");
  if (isError) {
    outputElement.classList.add("alert");
  } else {
    outputElement.classList.remove("alert");
  }
};

const checkInput = () => {
  const number = parseInt(numberInput.value);

  if (isNaN(number)) {
    displayMessage("Please enter a valid number", true);
  } else if (number < 1) {
    displayMessage("Please enter a number greater than or equal to 1", true);
  } else if (number >= 4000) {
    displayMessage("Please enter a number less than or equal to 3999", true);
  } else {
    const convertedNumber = convertToRoman(number);
    displayMessage(convertedNumber);
  }
};

buttonElement.addEventListener("click", checkInput);
