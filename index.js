
let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204
const feetToMeter = 0.305
const gallonToLiter = 3.785
const poundToKilo = 0.453


 convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meter = ${baseValue * meterToFeet} feet | ${baseValue} feet = ${baseValue * feetToMeter} meter`
    
    volumeEl.textContent= `${baseValue} liter = ${baseValue * literToGallon} gallon | ${baseValue} gallon = ${baseValue * gallonToLiter} liter`
    
    massEl.textContent = `${baseValue} kilograms = ${baseValue * kiloToPound} pounds | ${baseValue} pounds = ${baseValue * poundToKilo} kilograms`
    
})