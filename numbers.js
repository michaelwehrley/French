(function(app) {
  "use strict";

  var NUMBERS = {
    "0": ["zéro", "zeRo"],
    "1": ["un", "ahn"],
    "2": ["deux", "duhr"],
    "3": ["trois", "twah"],
    "4": ["quatre", "katr"],
    "5": ["cinq", "sank"],
    "6": ["six", "seese"],
    "7": ["sept", "set"],
    "8": ["huit", "wheet"],
    "9": ["neuf", "nurf"],

    "10": ["dix", "deese"],
    "11": ["onze", "onz"],
    "12": ["douze", "dooz"],
    "13": ["treize", "trez"],
    "14": ["quatorze", "kah-tohrz"],
    "15": ["quinze", "cans"],
    "16": ["seize", "sez"],
    "17": ["dix-sept", "deese-set"],
    "18": ["dix-huit", "dees-wheet"],
    "19": ["dix-neuf", "dees-nurf"],

    "20": ["vingt", "vahn"],
    "21": ["vingt et un", "vahn-tay-ahn"],
    "22": ["vingt-deux", "vahn-duhr"],
    "23": ["vingt-trois", "vahn-twah"],
    "24": ["vingt-quatre", "vahn-katr"],
    "25": ["vingt-cinq", "vahn-sank"],
    "26": ["vingt-six", "vahn-seese"],
    "27": ["vingt-sept", "vahn-set"],
    "28": ["vingt-huit", "vahn-wheet"],
    "29": ["vingt-neuf", "vahn-nurf"],

    "30": ["trente", "trawnt"],
    "31": ["trente et un", "trawnt-tay-ahn"],
    "32": ["trente-deux", "trawnt-duhr"],
    "33": ["trente-trois", "trawnt-twah"],
    "34": ["trente-quatre", "trawnt-katr"],
    "35": ["trente-cinq", "trawnt-sank"],
    "36": ["trente-six", "trawnt-seese"],
    "37": ["trente-sept", "trawnt-set"],
    "38": ["trente-huit", "trawnt-wheet"],
    "39": ["trente-neuf", "trawnt-nurf"],

    "40": ["quarante", "kuh-rawnt"],
    "41": ["quarante et un", "kuh-rawnt-tay-ahn"],
    "42": ["quarante-deux", "kuh-rawnt-duhr"],
    "43": ["quarante-trois", "kuh-rawnt-twah"],
    "44": ["quarante-quatre", "kuh-rawnt-katr"],
    "45": ["quarante-cinq", "kuh-rawnt-sank"],
    "46": ["quarante-six", "kuh-rawnt-seese"],
    "47": ["quarante-sept", "kuh-rawnt-set"],
    "48": ["quarante-huit", "kuh-rawnt-wheet"],
    "49": ["quarante-neuf", "kuh-rawnt-nurf"],

    "50": ["cinquante", "sank-awnt"],
    "51": ["cinquante et un", "sank-awnt-tay-ahn"],
    "52": ["cinquante-deux", "sank-awnt-duhr"],
    "53": ["cinquante-trois", "sank-awnt-twah"],
    "54": ["cinquante-quatre", "sank-awnt-katr"],
    "55": ["cinquante-cinq", "sank-awnt-sank"],
    "56": ["cinquante-six", "sank-awnt-seese"],
    "57": ["cinquante-sept", "sank-awnt-set"],
    "58": ["cinquante-huit", "sank-awnt-wheet"],
    "59": ["cinquante-neuf", "sank-awnt-nurf"],

    "60": ["soixante", "swah-sawnt"],
    "61": ["soixante et un", "swah-sawnt-tay-ahn"],
    "62": ["soixante-deux", "swah-sawnt-duhr"],
    "63": ["soixante-trois", "swah-sawnt-twah"],
    "64": ["soixante-quatre", "swah-sawnt-katr"],
    "65": ["soixante-cinq", "swah-sawnt-sank"],
    "66": ["soixante-six", "swah-sawnt-seese"],
    "67": ["soixante-sept", "swah-sawnt-set"],
    "68": ["soixante-huit", "swah-sawnt-wheet"],
    "69": ["soixante-neuf", "swah-sawnt-nurf"],

    "70": ["soixante-dix", "swah-sawnt-deese"],
    "71": ["soixante et onze", "swah-sawnt-tay-uhn"],
    "72": ["soixante-douze", "swah-sawnt-dooz"],
    "73": ["soixante-treize", "swah-sawnt-trez"],
    "74": ["soixante-quatorze", "swah-sawnt-kah-tohrz"],
    "75": ["soixante-quinze", "swah-sawnt-cans"],
    "76": ["soixante-seize", "swah-sawnt-sez"],
    "77": ["soixante-dix-sept", "swah-sawnt-deese-set"],
    "78": ["soixante-dix-huit", "swah-sawnt-dees-wheet"],
    "79": ["soixante-dix-neuf", "swah-sawnt-dees-nurf"],

    "80": ["quatre-vingts", "ka-truh-vahn"],
    "81": ["quatre-vingt-un", "ka-truh-vahn-tay-ahn"],
    "82": ["quatre-vingt-deux", "ka-truh-vahn-duhr"],
    "83": ["quatre-vingt-trois", "ka-truh-vahn-twah"],
    "84": ["quatre-vingt-quatre", "ka-truh-vahn-katr"],
    "85": ["quatre-vingt-cinq", "ka-truh-vahn-sank"],
    "86": ["quatre-vingt-six", "ka-truh-vahn-seese"],
    "87": ["quatre-vingt-sept", "ka-truh-vahn-set"],
    "88": ["quatre-vingt-huit", "ka-truh-vahn-wheet"],
    "89": ["quatre-vingt-neuf", "ka-truh-vahn-nurf"],

    "90": ["quatre-vingt-dix", "ka-truh-vahn-deese"],
    "91": ["quatre-vingt-onze", "ka-truh-vahn-onz"],
    "92": ["quatre-vingt-douze", "ka-truh-vahn-dooz"],
    "93": ["quatre-vingt-treize", "ka-truh-vahn-trez"],
    "94": ["quatre-vingt-quatorze", "ka-truh-vahn-kah-tohrz"],
    "95": ["quatre-vingt-quinze", "ka-truh-vahn-cans"],
    "96": ["quatre-vingt-seize", "ka-truh-vahn-sez"],
    "97": ["quatre-vingt-dix-sept", "ka-truh-vahn-deese-set"],
    "98": ["quatre-vingt-dix-huit", "ka-truh-vahn-dees-wheet"],
    "99": ["quatre-vingt-dix-neuf", "ka-truh-vahn-dees-nurf"],

    "100": ["cent", "sawnt"],
    "101": ["cent un"],
    "102": ["cent deux"],
    "103": ["cent trois"],
    "104": ["cent quatre"],
    "105": ["cent cinq"],
    "106": ["cent six"],
    "107": ["cent sept"],
    "108": ["cent huit"],
    "109": ["cent neuf"],

    "110": ["cent dix"],
    "111": ["cent onze"],
    "175": ["cent soixante quinze"],
    "200": ["deux cents"],
    "225": ["deux cents vingt-cinq"],

    "1000": ["mille"],
    "2000": ["deux mille"],
    "3010": ["trois mille dix"],

    "10000": ["dix mille"],
    "100000": ["cent mille"],
    "1000000": ["un million"]
  }

  var countingArray = _.keys(NUMBERS).reverse();

  app.randomNumber = function randomNumber() {
    return _.sample(_.keys(NUMBERS));
  }

  app.count = function count() {
    return countingArray.pop();
  }

  app.TOPICS["counting"] = {
    questions: NUMBERS,
    getFn: app.count
  }
  app.TOPICS["numbers"] = {
    questions: NUMBERS,
    getFn: app.randomNumber
  }
}(FrenchApp));
