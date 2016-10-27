// Business End Logic
var numberInput;
var numberOutput
var result;
var numbers = [];
var byNumber = ""

//Function to convert inputed number to a Roman Numeral.
var numConverter = function(inputOne) {
  numbers = inputOne.split("");//Creates array of numbers.
  console.log(numbers);
  for(i=0; i<numbers.length; i++){
    if(/[0-9]/.test(numbers) === true && (numbers.length <= 4)) {//tests for valid input.
      if(numbers[0] >= 4 && numbers.length === 4 || numbers[0] == 0 && numbers.length === 1){//sets an upper and lower limit for input.
        return("Please Enter a Valid Number.")
      }
      else{
        if()
      }
    }
    else {
      return("Please Enter a Valid Number.");
    }
  }
};
// user interface logic
$(document).ready(function() {
  $("form#romanNumeralForm").submit(function(event) {
    event.preventDefault();

    numberInput = $("input#romanNumeral").val();
    numberOutput = numConverter(numberInput, byNumber);
    result = numConverter(numberInput);
    $(".converted").text(result);

    $("#result").show();
  });
});
