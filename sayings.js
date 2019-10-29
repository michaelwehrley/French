(function(app) {
  "use strict";

  var SAYINGS = {
    "It works!": [
      "Ça marche!",
      "Ça => It; marche => marcher/'to walk'"
    ],
    "Say, do you have a mobile number?": [
      "Dis, tu as un numéro de portable?",
      "tu as => avoir/'to have'; un numéro de portable"
    ],
    "I have a landline, but I do not have a cell phone.": [
      "J'ai un téléphone fixe, mais je n'ai pas de téléphone portable.",
      "J'ai/ je n'ai pas => avoir/'to have'; téléphone portable"
    ],
    // interrogative adjectives:
    // An adjective is a word that modifies a noun,
    // and interrogative means questioning,
    // so interrogative adjectives are
    // adjectives used to ask the questions
    // "what," "which," and how "much/many." 
    "What is the profession of Nicolas Gautier?": [
      "Quelle est la profession de Nicolas Gautier?",
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
    ],
    "I live in Paris.": [
      "J'habite à Paris.",
      "J'habite => habiter/'I live'; à => in"
    ],
    "I live at 6 Quai Saint-Michel, Paris, France.": [
      "J'habite au 6 quai Saint-Michel, à Paris, en France.",
      "J'habite => habiter/'I live';\
       à => preposition of location [à la mansion]\
       au => Je vais au camion (masculine/singular);\
       aux => Je vais aux bois (plural);\
       quai => riverbank;"
    ],
    "Who works in Paris?": [
      "Qui travaille à Paris?",
      "Qui => Who; travaille => travailler/'to work'; à preposition of location [à la mansion]"
    ],
    "Who works in a restaurant?": [
      "Qui travaille dans un restaurant?",
      "Qui => Who; travaille => travailler/'to work'; un [masculine] restaurant => a restaurant"
    ],
    "What is Sophia's phone number?": [
      "Quel est le numéro de téléphone de Sophia?",
      "Quel => What [masculine], est => être/'to be'; le => the [masculine article]"
    ],
    "What is Romain's email address?": [
      "Quelle est l'adresse e-mail de Romain?",
      "Quelle => What [feminine], est => être/'to be'; la => the [feminine article]"
    ],
    "And what is his email address?": [
      "Et quelle est son adresse e-mail",
      "Et => And; quelle => what [feminine]; est => être/'to be'; son => his; l'adresse e-mail => e-mail [female]"
    ],
    "Excuse me, do you have a business card?": [
      "Excusez-moi, avez vous une carte de visite?",
      "avez vous => avoir/'to have'; une carte => feminine"
    ],
    "I have a business card.": [
      "J'ai une carte de visite.",
      "J'ai => avoir/'to have'; une carte => feminine"
    ],
    "That is a cat.": [
      "C'est un chat.",
      "C'est => Ce + est => It is; Ce => *specific* that/this; est => être/'to be'; un chat [masculine]"
    ],
    "He is very handsome.": [
      "Il est très beau.",
      "Il => he; est => être/'to be'"
    ],
    "She is beautiful.": [
      "Elle est belle.",
      "Elle => she; est => être/'to be'"
    ],
    "Please.": [
      "S'il vous plaît.",
      "Plaire => 'to please'; Vous plaire/'to please' => to please you; s'il => si + il => if it; literally: if it pleases you."
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
