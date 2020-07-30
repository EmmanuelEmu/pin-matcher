//generate-button Event listener
document.getElementById("generateButton").addEventListener("click", function () {
    let randomPin = Math.round(Math.random() * 10000);
    if (randomPin >= 1000 && randomPin <= 9999) {
        document.getElementById("generatedPin").value = randomPin;
        document.getElementById("generatedPin").style.textAlign = "center";
    }

})

//function of building the input number from user
function inputNumber(inputId) {
    let calculatorNumber = parseInt(inputId.innerHTML);
    let initialNumber = parseInt(document.getElementById("userInput").value);
    let userGiven = initialNumber * 10 + calculatorNumber;
    document.getElementById("userInput").value = userGiven;
}

//calculator part 
document.getElementById("number-7").addEventListener("click", function () {
    let numberId = document.getElementById("number-7");
    inputNumber(numberId);
});
document.getElementById("number-8").addEventListener("click", function () {
    let numberId = document.getElementById("number-8");
    inputNumber(numberId);
});
document.getElementById("number-9").addEventListener("click", function () {
    let numberId = document.getElementById("number-9");
    inputNumber(numberId);
});
document.getElementById("number-4").addEventListener("click", function () {
    let numberId = document.getElementById("number-5");
    inputNumber(numberId);
});
document.getElementById("number-5").addEventListener("click", function () {
    let numberId = document.getElementById("number-5");
    inputNumber(numberId);
});
document.getElementById("number-6").addEventListener("click", function () {
    let numberId = document.getElementById("number-6");
    inputNumber(numberId);
});
document.getElementById("number-1").addEventListener("click", function () {
    let numberId = document.getElementById("number-1");
    inputNumber(numberId);
});
document.getElementById("number-2").addEventListener("click", function () {
    let numberId = document.getElementById("number-2");
    inputNumber(numberId);
});
document.getElementById("number-3").addEventListener("click", function () {
    let numberId = document.getElementById("number-3");
    inputNumber(numberId);
});
document.getElementById("number-0").addEventListener("click", function () {
    let numberId = document.getElementById("number-0");
    inputNumber(numberId);
});


//submit Button part 
document.getElementById("submitButton").addEventListener("click",function() {
   let givenInput = parseInt(document.getElementById("userInput").value);
   let pinNumber = parseInt(document.getElementById("generatedPin").value); 
   if (givenInput == pinNumber) {
       document.getElementById("matchedPin").style.display = "block";
   }
   else{
    document.getElementById("unmatchedPin").style.display = "block";
   }
   let tryLeft = parseInt(document.getElementById("tryNumber").innerHTML);
   tryLeft--;
   if(tryLeft>=0){
    document.getElementById("tryNumber").innerHTML = tryLeft;
   }
   else{
    document.getElementById("tryNumber").innerHTML = 0;
   }


});

//Erasing part 
document.getElementById("clearButton").addEventListener("click",function(){
    document.getElementById("userInput").value = 0;
});

document.getElementById("singleNumberEraser").addEventListener("click",function() {
   let userInput = document.getElementById("userInput").value;
   document.getElementById("userInput").value = Math.floor(userInput/10);
   
});


