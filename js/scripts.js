//Back-end (business) logic

//Front-end (User-Interface) logic
$(document).ready(function() {
  $("form#trackSuggest").submit(function(event){

    var name =$("input#inputName").val();

    var q1 = $("#question1").val();
    $("#question1").change(function(){
    });
    var q2 = $("#question2").val();
    $("#question2").change(function(){
    });
    var q3 = $("#question3").val();
    $("#question3").change(function(){
    });
    var q4 = $("#question4").val();
    $("#question4").change(function(){
    });
    var q5 = $("#question5").val();
    $("#question5 ").change(function(){
    });

    var trackTitle;
    var trackImg;

    if ( q1 === "independent" ) {
      if ( q2 === "back" ||"front" ) {
        if ( q3 === "function" || "look" ) {
          if ( q4 ===  "yes" || "no" ) {
            if ( q5 === "small" || "large" ) {
              trackTitle="Ruby/Rails";
              trackImg="img/rubyRails.png";
            }
          }
        }
      }
    }
      else if (q1 === "team") {
        if (q2 === "back" || "front") {
          if (q3 === "function" || "look") {
            if (q4 === "yes" || "no") {
              if (q5 === "small" || "large") {
                trackTitle="C#";
                trackImg="img/csharp.png";
              }
            }
          }
        }
      }
      if ( q1 === "team" || "independent"){
        if ( q2 === "front"){
          if (q3 === "function" || "look"){
            if (q4 === "yes" || "no"){
              if (q4 === "large" || "small"){
                trackTitle="CSS/Design"
                trackImg="img/cssDesign.png"
              }
            }
          }
        }
      }

      $(".output").show();
      $(".nameInput").text(name);
      $("#output img").attr("src", trackImg)
      $("#output .card-body").html("<h5>"+trackTitle+"</h5>")
      event.preventDefault();
    });
  });
