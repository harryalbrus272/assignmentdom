var ctr=0;
console.log("Welcome to the javascript file");
var checkbox = document.getElementById("switch");
checkbox.addEventListener('change', function(){
  if(checkbox.checked==true){
    document.body.style.backgroundColor="black";
  }
  else{
    document.body.style.backgroundColor="white";
  }
});
