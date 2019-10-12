(function(app) {
  "use strict";

  var number = _.sample(_.keys(app.numbers));
  $("#question").html(number);
  disableAutoComplete();

  $("form#submit-number").on("submit", function(event) {
    event.preventDefault();

    var submittedAnswer = $(event.currentTarget).find("#number").val();
    var answers = app.numbers[Number(number)];

    if (submittedAnswer.toLowerCase() === answers[0].toLowerCase()) {
      $(".alert.alert-success, a#continue").removeClass("d-none");
      $(".alert.alert-danger, button#submit, a#skip").addClass("d-none");
    } else {
      $(".alert.alert-success").addClass("d-none");
      $(".alert.alert-danger").removeClass("d-none");
      disableAutoComplete();
    }
    $(".help-block").html(helpText(answers));
  });

  function disableAutoComplete() {
    document.getElementById("number").setAttribute("name", Math.random());
  }

  function helpText(answers) {
    return (answers[0] + (answers[1] ? (" (" + answers[1] + ")") : ""));
  }
}(FrenchApp));
