(function(app) {
  "use strict";

  var DEFAULT_CATEGORY = "numbers";
  var CATEGORIES = {
    counting: app.count,
    numbers: app.randomNumber
  }

  function currentTopic() {
    return window.location.hash.substr(1) || DEFAULT_CATEGORY;
  }

  app.CATEGORIES = CATEGORIES;
  app.question = CATEGORIES[currentTopic()]
  app.play(app.question());
}(FrenchApp))
