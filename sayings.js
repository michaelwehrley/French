(function(app) {
  "use strict";

  // interrogative adjectives:
  // An adjective is a word that modifies a noun,
  // and interrogative means questioning,
  // so interrogative adjectives are
  // adjectives used to ask the questions
  // "what," "which," and how "much/many."
  var SAYINGS = {
    // Other
    "It works!": [
      "Ça marche!",
      "Ça => It; marche => marcher/'to walk'"
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
    ],
    "In the morning I get up.": [
      "Le matin je me lève.",
      "Le matin => the morning; lève => se lèver/'get up'"
    ],
    "That's life!": [
      "C'est la vie!",
      "c'est => ce + est [it]/il est [gender of noun]/ce sont [plural noun] => être/'to be'"
    ],
    // Chapter 0
    "Hello, my name is Michel.": [
      "Bonjour, je m'appelle Michel.",
      "je m'appelle => s'appeler/'to be called'"
    ],
    "Nice to meet you Nicolas. Nice to meet you Céline.": [
      "Enchantée Nicolas. Enchanté Céline.",
      "Enchantée (feminine) v. Enchanté (masculine)"
    ],
    "How are you Julien? Very good, How are you doing Céline? I'm okay.": [
      "Comment allez-vous Julien? Très bien, et vous Céline, ça va? Ça va.",
      "va => aller/'to go'"
    ],
    "I do not know.": [
      "Je ne sais pas.",
      "je sais => savoir/'to know'; to negate: ...ne ___ pas..."
    ],
    "Sorry, how do you spell Leroy?": [
      "Pardon, ça s'écrit comment Leroy?",
      "ça => it; écrire => to write/'to write'"
    ],
    "Could you please repeat that?": [
      "Vous pouvez répéter, s'il vous plaît?",
      "pouvoir/'to be able [to do something]'; répéter/'to repeat'"
    ],
    "Excuse me, how do you say 'welcome' in French?": [
      "Excusez-moi, comment dit-on 'welcome' en français?",
      "dit-on => 'they say'; dire/'to say'"
    ],
    // Chapter 1
    "Good evening Ma'am. Good evening Sir.": [
      "Bonsoir Madame. Bonsoir Monsieur."
    ],
    "Me, I'm Isabelle, nice to meet you.": [
      "Moi, c'est Isabelle, enchantée",
      "c'est => ce + est [it]/il est [gender of noun]/ce sont [plural noun] => être/'to be'"
    ],
    "My name is Jean. And what's your name?": [
      "Je m'appelle Jean. Et vous, comment vous appelez-vous?",
      "Et => And; vous => you; Je m'appelle & vous appelez-vous => s'appeler/'to be called'"
    ],
    // Chapter 2
    "What is the profession of Nicolas?": [
      "Quelle est la profession de Nicolas?",
      "Quelle => la profession; est => être/'to be'"
    ],
    "What is her nationality?": [
      "Quelle est sa nationalité?",
      "Quelle => une nationalité; sa => her; est => être/'to be'"
    ],
    "Who works in a restaurant?": [
      "Qui travaille dans un restaurant?",
      "Qui => Who; travaille => travailler/'to work'; un [masculine] restaurant => a restaurant"
    ],
    // Chapter 3
    "Say, do you have a cell phone number?": [
      "Dis, tu as un numéro de portable?",
      "tu as => avoir/'to have'; un numéro de portable"
    ],
    "I have a landline, but I do not have a cell phone.": [
      "J'ai un téléphone fixe, mais je n'ai pas de téléphone portable.",
      "J'ai/ je n'ai pas => avoir/'to have'; téléphone portable"
    ],
    "What is it that Nicolas wants?": [
      "Qu'est-ce que Nicolas voudrait?",
      "qu'est-ce que => non-interrogative adjective for 'what'; voudrait => vouloir/'to want'"
    ],
    "What is his telephone number?": [
      "Quel est son numéro de téléphone?",
      "Quel => un numéro; son => his; est => être/'to be'"
    ],
    "I live in Paris.": [
      "J'habite à Paris.",
      "J'habite => habiter/'I live'; à => in"
    ],
    "I live at six Quai Saint-Michel, Paris, France.": [
      "J'habite au six Quai Saint-Michel, à Paris, en France.",
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
    "What is Sophia's phone number?": [
      "Quel est le numéro de téléphone de Sophia?",
      "Quel => What [masculine], est => être/'to be'; le => the [masculine article]"
    ],
    "What is Romain's email address?": [
      "Quelle est l'adresse e-mail de Romain?",
      "Quelle => What [feminine], est => être/'to be'; la => the [feminine article]"
    ],
    "And what is his email address?": [
      "Et quelle est son adresse e-mail?",
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
    // Chapter 4
    "You like this?": [
      "Tu aimes ça?",
      "Tu aimes => Aimer/'to ❤️/to like'; ça => this/that"
    ],
    "Yes, I like that.": [
      "Oui, j'aime ça.",
      "j'aime => Aimer/'to ❤️/to like'; ça => this/that"
    ],
    "I like movies.": [
      "J'aime bien les films.",
      "J'aime => Aimer/'to ❤️/to like'"
    ],
    "Do you like cinema?": [
      "Tu aimes bien le cinéma?",
      "Tu aimes => Aimer/'to ❤️/to like'; aimes bien (+)"
    ],
    "Yes, I like most French movies.": [
      "Oui, j'aime surtout les films français.",
      "Tu aimes => Aimer/'to ❤️/to like'; aimes bien (+); surtout => mostly"
    ],
    "My wife and I, we love sports, like football.": [
      "Ma femme et moi, nous aimons beaucoup le sport, comme le football.",
      "nous aimons => Aimer/'to ❤️' => we love; comme => like"
    ],
    "I hate swimming.": [
      "Je déteste la natation.",
      "déteste => détester/'to hate'; la natation => swimming"
    ],
    "Which sport is it that you like?": [
      "Quel sport est-ce que tu aimes?",
      "est-ce que => is it that; tu aimes => Aimer/'to ❤️'"
    ],
    "I love to surf.": [
      "J'aime beaucoup le surf",
      "J'aime => Aimer/'to ❤️'; J'aime beaucoup (++)"
    ],
    "How many TV channels are there on the Box?": [
      "Il y a combien de chaînes de télévision sur la Box?",
      "Il y => there is; a => avoir/'to have'; combien de => how many ['de' when counting]"
    ],
    "Who really loves movies?": [
      "Qui aime beaucoup les films?",
      "qui => who; aime beaucoup => Aimer/'to ❤️/to like' (++);"
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
