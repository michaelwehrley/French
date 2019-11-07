(function(app) {
  "use strict";

  var LESSON = {
    "Do you like the cinema? (formal)": ["Est-ce que vous aimez le cinéma?"],
    "Do you like sports? (informal)": ["Est-ce que tu aime le sport?"],
    "Do you like literature? (formal)": ["Est-ce que vous aimez la littérature?"],
    "Do you like classical music? (informal)": ["Est-ce que tu aime la musique classique?"],
    "Yes, I like it, especially the French cinema, but I also like the Japanese cinema.":
      ["Oui, j'aime bien ça, surtout le cinéma français, mais j'aime aussi le cinéma japonais."],
    "No I do not like it; I prefer the theater.": ["Non, je n'aime pas ça; je préfère le théâtre."]
  };

  app.randomLesson = function randomLesson() {
    return _.sample(_.keys(LESSON));
  }

  app.TOPICS["lessons"] = {
    questions: LESSON,
    getFn: app.randomLesson
  }
}(FrenchApp));
