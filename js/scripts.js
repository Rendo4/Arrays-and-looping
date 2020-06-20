function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

numbers = []

$(document).ready(function() {
  $("form#input").submit(function(event){
    event.preventDefault()
    const start = 0
    const end =  parseInt($("#number").val());
    let result = range(start, end)
    for (i = 0; i < result.length; i++)
    if (result[i] == 3)
    result[i] = "Won't you be my neighbor?"
    for (i = 0; i < result.length; i++)
    if (result[i] == 2)
    result[i] = "boop"
    for (i = 0; i < result.length; i++)
    if (result[i] == 1)
    result[i] = "beep"
    numbers.push(result)

    
    $("input#number").val("");
    $("#display").text(numbers);
    $("#display").show();
  })
})

// function range(start, end) {
//   for (var i = start; i <= end; i += 1) 
// }