var firstname="heidi";
var lastname = "Gomez";
var numberOfSibling = 2;
var hasPets = true;


console.log(firstname);
console.log(lastname);
console.log(numberOfSibling);
console.log(hasPets);

if(hasPets === true){

    console.log("It's true!");
}

if(hasPets === false){
    console.log("It's false!");
}

var number = 0;
while (number < 15){
  console.log("my favorite class is ms.fasani");
  number++;

}
var button = document.getElementById("los rojos");
var h1 = document.getElementById("hi");
var body = document.body;
var clickCount = 0; 

body.setAttribute("style", "background-color: pink");



button.addEventListener("click", function(){
   h1.innerHTML = "los rojos team will win";
   body.setAttribute("style", "background-color: purple");

})



