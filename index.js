"use strict";
const form = document.getElementById('bmi-form');
const container = document.querySelector('.container');
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  const age = document.getElementById("age").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  let sex = document.querySelector("input[name='sex']:checked");
  if(sex == null) {
    sex = "man";
  } else {
    sex = sex.value;
  }
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
  const result = getResult(bmi);
  const minHW = (18.5 * (heightInMeters * heightInMeters)).toFixed(1);
  const maxHW = (24.9 * (heightInMeters * heightInMeters)).toFixed(1); 
  addElement(bmi, result, minHW, maxHW);
})

function getResult(bmi) {
  if(bmi < 18.5) return "Under weight"; 
  else if(bmi <= 24.9) return "Normal";
  else if(bmi <= 29.9) return "Over weight";
  else if(bmi <= 34.9) return "Obese";
  else return "Extremely obese";
}
function addElement(bmi,result,minHW,maxHW) {
  container.innerHTML = "";
  const html = `
  <div class="container-result">
      <div class="result">
        <h4>BMI:</h4>
        <p>${bmi}</p>
        <h4>Result:</h4>
        <p>${result}</p> 
      </div>
      <div class="about">
        <h4>About me:</h4>
        <ul>
          <li>Healthy BMI range: 18.5 kg/m<sup>2</sup> - 25 kg/m<sup>2</sup></li>
          <li>Healthy weight: ${minHW} kg - ${maxHW} kg</li>
        </ul>
      </div>
      <div>
        <img src="resources/image-bmi.png" alt="">
      </div>
    </div>
  `;
  const div = document.createElement("DIV");
  div.innerHTML = html.trim();
  div.classList.add(container-result);
  container.appendChild(div);
}