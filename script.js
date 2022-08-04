// Generate Password
function generatePassword(){
  let complexity = document.getElementById("slider").value;

  // Password Values
  let values ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()?<>{}[]_";

  let password = "";

  // For loop for password characters
for(var i = 0; i <= complexity; i++){
  password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
}

//Display password in textbox
   document.getElementById("display").value = password;

//Add previously generated passwords
document.getElementById("lastPassword").innerHTML += password + "<br />";

}

//Set default length display
document.getElementById("length").innerHTML = "Length: 25";

//Set length to slider function
document.getElementById("slider").oninput = function(){
  if(document.getElementById("slider").value > 0){
    document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
  }
  else{
    document.getElementById("length").innerHTML = "Length: 1";
  }
}

//Function to copy password
function copyPassword(){
  document.getElementById("display").select();

  document.execCommand("Copy");

  alert("Password copied!");
}