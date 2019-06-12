// $(document).ready(function(){
//   $("form#transportation_survey").submit(function(event){
//     event.preventDefault();
//     $("#work-responses").show();
//     $("input:checkbox[name=work-transportation]:checked").each(function(){
//       var workTransportationMode = $(this).val();
//       $('#work-responses').append(workTransportationMode + "<br>");
//     });
//     $("#fun-responses").show();
//     $("input:checkbox[name=fun-transportation]:checked").each(function(){
//       var funTransportationMode = $(this).val();
//       $('#fun-responses').append(funTransportationMode + "<br>");
//     });
//     $('#transportation_survey').hide();
//   });
// });


$(document).ready(function(){
  $("form#q1").submit(function(event){
    event.preventDefault();
    $("#bad-response").show();
    var userResponsesForQ1 = [];
  $("input:checkbox[name=q1]:checked").each(function(){
      var highRisk = $(this).val();
      userResponsesForQ1.push(highRisk);
    });
    $("#good-response").show();

    var userResponsesForQ2 = [];
    $("input:checkbox[name=q2]:checked").each(function(){
      var healthy = $(this).val();
      userResponsesForQ2.push(healthy);
    });
    if (userResponsesForQ1.length === userResponsesForQ2.length) {
      $("#med-response").show();
      $("#good-response").hide();
      $("#bad-response").hide();
    } else if (userResponsesForQ2.length >=3) {
      $("#good-response").show();
      $("med-response").hide();
      $("#bad-response").hide();
    } else if (userResponsesForQ1.length >= 3) {
      $("#bad-response").show();
      $("#med-response").hide();
      $("#good-response").hide();
    }

    alert(userResponsesForQ1);
    alert(userResponsesForQ2);
    // $('#transportation_survey').hide();
  });
});







// var fact = (number * (number-1);


function fact(number) {
  if (number ===0) {
      return 1;
  }
    return number*fact(number -1);

}
mult(5) => 5 + mult(4)


//prime number
var array = [];
var prime = 2;
var end = 100;

for(var index = 0, num = prime; num<=end; index++){
	array[index] = num;
  num++;
}



for(var idx = 1; idx<array.length;idx++){
  	for(var index = idx; index<=array.length; index++){
      if(array[index]%prime==0){
         array.splice(index,1);
      }
    }
  
  prime++;
}
console.log(array);
