(function(app) {
  "use strict";

  var DEFAULT_CATEGORY = "numbers";

  function currentTopic(selectedTopic) {
    return selectedTopic && selectedTopic.substr(1) || window.location.hash.substr(1) || DEFAULT_CATEGORY;
  }

  function playTopic(selectedTopic) {
    app.getQuestion = app.CATEGORIES[currentTopic(selectedTopic)];
    app.play(app.getQuestion());
  }

  $(".nav-link").on("click", function(event) {
    event.preventDefault();
    var selectedTopic = event.currentTarget.getAttribute("href");

    playTopic(selectedTopic); // Currently acts like a "skip"
  });

  playTopic();
}(FrenchApp))
