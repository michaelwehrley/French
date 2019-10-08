(function(app) {
  "use strict";

  var number = _.sample(_.keys(app.numbers));
  $("#question").html(number);
  disableAutoComplete();

  $("form#check-number").on("submit", function(event) {
    event.preventDefault();

    var submittedAnswer = $(event.currentTarget).find("#number").val();
    var answers = app.numbers[Number(number)];

    if (submittedAnswer === answers[0]) {
      $(".alert.alert-success").removeClass("d-none");
      $("a#continue").removeClass("d-none");
      $(".alert.alert-danger").addClass("d-none");
      $("button#submit").addClass("d-none");
      $("a#skip").addClass("d-none");
      $("#success-help-block").html(helpText(answers));
    } else {
      $(".alert.alert-success").addClass("d-none");
      $(".alert.alert-danger").removeClass("d-none");
      $("#danger-help-block").html(helpText(answers));
    }
  });

  function disableAutoComplete() {
    document.getElementById("number").setAttribute("name", Math.random());
  }

  function helpText(answers) {
    return (answers[0] + (answers[1] ? (" (" + answers[1] + ")") : ""));
  }
}(FrenchApp));
