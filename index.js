/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function displayMessage(msg){
  document.getElementById("greeting").innerText = msg
}
function greet(time){
  const hr = parseInt(time, 10)
  if(hr<12){
    return "Good Morning"
  }else if(hr < 17){
    return "Good Afternoon"
  }else {
    return "Good Evening"
  }
  
};