/* sets up all variables and assigns the value 0 to all */
let inputA = 0
let inputB = 0
let inputH = 0
let area = 0
/* sets up command that waits for a button click of the button with the id 'div' which activates the function 'calculate' */
document.getElementById('div').addEventListener('click', calculate)
/* Once the function is activated, it will assign whatever number was typed into the input boxes to the variables and turn them into integers to work with. After that it will take the assigned values of those variables and run through the area of a trapezoid formula and assign the result to the 'area' variable. */
function calculate () {
  inputA = document.getElementById('inputA').value
  inputA = parseInt(inputA)
  inputB = document.getElementById('inputB').value
  inputB = parseInt(inputB)
  inputH = document.getElementById('inputH').value
  inputH = parseInt(inputH)
  area = (inputA + inputB) / 2 * inputH
  document.getElementById('inputA').disabled = false
  document.getElementById('inputB').disabled = false
  document.getElementById('inputH').disabled = false
  document.getElementById('area-result').innerHTML = area
}
if (inputA == 0) {
  document.getElementById("inputA").innerHTML = "Value cannot be 0"
}
if (inputA < 0) {
  document.getElementById("inputA").innerHTML = "Value cannot be a negative integer"
}if (inputB == 0) {
  document.getElementById("inputB").innerHTML = "Value cannot be 0"
}
if (inputB < 0) {
  document.getElementById("inputB").innerHTML = "Value cannot be a negative integer"
}if (inputH == 0) {
  document.getElementById("inputH").innerHTML = "Value cannot be 0"
}
if (inputH < 0) {
  document.getElementById("inputH").innerHTML = "Value cannot be a negative integer"
}
