function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

numbers = []

$(document).ready(function() {
  $("form#input").submit(function(event){
    event.preventDefault();
    const start = 0
    const end =  parseInt($("#number").val());
    let result = range(start, end);
    let result1 = result.toString();
    for (i = 0; i < result1.length; i++) {
    if (result1[i].includes("3")){
      numbers[i] = "Won't you be my neighbor?";
    } else if  (result1[i].includes("2")) {
      numbers[i] = "boop";
    } else if (result1[i].includes("1")) {
      numbers[i] = "beep"
    } else {
      numbers[i] = result1[i];
    }}
    // for (i = 0; i < result.length; i++)
    // if (result[i] == 2)
    // result[i] = "boop"
    // for (i = 0; i < result.length; i++)
    // if (result[i] == 1)
    // result[i] = "beep"
    // numbers.push(result1)

    
    $("input#number").val("");
    $("#display").text(numbers);
    $("#display").show();
  });
});