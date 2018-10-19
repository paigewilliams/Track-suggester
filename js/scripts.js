//Back-end (business) logic

//Front-end (User-Interface) logic
$(document).ready(function() {
  $("form#trackSuggest").submit(function(event){

    var q1;
    var q2;
    var q3;
    var q4;
    var q5;
    var trackTitle;
    var trackImg;

    if ( q1 === "independent" ){
      if ( q2 === "back" ) {
        if ( q3 === "function" ) {
          if ( q4 ===  "yes" ) {
            if ( q5 === "small"){
              trackTitle="Ruby/Rails"
              trackImg="img/rubyRails.png"

            }
          }
        }
      }
    } else if ( q1 === "team" ){
      if (q2 === "back") {
        if (q3 === "function") {
          if (q4 === "yes"){
            if ( q5 === "small"){
              trackTitle="Ruby/Rails"
              trackImg="img/rubyRails.png"
            }
          }
        }
      }
    }
    $

    event.preventDefault();
  })

});
    // $("#quetion1").change(function(){
    //   q1 = $("#question1").val();
    //   ("#question2").show();
    //   console.log()
    // })
    // $("#quetion2").change(function(){
    //   q1 = $("#question2").val();
    //   ("#question3").show();
    // })
    // $("#quetion3").change(function(){
    //   q1 = $("#question3").val();
    //   ("#question4").show();
    // })
    // $("#quetion4").change(function(){
    //   q1 = $("#question4").val();
    //   ("#question5").show();

    // $("#inputName").change(function(){
    //   $("#inputName").removeClass("alert-danger");
    //   console.log()
    // });
