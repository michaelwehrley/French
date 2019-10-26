(function(app) {
  "use strict";

  var SAYINGS = {
    "It works!": [
      "Ça marche!",
      "Ça => It; marche => marcher;"
    ],
    "Say, do you have a mobile number?": [
      "Dis, tu as un numéro de portable?",
      "tu as => avoir/'to have'; un numéro de portable"
    ],
    "I have a landline, but I do not have a cell phone": [
      "J'ai un téléphone fixe, mais je n'ai pas de téléphone portable.",
      "J'ai/ je n'ai pas => avoir/'to have'; téléphone portable"
    ],
    // interrogative adjectives:
    // An adjective is a word that modifies a noun,
    // and interrogative means questioning,
    // so interrogative adjectives are
    // adjectives used to ask the questions
    // "what," "which," and how "much/many." 
    "What is the profession of Nicolas Gautier": [
      "Quelle est la profession de Nicolas Gautier",
      "Quelle => la profession; est => être/'to be'"
    ],
    "What is it that Nicolas wants?": [
      "Qu'est-ce que Nicolas voudrait?",
      "qu'est-ce que => non-interrogative adjective for 'what'; voudrait => vouloir/'to want'"
    ],
    "What is her nationality?": [
      "Quelle est sa nationalité?",
      "Quelle => une nationalité; sa => her; est => être/'to be'"
    ],
    "What is his telephone number?": [
      "Quel est son numéro de téléphone?",
      "Quel => un numéro; son => his; est => être/'to be'"
    ]
  };

  app.randomSaying = function randomSaying() {
    return _.sample(_.keys(SAYINGS));
  }

  app.TOPICS["sayings"] = {
    questions: SAYINGS,
    getFn: app.randomSaying
  }
}(FrenchApp));
