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
