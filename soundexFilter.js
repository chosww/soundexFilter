const soundex = require("soundex");

const lib = {
  A: {
    [soundex("afternoon")]: "afternoon",
    [soundex("are")]: "are",
    [soundex("am")]: "am",
    [soundex("available")]: "available",
    [soundex("and")]: "and",
    [soundex("around")]: "around",
    [soundex("alright")]: "okay"
  },
  B: {
    [soundex("breakfast")]: "breakfast",
    [soundex("before")]: "before"
  },
  C: {
    [soundex("close")]: "close",
    [soundex("cool")]: "cool",
    [soundex("can")]: "can",
    [soundex("could")]: "could"
  },
  D: {
    [soundex("dinner")]: "dinner",
    [soundex("do")]: "do"
  },
  E: {
    [soundex("eat")]: "eat",
    [soundex("early")]: "early",
    [soundex("evening")]: "evening"
  },
  F: {
    [soundex("food")]: "food",
    [soundex("female")]: "female",
    [soundex("from")]: "from",
    [soundex("for")]: "for"
  },
  G: {
    [soundex("guy")]: "guy",
    [soundex("gay")]: "gay",
    [soundex("get")]: "get",
    [soundex("good")]: "good"
  },
  H: {
    [soundex("hello")]: "hello",
    [soundex("hi")]: "hi",
    [soundex("hey")]: "hey",
    [soundex("how")]: "how",
    [soundex("have")]: "have"
  },
  I: {
    [soundex("info")]: "information",
    [soundex("information")]: "information",
    [soundex("in")]: "in",
    [soundex("ight")]: "okay"
  },
  J: {
    [soundex("job")]: "job"
  },
  K: {
    [soundex("know")]: "know",
    [soundex("kool")]: "cool",
    [soundex("k")]: "okay"
  },
  L: {
    [soundex("look")]: "look",
    [soundex("like")]: "like",
    [soundex("let")]: "let",
    [soundex("live")]: "live",
    [soundex("long")]: "long"
  },
  M: {
    [soundex("meal")]: "meal",
    [soundex("more")]: "more",
    [soundex("meh")]: "no"
  },
  N: {
    [soundex("nope")]: "no",
    [soundex("no")]: "no",
    [soundex("nah")]: "no",
    [soundex("near")]: "near",
    [soundex("now")]: "now",
    [soundex("need")]: "need"
  },
  O: {
    [soundex("open")]: "open",
    [soundex("or")]: "or",
    [soundex("on")]: "on"
  },
  P: {
    [soundex("please")]: "please"
  },
  Q: {
    [soundex("quit")]: "quit",
    [soundex("quick")]: "quick"
  },
  R: {
    [soundex("really")]: "really",
    [soundex("real")]: "real",
    [soundex("right")]: "right"
  },
  S: {
    [soundex("so")]: "so",
    [soundex("soon")]: "soon",
    [soundex("see")]: "see",
    [soundex("sick")]: "sick",
    [soundex("sos")]: "help",
    [soundex("soz")]: "sorry",
    [soundex("sorry")]: "sorry",
    [soundex("sure")]: "yes"
  },
  T: {
    [soundex("tonight")]: "today",
    [soundex("tomorrow")]: "tomorrow",
    [soundex("today")]: "today",
    [soundex("take")]: "take",
    [soundex("thanks")]: "thank you",
    [soundex("thank")]: "thank you",
    [soundex("talk")]: "talk",
    [soundex("ttyl")]: "talk to you later",
    [soundex("there")]: "there"
  },
  U: {
    [soundex("use")]: "use",
    [soundex("ur")]: "your",
    [soundex("u")]: "you"
  },
  V: {
    [soundex("view")]: "view",
    [soundex("value")]: "value"
  },
  W: {
    [soundex("where")]: "where",
    [soundex("were")]: "where",
    [soundex("when")]: "when",
    [soundex("what")]: "what",
    [soundex("wanna")]: "want to"
  },
  X: {
    [soundex("x")]: "x"
  },
  Y: {
    [soundex("you")]: "you",
    [soundex("your")]: "your",
    [soundex("yet")]: "yet",
    [soundex("yeah")]: "yes",
    [soundex("ya")]: "yes",
    [soundex("yes")]: "yes"
  },
  Z: {
    [soundex("z")]: "z"
  }
};

exports.correctSentence = sentence => {
  const words = sentence.split(" ");
  let correctedSentence = "";
  for (var i = 0; i < words.length; i++) {
    correctedSentence +=
      libSearch(words[i], soundex(words[i]).charAt(0), soundex(words[i])) + " ";
  }
  return correctedSentence;
};

const libSearch = (word, firstChar, wordSoundex) => {
  switch (firstChar) {
    case "A":
      if (lib.A[wordSoundex] != null) return lib.A[wordSoundex];
      else return word;

    case "B":
      if (lib.B[wordSoundex] != null) return lib.B[wordSoundex];
      else return word;

    case "C":
      if (lib.A[wordSoundex] != null) return lib.B[wordSoundex];
      else return word;

    case "D":
      if (lib.D[wordSoundex] != null) return lib.D[wordSoundex];
      else return word;

    case "E":
      if (lib.E[wordSoundex] != null) return lib.E[wordSoundex];
      else return word;

    case "F":
      if (lib.F[wordSoundex] != null) return lib.F[wordSoundex];
      else return word;

    case "G":
      if (lib.G[wordSoundex] != null) return lib.G[wordSoundex];
      else return word;

    case "H":
      if (lib.H[wordSoundex] != null) return lib.H[wordSoundex];
      else return word;

    case "I":
      if (lib.I[wordSoundex] != null) return lib.I[wordSoundex];
      else return word;

    case "J":
      if (lib.J[wordSoundex] != null) return lib.J[wordSoundex];
      else return word;

    case "K":
      if (lib.K[wordSoundex] != null) return lib.K[wordSoundex];
      else return word;

    case "L":
      if (lib.L[wordSoundex] != null) return lib.L[wordSoundex];
      else return word;

    case "M":
      if (lib.M[wordSoundex] != null) return lib.M[wordSoundex];
      else return word;

    case "N":
      if (lib.N[wordSoundex] != null) return lib.N[wordSoundex];
      else return word;

    case "O":
      if (lib.O[wordSoundex] != null) return lib.O[wordSoundex];
      else return word;

    case "P":
      if (lib.P[wordSoundex] != null) return lib.P[wordSoundex];
      else return word;

    case "Q":
      if (lib.Q[wordSoundex] != null) return lib.Q[wordSoundex];
      else return word;

    case "R":
      if (lib.R[wordSoundex] != null) return lib.R[wordSoundex];
      else return word;

    case "S":
      if (lib.S[wordSoundex] != null) return lib.S[wordSoundex];
      else return word;

    case "T":
      if (lib.T[wordSoundex] != null) return lib.T[wordSoundex];
      else return word;

    case "U":
      if (lib.U[wordSoundex] != null) return lib.U[wordSoundex];
      else return word;

    case "V":
      if (lib.V[wordSoundex] != null) return lib.V[wordSoundex];
      else return word;

    case "W":
      if (lib.W[wordSoundex] != null) return lib.W[wordSoundex];
      else return word;

    case "X":
      if (lib.X[wordSoundex] != null) return lib.X[wordSoundex];
      else return word;

    case "Y":
      if (lib.Y[wordSoundex] != null) return lib.Y[wordSoundex];
      else return word;

    case "Z":
      if (lib.Z[wordSoundex] != null) return lib.Z[wordSoundex];
      else return word;

    default:
      return word;
  }
};
