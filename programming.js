var username = ["Afraa","Nour","Naid"];
var password = [123, 234, 345];


function logIn() {
  var submit1 = document.getElementById("username").value;
   var submit2 = document.getElementById("password").value;

 
for (i=0 ; i< username.length ; i++){
    if (username[i]==submit1 && password[i]==submit2) {
alert(username[i] +" you are logged in");
break;
}
    else  {
      alert("The username or password is incorrect"); 
      break;
    }
}
}