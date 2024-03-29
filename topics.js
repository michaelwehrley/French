(function(app) {
  "use strict";

  var DEFAULT_TOPIC = "numbers";

  function currentTopic(selectedTopic) {
    return selectedTopic && selectedTopic.substr(1) || window.location.hash.substr(1) || DEFAULT_TOPIC;
  }

  // Not happy with this setup...
  function playTopic(selectedTopic) {
    var topicInfo = app.TOPICS[currentTopic(selectedTopic)];

    app.topicQuestions = function() {
      return topicInfo.questions;
    };
    app.getQuestion = topicInfo.getFn;
    app.play(app.getQuestion());
  }

  $(".nav-link, .dropdown-item").on("click", function(event) {
    event.preventDefault();
    var topic = event.currentTarget.getAttribute("href");

    playTopic(topic); // Currently acts like a "skip"
  });

  playTopic(); //
}(FrenchApp))
