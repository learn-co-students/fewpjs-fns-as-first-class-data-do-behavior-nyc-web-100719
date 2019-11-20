/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  const timeInt = parseInt(time);
  
  if (timeInt < 12)
  {
    return "Good Morning";
  }
  else if (timeInt < 17)
  {
    return "Good Afternoon";
  }
  else 
  {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(timeString){
  let h1 = document.getElementById("greeting");
  h1.innerText = timeString;
}
