/* sets up all variables and assigns the value 0 to all */
let inputA = 0
let inputB = 0
let inputH = 0
let area = 0
/* sets up command that waits for a button click of the button with the id 'div' which activates the function 'calculate' */
document.getElementById('div').addEventListener('click', calculate)
/* Once the function is activated, it will assign whatever number was typed into the input boxes to the variables and turn them into integers to work with. After that it will take the assigned values of those variables and run through the area of a trapezoid formula and assign the result to the 'area' variable. */
function calculate () {
  inputA = document.getElementById('input-a').value
  inputA = parseInt(inputA)
  inputB = document.getElementById('input-b').value
  inputB = parseInt(inputB)
  inputH = document.getElementById('input-h').value
  inputH = parseInt(inputH)
  area = (inputA + inputB) / 2 * inputH
  document.getElementById('input-a').disabled = false
  document.getElementById('input-b').disabled = false
  document.getElementById('input-h').disabled = false
  document.getElementById('area-result').innerHTML = area
}
