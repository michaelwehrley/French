(function(app) {
  "use strict";

  // Chapter 4
  var LESSON = {
    "Do you like the cinema? (formal)": ["Est-ce que vous aimez le cinéma?"],
    "Do you like sports? (informal)": ["Est-ce que tu aime le sport?"],
    "Do you like literature? (formal)": ["Est-ce que vous aimez la littérature?"],
    "Do you like classical music? (informal)": ["Est-ce que tu aime la musique classique?"],
    "Yes, I like it, especially the French cinema, but I also like the Japanese cinema.":
      ["Oui, j'aime bien ça, surtout le cinéma français, mais j'aime aussi le cinéma japonais."],
    "No, I do not like it; I prefer the theater.": ["Non, je n'aime pas ça; je préfère le théâtre."]
  };

  // Chapter 6
  var LESSON = {
    "Do you have a car, Mr. Legrand?": ["Est-ce que vous avez une voiture, Monsieur Legrand?"],
    "No, I don't have a car.": ["Non, je n'ai pas de voiture.", "avoir/j'ai"],
    "You don't have a car? (formal)": ["Vous n'avez pas de voiture?"],
    // "No, I am generally pleased, but it's not practical. By cons, I have a motorcycle.":
    //   ["Non. J'aimerias bien, mais ce n'est pas pratique. Par contre, j'ai une moto."],
    "What would you like for Christmas? (informal)": ["Qu'est-ce que tu voudrais pour Noël?"],
    "What is France's favorite animal?": ["Quel est l'animal préféré?"],
    "I do not know.": ["Je ne sais pas."],
    "I would like a computer.": ["Je voudrais un ordinateur."]
  };

  app.randomLesson = function randomLesson() {
    return _.sample(_.keys(LESSON));
  }

  app.TOPICS["lessons-1"] = {
    questions: LESSON,
    getFn: app.randomLesson
  }
}(FrenchApp));
