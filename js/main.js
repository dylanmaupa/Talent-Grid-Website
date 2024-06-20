let circleProg = document.querySelector(".progress");
let progValue = document.querySelector(".progValue");

let progStartValue = 0,
  progEndValue = 94,
  speed = 50;

let progress = setInterval(() => {
  progStartValue++;

  progValue.textContent = `${progStartValue}%`;
  circleProg.style.background = `conic-gradient(#2193D1 ${
    progStartValue * 3.6
  }deg, #ccc 0deg)`;

  if (progStartValue === progEndValue) {
    clearInterval(progress);
  }
  console.log(progStartValue);
}, speed);

let circleProg2 = document.querySelector(".progress2");
let progValue2 = document.querySelector(".progValue2");

let progStartValue2 = 0,
  progEndValue2 = 92,
  speed2 = 50;

let progress2 = setInterval(() => {
  progStartValue2++;

  progValue2.textContent = `${progStartValue2}%`;
  circleProg2.style.background = `conic-gradient(#2193D1 ${
    progStartValue2 * 3.6
  }deg, #ccc 0deg)`;

  if (progStartValue2 === progEndValue2) {
    clearInterval(progress2);
  }
  console.log(progStartValue2);
}, speed2);
