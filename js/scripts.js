numbers = []

$(document).ready(function() {
  $("form#input").submit(function(event){
    event.preventDefault();
    const userInput =  parseInt($("#number").val());
    for (var i = 0; i <= userInput; i++){
    numbers[i] = i;
    }
    for (var i=0; i <= userInput; i++)
    if (numbers[i].toString().includes("3")){
      numbers[i] = "Won't you be my neighbor?";
    } else if  (numbers[i].toString().includes("2")) {
      numbers[i] = "boop";
    } else if (numbers[i].toString().includes("1")) {
      numbers[i] = "beep"
    } else {
      numbers[i] = numbers[i];
    }
    $("input#number").val("");
    $("#display").text(numbers);
    $("#display").show();
  });
});
