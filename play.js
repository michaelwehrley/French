(function(app) {
  "use strict";

  function answerText(answers) {
    return (answers[0] + (answers[1] ? (" (" + answers[1] + ")") : ""));
  }

  function clearAnswer() {
    $("#answer").val("");
  }

  function disableAutoComplete() {
    $("#answer").prop("name", Math.random());
  }

  function displayQuestion(currentQuestion, answers) {
    $("#question").html(currentQuestion);
  }

  function isCorrect(answers) {
    return $("#answer").val().trim().toLowerCase() === answers[0].toLowerCase();
  }

  function play(currentQuestion) {
    var answers = app.topicQuestions()[currentQuestion];

    displayQuestion(currentQuestion, answers);
    clearAnswer();
    disableAutoComplete();
    $("#answer").focus();
    skipQuestion();

    $("form#submit-answer").off("submit").on("submit", function(event) {
      event.preventDefault();
      $(".help-block").html(answerText(answers));

      if (isCorrect(answers)) {
        $(".alert-danger").addClass("d-none");
        $("button#submit").addClass("d-none");
        $(".alert-success").removeClass("d-none");
        $("a#next").removeClass("d-none").focus();
        nextQuestion();
      } else {
        $(".alert-danger").removeClass("d-none");
        $(".alert-success").addClass("d-none");
      }
    });
  }

  function nextQuestion() {
    $("a#next").off("click").on("click", function(event) {
      event.preventDefault();

      reset();
      play(app.getQuestion());
    });
  }

  function reset() {
    $("a#next").addClass("d-none");
    $("button#submit").removeClass("d-none");
    $(".alert-success").addClass("d-none");
    $(".alert-danger").addClass("d-none");
  }

  function skipQuestion() {
    $("a#skip").off("click").on("click", function(event) {
      event.preventDefault();

      reset();
      play(app.getQuestion());
    });
  }

  app.play = play;
}(FrenchApp));
