(function(app) {
  "use strict";

  var number = _.sample(_.keys(app.numbers));
  $("#question").html(number);
  $("form#check-number").on("submit", function(event) {
    event.preventDefault();

    var submittedAnswer = $(event.currentTarget).find("#number").val();
    var answers = app.numbers[Number(number)];

    if (submittedAnswer === answers[0]) {
      $(".alert.alert-success").removeClass("d-none");
      $(".alert.alert-danger").addClass("d-none");
      $("a#continue").removeClass("d-none");
      $("button#submit").addClass("d-none");
      $("a#skip").addClass("d-none");
      $("#success-help-block").html(answers[0] + (answers[1] ? (" (" + answers[1] + ")") : ""));
    } else {
      $(".alert.alert-success").addClass("d-none");
      $(".alert.alert-danger").removeClass("d-none");
      $("#danger-help-block").html(answers[0] + (answers[1] ? (" (" + answers[1] + ")") : ""));
    }
  })
}(FrenchApp));
