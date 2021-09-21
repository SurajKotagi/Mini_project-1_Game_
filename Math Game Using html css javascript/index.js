var name1 = prompt("Player 1 : Enter your Name");
var name2 = prompt("Player 2 : Enter your Name");
document.getElementById("namePlayerOne").innerHTML = name1 ;
document.getElementById("namePlayerTwo").innerHTML = name2 ;

var levelOfPlayerOne = 0 ; 
var levelOfPlayerTwo = 0 ;


// making function which generates any random number between 1 to 10000000000

function randomNumberGenerator(){
    var generatedNumber = ( Math.floor(Math.random()*1000000)+1 ) ;
    return generatedNumber ;
}

// // function for generating first random numbers for addition operation
// function firstRandomNumberGiver(){
//     var firstNumber = randomNumberGenerator() ;
//     return firstNumber ; 
// } 

// // function for generating second random numbers for addition operation
// function secondRandomNumberGiver(){
//     var secondNumber = randomNumberGenerator() ;
//     return secondNumber ; 
// } 

// function to generate question for first player
function generateQuestionPlayerOne(){
    var a = randomNumberGenerator() ; 
    var b = randomNumberGenerator() ;
    // changing first operand of player one 
    var tempNum1 = document.getElementById("num1") ;
    tempNum1.innerHTML = a ;
    // changing second operand of player one
    var tempNum2 = document.getElementById("num2") ; 
    tempNum2.innerHTML = b ;
//     var tempStatus1 = document.getElementById("statusOfPlayerOne");
//     tempStatus1.innerHTML = "wrong answer" ;
}

// function to generate question for second player
function generateQuestionPlayerTwo(){
    var c = randomNumberGenerator() ; 
    var d = randomNumberGenerator() ;
    // changing first operand of player two 
    var tempNum3 = document.getElementById("num3") ;
    tempNum3.innerHTML = c ;
    // changing second operand of player two
    var tempNum4 = document.getElementById("num4") ; 
    tempNum4.innerHTML = d ;
}

// function which checks the answer
function checker(operand1, operand2 , playerAnswer){
    var correctAnswer = operand1 + operand2 ;
    if(playerAnswer === correctAnswer){
        return "true" ;
    } 
    else{
        return "false" ; 
    }
}

// function which starts the game
function startOfGame(){
    generateQuestionPlayerOne() ;
    generateQuestionPlayerTwo() ;
}

// function which checks the answer of player one with the help of checker and updates the status of player one
function checkAnsPlayerOne(){
    var data1 = document.getElementById("num1").innerHTML ;
    var data2 = document.getElementById("num2").innerHTML ;
    var data3 = document.getElementById("ans1").value ;
    var result = checker(Number(data1), Number(data2), Number(data3)) ;
    console.log(result) ;
    if(result==="true"){
        rightStatusPlayerOne();
    }
    else{
        wrongStatusPlayerOne();
    }
}
function checkAnsPlayerTwo(){
    var data4 = document.getElementById("num3").innerHTML ;
    var data5 = document.getElementById("num4").innerHTML ;
    var data6 = document.getElementById("ans2").value ;
    var result = checker(Number(data4), Number(data5), Number(data6)) ;
    console.log(result) ;
    if(result==="true"){
        rightStatusPlayerTwo();
    }
    else{
        wrongStatusPlayerTwo();
    }
}

function rightStatusPlayerOne(){
    var tempStatus1 = document.getElementById("statusOfPlayerOne");
    tempStatus1.innerHTML = "right answer" ;
    levelOfPlayerOne++ ;
    var templevel1 = "Level " + levelOfPlayerOne;
    var temp_string = document.getElementById("playerOneLevel");
    temp_string.innerHTML = templevel1 ; 
    if(levelOfPlayerOne>=5){
        document.getElementById("playerOneLevel").innerHTML = "You win" ;
    }
    else{
        generateQuestionPlayerOne();
    }
}
function wrongStatusPlayerOne(){
    var tempStatus2 = document.getElementById("statusOfPlayerOne");
    tempStatus2.innerHTML = "wrong answer" ;
}

function rightStatusPlayerTwo(){
    var tempStatus2 = document.getElementById("statusOfPlayerTwo");
    tempStatus2.innerHTML = "right answer" ;
    levelOfPlayerTwo++ ;
    var templevel2 = "Level " + levelOfPlayerTwo;
    var temp_string = document.getElementById("playerTwoLevel");
    temp_string.innerHTML = templevel2 ; 
    if(levelOfPlayerTwo>=10){
        document.getElementById("playerTwoLevel").innerHTML = "You win" ;
    }
    else{
        generateQuestionPlayerTwo();
    }
}
function wrongStatusPlayerTwo(){
    var tempStatus2 = document.getElementById("statusOfPlayerTwo");
    tempStatus2.innerHTML = "wrong answer" ;
}
// checker(3, 2, 1) ;
// console.log(Number("123"));
// console.log("123");
// comsole.log(document.getElementById("num2").innerHTML);


    