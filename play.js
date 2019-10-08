(function(app) {
  "use strict";

  var number = _.sample(_.keys(app.numbers));
  $("#number").html(number);
}(FrenchApp));
