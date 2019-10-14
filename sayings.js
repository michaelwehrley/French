(function(app) {
  "use strict";

  var SAYINGS = {
    "Ça marche!": ["It walks!", "It works!"],
  }

  app.randomSaying = function randomSaying() {
    return _.sample(_.keys(app.sayings));
  }

  app.SAYINGS = SAYINGS;
  app.TOPICS["sayings"] = app.randomSaying
}(FrenchApp));
