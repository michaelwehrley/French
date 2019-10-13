(function(app) {
  "use strict";

  var sayings = {
    "Ça marche!": ["It walks!", "It works!"],
  }

  app.randomSaying = function randomSaying() {
    return _.sample(_.keys(app.sayings));
  }
  app.sayings = sayings;
}(FrenchApp));
