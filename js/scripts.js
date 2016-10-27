// Business End Logic
function numConverter(inputOne) {
  var

// user interface logic
$(document).ready(function() {
  $("form#romanNumeralForm").submit(function(event) {
    event.preventDefault();

    var numberInput = parseInt($("input#romanNuneral").val());
    var numberOutput = numConverter(numberInput);
    var result = numConverter(numberInput);
    $(".converted").text(result);

    $("#result").show();
  });
});
