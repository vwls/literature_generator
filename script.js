const useInputNum = false;
const inputNum = "7.1.36.45";

const genre = ["science fiction", "whimsical", "maximalist", "conspiratorial", "revisionist history", "realist",  "postmodern", "post-postmodern", "post-irony", "coming-of-age", "absurdist", "paranormal romance", "romance-themed", "political thriller", "victorian period", "mystery-themed", "whodunnit", "psychological thriller", "erotic thriller", "smutty", "erotic", "young-adult-themed", "fantasy-themed", "magic realism", "historical fiction", "murder mystery", "revenge-focused", "dystopian"];
const adjective = ["slimeball", "fast-talking", "kidnapped", "withholding", "cruel", "dipsomaniacal", "retired", "dead", "psychopathic", "pandering", "sexually-repressed", "nosey", "pathetic", "lowly", "indecisive", "lonely", "alcoholic", "conflicted", "affluent", "contemptible", "devout", "scornful", "ardorous", "inept", "hideous", "thoughtless", "inept", "loyal", "misanthropic", "flighty", "doughy", "illiterate", "persistent", "misguided", "brilliant", "dementia-addled", "sentimental", "adorable", "reclusive", "dithering", "cautious", "incompetent", "deceitful", "manipulative", "big-hearted", "onanistic", "ornery", "homesick", "boisterous", "tormented", "polite", "sneaky", "self-conscious", "affable", "disturbed", "aloof", "curmudgeonly", "egotistical", "irksome", "sleazy", "lowly", "avant garde", "withdrawn", "courageous", "cowardly", "overly-empathic", "confused", "conflicted", "enterprising", "crabby", "cantakerous", "meddling", "paranoid", "delusional", "generous", "neurotic", "homicidal", "internally conflicted", "chronically depressed","socially withdrawn" , "curious", "out of time", "down-trodden", "optimistic", "pessimistic", "fresh-eyed", "short", "tall", "old", "ernest"];
const characterType = ["rug salesman", "cult figure", "murder victim", "patent clerk", "adulterer", "army colonel", "dock worker", "auctioneer", "thoracic surgeon", "door-to-door salesperson", "bodybuilder", "career diplomat", "contortionist", "daydreamer", "werewolf", "bullshitter", "old school company man", "career bureaucrat", "IRS agent", "dominatrix", "factory worker", "auto mechanic", "slumlord", "boarding school chef", "innkeeper", "ballet instructor", "strongman", "firefighter", "raft guide", "pawnshop owner", "laundromat attendant", "mountaineer", "club owner", "compulsive gambler", "bowling alley technician", "matador", "insomniac", "compulsive liar", "night janitor", "philanthropist", "cleptomaniac", "emergency room operator", "gardener", "ornithologist", "insurance adjuster", "submarine captain", "crime scene cleanup specialist", "stone mason", "arctic research vessel captain", "coroner", "mortician", "lobsterman", "lumberjack", "arms dealer", "smuggler", "professional cuddler", "water polo referee", "cartographer", "beekeeper", "fortune teller", "actor", "loner", "cobbler", "stalker", "titan of industry", "shipping magnate", "dog walker", "city counselour", "chauffeur", "personal assistant", "nanny", "dungeon master", "babysitter", "drifter", "masturbator", "newspaper photographer", "investment banker","amateur pornographer", "bookie", "career criminal", "bodyguard", "stuntman", "political operative", "shop clerk", "elementary school teacher", "investigative reporter", "meteorologist", "accountant", "inmate", "speech writer", "mayor", "union organizer", "swindler", "detective", "drug dealer", "pharmacist", "clinical psychologist", "bus driver", "librarian", "bartender", "sanitation worker", "museum curator","insurance actuary", "pilot", "plumber", "shipwright", "mechanic", "mother", "father", "teenager", "poet", "painter", "farmer", "train conductor", "taxi driver", "uber driver", "computer programmer"];
const object = ["mysterious \"heat machine\"", "face meant for radio", "(obviously) fake mustache", "face only their mother could love", "poorly-devised kidnapping attempt", "child with two heads", "devious scoundrel of a best friend", "seriously inflated sense of self", "childlike sense of wonder", "shattered life", "unshakable sense of impending doom", "rap sheet a mile long", "pair of star-crossed lovers", "penchant for eavesdropping", "dufflebag full of counterfeit money", "flagging libido", "unpublished novel", "lesser-known clown", "town full of Teen Wolves", "collapsed lung", "missing leg", "powdered wig", "unaccomplished mime",  "unfinished sword", "missing dog", "unhealthy (possibly sexual) infatuation with Mickey Mouse", "map leading to Jimmy Hoffa's bones", "bad case of the poops", "sinfully-good brownie recipe", "funky bag of tricks", "crippling soy allergy", "case of perpetual hiccups", "incurable aphasia", "debilitating bone spurs", "bow-legged gait", "shriveled left hand", "surprising criminal history", "stolen moon rock", "mysterious birth certificate", "trailer home attached to their pickup truck", "woefully forgetful father", "shameful secret past", "alligator living in their bathtub", "unhealthy relationship with regret", "crush on a dead girl", "hypertrophied heart", "total lack of moral character", "conflict with authority figures", "an inflated sense of self", "bad case of gout", "unshakeable feeling of being followed", "burial shroud", "antique globe", "collection of forged passports", "illegal tarantula farm", "red-footed tortoise", "trench shovel", "pair of well-worn Beatle boots", "carfull of watermelons", "fistful of hair", "guru wanted for murder", "spacious mid-sized sedan", "bad compulsion to eat pocket change", "inability to emote", "total inability to smile", "fragile sense of reality", "mythical sea creature", "bad toupee", "parrot that speaks only Haikus", "deflated beach ball", "baseball autographed by Mickey Mantle", "infamous riding crop", "diamond ring", "police auction hearse", "suitcase full of trade secrets", "drinking problem", "cryptic fortune cookie", "overweight basset hound", "acute case of chicken pox", "hand-carved chess set", "scarf blessed by the Dalai Lama", "suspicious looking trenchcoat", "ornate ivory-handled walking cane", "heirloom wool jacket", "worn copy of Moby Dick", "existential crisis", "copy of the Anarchist Cook Book", "Lyndon B. Johnson's tooth", "pocketful of exotic coins", "strong hand washing compulsion", "case of hypochondria", "pair of boxing gloves", "malfunctioning metal detector", "case of night fever", "meat-drunk cat", "ex-lover's cat", "case of imposter syndrome", "swindler", "burnout", "near-death experience", "brush with the demonic", "perilous journey through the Deep South", "unhappy ending for everyone involved", "*REDACTED*", "case of anxiety-induced blindness", "a severe case of body dysmorphia", "secret lover", "secret family", "taboo sexual fetish", "case of terminal cancer", "serious mental illness", "secret code intercepted over the radio", "red right hand", "abnormally large left hand", "old toy soldier", "inferiority complex", "textbook oedipal complex", "love of magic", "can of spraypaint", "mummified hand", "50 pound schnauzer", "inherited deed to a coastal estate", "stolen Ford Bronco", "love of mischief", "strong sense of pride", "penchant for theatrics", "eyeless snake", "unlucky rabbit's foot", "misplaced cannon ball", "old family photo album", "human ear in a paper bag", "abiding fear of clowns", "motorcycle repair manual", "three-legged dog", "glass eyey", "sack of gold coins", "large conch shell", "snuff box", "flask of cognac", "invitation to a party", "bag of fireworks", "printed copy of the 2019 tax law", "burning rose bush", "terrible family secret", "potted begonia", "pair of unworn baby shoes", "copy of James Joyce's Ulysses", "functioning replica musket", "cowboy hat", "broken set of eyeglasses", "hand-carved smoking pipe", "compass that always points south", "blood-soaked tablecloth", "unfinished novel", "locked box", "collection of rare butterflies", "skeleton key", "mysterious master key", "key to the city", "copy of their lover's last will and testament", "jar of holy water", "homemade moonshine", "cloud of noxious gas", "jar of bees", "seeds from an Amazonian healing shrub", "lock of human hair", "personal diary", "magical caligrapher's pen", "ounce of unusually good marijuana", "set of lockpicking tools", "brass lantern", "run-down barn", "liter of peach schnapps", "stolen passport", "old friend's dogtags", "unlikely dog collar", "handcuffs", "pair of Groucho Marx glasses", "unfinished master's thesis", "pair of dowsing rods", "time travel machine", "old typewriter", "collection of french erotica", "family bible", "vial of a stranger's blood", "crucifix", "box of lost kittens", "hand grenade", "urn full of ashes", "unsent sealed letter", "mardi gras mask", "too large kimono", "too small kimono", "bonsai tree", "empty bottle", "mystic artifact", "pocket knife", "unlikely meteorite", "cracked bowling ball", "tarnished pocket watch", "map of local steam tunnels", "loved one's war medal", "handful of marbles", "bronzed baby shoe", "unstrung tennis racket", "crystal ball", "french horn", "butterfly net", "greenhouse", "loaded handgun", "golden locket", "burnt book", "cracked hourglass", "ring", "expired library card", "old book", "magnet that behaves unusually", "unruly game warden", "broken radio antena", "library card", "wrist watch", "dull meat cleaver", "single left shoe", "unkown instrument"];
const form = ["collection of short stories", "novella", "novel", "book", "series of vignettes", "piece of flash fiction", "pop-up book", "children's book", "\"memoir\"", "comic book", "short story", "anthology", "piece", "sonnet", "dirty limerick", "collection of poetry"];
//const modifier = {"slightly", "very", "overly", "surprisingly", "radically", "moderately"};


function setup(){

  //color(0,0,0);
  // createCanvas(document.width, document.height);
  // background(0,0,0);
 
  console.log("Number of possible unique permutations: ", calculatePermutations() );
  //console.log(generateMessage());

  

  // var latestMessage = generateMessage();
  // if(messageElt != null){
  //   console.log(latestMessage);
  //   messageElt.innerHTML = latestMessage;
  // }
}

function draw(){
  
  //TODO: change this is to generate one output per one button click
  // Continuously generate book ideas while mouse is pressed
  // if(mousePressed){
  //   var message = generateMessage();
  //   console.log(message); 
  // }
}
 
 // Function for generating randomly compiled text
function generateMessage(){
  
  // A few words we'll use a lot
  var about = "about";
  var and = "and";
  var space = " ";
  var a = "a(n)";
  //var with = "with/and";
  var of = "of";
  

  
  // Randomly choose a position in each array
  // var indexGenre = Math.round(random(genre.length));
  // var indexForm = Math.round(random(form.length));
  // var indexAdj = Math.round(random(adjective.length));
  // var indexCharType = Math.round(random(characterType.length));
  // var indexObject = Math.round(random(object.length));

  var indexGenre = floor(random(genre.length));
  var indexForm = floor(random(form.length));
  var indexAdj = floor(random(adjective.length));
  var indexCharType = floor(random(characterType.length));
  var indexObject = floor(random(object.length));
   
  // print out index number for reach message
  var idnum = indexGenre + "." + indexForm + "." + indexAdj + "." + indexCharType + "." + indexObject;
   
  // Check if we want to use recall number to generate old text or generate fresh text
  if(useInputNum){
    var idNumSplit = split(inputNum, ".");
    // Use key number to create/recreate a message
    var message = assignArticle(genre[idNumSplit[0]]) + space + form[idNumSplit[1]] + about + space + assignArticle(adjective[idNumSplit[2]]) + space + characterType[idNumSplit[3]] + space + and + space  + assignArticle(object[idNumSplit[4]]);
    //return message;
    
  } else {
    
    // Compile our final text to output
    var message = idnum + ":" + space + assignArticle(genre[indexGenre]) + space + form[indexForm] + space + about + space + assignArticle(adjective[indexAdj]) + space + characterType[indexCharType] + space + and + space + assignArticle(object[indexObject]);
    //return message;
  }

  // var latestMessage = generateMessage();
  // if(messageElt != null){
  //   console.log(latestMessage);
  //   messageElt.innerHTML = latestMessage;
  // }
  var messageElt = document.getElementById("messageElt");
  var latestMessage = message;
  console.log(latestMessage);
  messageElt.innerHTML = latestMessage;
  
}

// Function for calculating all of the possible unique permutations we can generate
// If we add more categories, they should need to be added to this calculation
function calculatePermutations(){
  
  // Calculate number of possible permutations
  var permutations = str(genre.length * adjective.length * characterType.length * object.length * form.length);
  
  return permutations;
}

function assignArticle(invar){
  // let _invar = invar;
  // let ch = _invar.charAt(0);

  if(invar != undefined && invar != "undefined"){
  let ch = invar.charAt(0);
    if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'y'){
      let outvar = "an " + invar;
      return outvar;
    } else {
      let outvar = "a " + invar;
      return outvar;
    }
  } else {
    console.log("OOPS can't assign article to undefined input");
    let outvar = "a " + invar; //TODO fix this becuase this will (rarely) cause grammatical error
    return outvar;
  }
}
