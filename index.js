/* Given Code, don't edit */
function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeStr) {
  let parsedStr = Number.parseInt(timeStr);
  if (parsedStr < 12)
    return "Good Morning"
  if (parsedStr > 17)
    return "Good Evening"
  if (parsedStr < 17 && parsedStr > 12)
    return "Good Afternoon"
}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.getElementById("greeting").innerText = message
}
