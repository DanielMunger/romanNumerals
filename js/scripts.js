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
