// Business End Logic
var numberInput;
var numberOutput
var romanOutput=[];
var splitNumbers = [];
var strOfNumbers = "";
var numbers = [];
var byNumber = ""
var romanNumerals = [["","I","II","III","IV","V","VI","VII","VIII","IX"],
                    ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
                    ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
                    ["","M","MM","MMM"]];

//Function to convert inputed number to a Roman Numeral.

var numConverter = function(inputOne) {
  if(inputOne >= 4000 || inputOne<=0){
    return("Please Enter a Valid Number");
  }
  else{
    strOfNumbers = inputOne.toString()
    splitNumbers = strOfNumbers.split("");
    splitNumbers.reverse();
    console.log(splitNumbers);
    for(i=0; i<splitNumbers.length; i++){
      romanOutput.push(romanNumerals[i][splitNumbers[i]]);

    }
    result = romanOutput.reverse();
    resultFinal = result.join('')
    return resultFinal;
  };

};











//   strOfNumbers = inputOne.split("");//Creates array of numbers.
//   // console.log(strOfNumbers);
//   for(i=0; i<strOfNumbers.length; i++){
//     if(/[0-9]/.test(strOfNumbers) === true && (strOfNumbers.length <= 4)) {//tests for valid input.
//       if(strOfNumbers[0] >= 4 && strOfNumbers.length === 4 || strOfNumbers[0] == 0 && strOfNumbers.length === 1){//sets an upper and lower limit for input.
//         return("Please Enter a Valid Number.")
//       }
//       else{
//         for(i=0; i<strOfNumbers.length; i++){//creates array of ints
//           numbers[i] = parseInt(strOfNumbers[i]);
//
//         }
//         numbers.reverse();
//         for(i=0; i<numbers.length; i++){
//           romanOutput = romanNumerals[i][numbers[i]];
//           //console.log(romanOutput);
//         }
//         //romanOutput.reverse();
//         console.log(romanOutput);
//       }
//     }
//     else {
//       return("Please Enter a Valid Number.");
//     }
//   }
// };
// user interface logic
$(document).ready(function() {
  $("form#romanNumeralForm").submit(function(event) {
    event.preventDefault();
    numberInput = parseInt($("input#romanNumeral").val());
    //numberOutput = numConverter(numberInput);
    result = numConverter(numberInput);
    $(".converted").text(result);

    $("#result").show();
  });
});
