//Back-end (business) logic

//Front-end (User-Interface) logic
$(document).ready(function() {
  $("form#trackSuggest").submit(function(event){
    event.preventDefault();

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
    }
    $(".output").show();
    $("#output img").attr("src", trackImg)
    $("#output .card-body").html("<h5>"+trackTitle+"</h5>")
  });
});





  // $("#question1").change(function(){
  //   q1 = $("#question1").val();
  //   console.log("hi");

  //   $("#question2").change(function(){
  //     q2 = $("#question2").val();
  //     console.log("hii");
  //   })
  //   $("#question3").change(function(){
  //     q3 = $("#question3").val();
  //     console.log("hiiii");
  //   })
  //   $("#question4").change(function(){
  //     q4 = $("#question4").val();
  //     console.log("hiiiii");
  //   })
  //   $("#question5").change(function(){
  //     q5 = $("#question5").val();
  //     console.log("hiiiiioooo");
  //   })
  //   console.log("what")
  // });
// });

  //
  //   var trackTitle;
  //   var trackImg;
  //

  //
  //
  //   if ( q1 === "independent" ){
  //     if ( q2 === "back" ) {
  //       if ( q3 === "function" ) {
  //         if ( q4 ===  "yes" ) {
  //           if ( q5 === "small"){
  //             trackTitle="Ruby/Rails"
  //             trackImg="img/rubyRails.png"
  //
  //           }
  //         }
  //       }
  //     }
  //   } else if ( q1 === "team" ){
  //     if (q2 === "back") {
  //       if (q3 === "function") {
  //         if (q4 === "yes"){
  //           if ( q5 === "small"){
  //             trackTitle="Ruby/Rails"
  //             trackImg="img/rubyRails.png"
  //           }
  //         }
  //       }
  //     }
  //   }

  //   $("#output").show();
  //

  // })

// });
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
