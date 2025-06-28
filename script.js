const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = document.querySelector("#weight").value;
  const result = document.querySelector("#result");


  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter Valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter Valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.5) {
      result.innerHTML += " (Underweight)";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      result.innerHTML += " (Normal weight)";
    } else if (bmi >= 25 && bmi < 29.9) {
      result.innerHTML += " (Overweight)";
    } else {
      result.innerHTML += " (Obesity)";
    }
  }
});
//  const cont = document.querySelector(".container");
//   cont.forEach(function (calculate) {
//     calculate.addEventListener("click", function (e) {
//       if (e.target.innerHTML === "Calculate") {
//     // calculate.style.backgroundColor = "rgb(255, 255, 255)";
//     cont.style.backgroundColor = "rgb(255, 0, 0)";
//   }
//       });
//   });