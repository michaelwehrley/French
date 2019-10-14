(function(app) {
  "use strict";

  var DEFAULT_TOPIC = "numbers";

  function currentTopic(selectedTopic) {
    return selectedTopic && selectedTopic.substr(1) || window.location.hash.substr(1) || DEFAULT_TOPIC;
  }

  function playTopic(selectedTopic) {
    app.getQuestion = app.TOPICS[currentTopic(selectedTopic)];
    app.play(app.getQuestion());
  }

  $(".nav-link").on("click", function(event) {
    event.preventDefault();
    var topic = event.currentTarget.getAttribute("href");

    playTopic(topic); // Currently acts like a "skip"
  });

 playTopic();
}(FrenchApp))
