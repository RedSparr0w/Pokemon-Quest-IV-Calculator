/*
All pokemon data scraped from serebii
https://www.serebii.net/quest/pokemon.shtml

allPokemon

allPokemon = {};
rows = document.querySelectorAll(".dextable tbody tr")
rows.forEach((el, i)=>{
	if (!(i % 2)) return;
	specs = el.getElementsByTagName('td');
	let pokemon = {};
	let pokemon_name = specs[3].getElementsByTagName('u')[0].innerText;
	allPokemon[pokemon_name] = {
		dex: specs[0].innerText.substr(1,4),
		number: +specs[0].innerText.substr(1,4),
		img: specs[1].getElementsByTagName('img')[0].src,
		types: [],
		fight_style: specs[5].innerText,
		hitpoints: +specs[6].innerText,
		attack: +specs[7].innerText,
		obtain_method: specs[8].innerText,
	};
	[...specs[4].getElementsByTagName('img')].forEach((el,i)=>{allPokemon[pokemon_name].types.push(el.src.match(/(\w+)\.gif/)[1]);});
});
*/
allPokemon = {
  "Bulbasaur": {
    "dex": "001",
    "number": 1,
    "types": [
      "grass",
      "poison"
    ],
    "fight_style": "Melee",
    "hitpoints": 125,
    "attack": 75,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nSludge Soup à la Cube\nVeggie Smoothie à la Cube\n"
  },
  "Ivysaur": {
    "dex": "002",
    "number": 2,
    "types": [
      "grass",
      "poison"
    ],
    "fight_style": "Melee",
    "hitpoints": 400,
    "attack": 100,
    "obtain_method": "Evolve Bulbasaur (Lv. 16)"
  },
  "Venusaur": {
    "dex": "003",
    "number": 3,
    "types": [
      "grass",
      "poison"
    ],
    "fight_style": "Melee",
    "hitpoints": 550,
    "attack": 150,
    "obtain_method": "Evolve Ivysaur (Lv. 32)"
  },
  "Charmander": {
    "dex": "004",
    "number": 4,
    "types": [
      "fire"
    ],
    "fight_style": "Melee",
    "hitpoints": 75,
    "attack": 125,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nHot Pot à la Cube\n"
  },
  "Charmeleon": {
    "dex": "005",
    "number": 5,
    "types": [
      "fire"
    ],
    "fight_style": "Melee",
    "hitpoints": 100,
    "attack": 400,
    "obtain_method": "Evolve Charmander (Lv. 16)"
  },
  "Charizard": {
    "dex": "006",
    "number": 6,
    "types": [
      "fire",
      "flying"
    ],
    "fight_style": "Melee",
    "hitpoints": 200,
    "attack": 600,
    "obtain_method": "Evolve Charmeleon (Lv. 36)"
  },
  "Squirtle": {
    "dex": "007",
    "number": 7,
    "types": [
      "water"
    ],
    "fight_style": "Melee",
    "hitpoints": 100,
    "attack": 100,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\nMouth-Watering Dip à la Cube\n"
  },
  "Wartortle": {
    "dex": "008",
    "number": 8,
    "types": [
      "water"
    ],
    "fight_style": "Melee",
    "hitpoints": 250,
    "attack": 250,
    "obtain_method": "Evolve Squirtle (Lv. 16)"
  },
  "Blastoise": {
    "dex": "009",
    "number": 9,
    "types": [
      "water"
    ],
    "fight_style": "Melee",
    "hitpoints": 400,
    "attack": 400,
    "obtain_method": "Evolve Wartortle (Lv. 36)"
  },
  "Caterpie": {
    "dex": "010",
    "number": 10,
    "types": [
      "bug"
    ],
    "fight_style": "Melee",
    "hitpoints": 110,
    "attack": 90,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\n"
  },
  "Metapod": {
    "dex": "011",
    "number": 11,
    "types": [
      "bug"
    ],
    "fight_style": "Melee",
    "hitpoints": 275,
    "attack": 25,
    "obtain_method": "Evolve Caterpie (Lv. 7)"
  },
  "Butterfree": {
    "dex": "012",
    "number": 12,
    "types": [
      "bug",
      "flying"
    ],
    "fight_style": "Melee",
    "hitpoints": 150,
    "attack": 250,
    "obtain_method": "Evolve Metapod (Lv. 10)"
  },
  "Weedle": {
    "dex": "013",
    "number": 13,
    "types": [
      "bug",
      "poison"
    ],
    "fight_style": "Melee",
    "hitpoints": 100,
    "attack": 100,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\n"
  },
  "Kakuna": {
    "dex": "014",
    "number": 14,
    "types": [
      "bug",
      "poison"
    ],
    "fight_style": "Melee",
    "hitpoints": 250,
    "attack": 50,
    "obtain_method": "Evolve Weedle (Lv. 7)"
  },
  "Beedrill": {
    "dex": "015",
    "number": 15,
    "types": [
      "bug",
      "poison"
    ],
    "fight_style": "Melee",
    "hitpoints": 150,
    "attack": 250,
    "obtain_method": "Evolve Kakuna (Lv. 10)"
  },
  "Pidgey": {
    "dex": "016",
    "number": 16,
    "types": [
      "normal",
      "flying"
    ],
    "fight_style": "Range",
    "hitpoints": 100,
    "attack": 100,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nPlain Crepe à la Cube\n"
  },
  "Pidgeotto": {
    "dex": "017",
    "number": 17,
    "types": [
      "normal",
      "flying"
    ],
    "fight_style": "Range",
    "hitpoints": 250,
    "attack": 250,
    "obtain_method": "Evolve Pidgey (Lv. 18)"
  },
  "Pidgeot": {
    "dex": "018",
    "number": 18,
    "types": [
      "normal",
      "flying"
    ],
    "fight_style": "Range",
    "hitpoints": 400,
    "attack": 400,
    "obtain_method": "Evolve Pidgeotto (Lv. 36)"
  },
  "Rattata": {
    "dex": "019",
    "number": 19,
    "types": [
      "normal"
    ],
    "fight_style": "Melee",
    "hitpoints": 75,
    "attack": 125,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\nPlain Crepe à la Cube\n"
  },
  "Raticate": {
    "dex": "020",
    "number": 20,
    "types": [
      "normal"
    ],
    "fight_style": "Melee",
    "hitpoints": 150,
    "attack": 450,
    "obtain_method": "Evolve Rattata (Lv. 20)"
  },
  "Spearow": {
    "dex": "021",
    "number": 21,
    "types": [
      "normal",
      "flying"
    ],
    "fight_style": "Melee",
    "hitpoints": 75,
    "attack": 125,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nPlain Crepe à la Cube\n"
  },
  "Fearow": {
    "dex": "022",
    "number": 22,
    "types": [
      "normal",
      "flying"
    ],
    "fight_style": "Melee",
    "hitpoints": 100,
    "attack": 500,
    "obtain_method": "Evolve Spearow (Lv. 20)"
  },
  "Ekans": {
    "dex": "023",
    "number": 23,
    "types": [
      "poison"
    ],
    "fight_style": "Range",
    "hitpoints": 80,
    "attack": 120,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\nSludge Soup à la Cube\n"
  },
  "Arbok": {
    "dex": "024",
    "number": 24,
    "types": [
      "poison"
    ],
    "fight_style": "Range",
    "hitpoints": 150,
    "attack": 450,
    "obtain_method": "Evolve Ekans (Lv. 22)"
  },
  "Pikachu": {
    "dex": "025",
    "number": 25,
    "types": [
      "electric"
    ],
    "fight_style": "Melee",
    "hitpoints": 70,
    "attack": 130,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nWatt a Risotto à la Cube\n"
  },
  "Raichu": {
    "dex": "026",
    "number": 26,
    "types": [
      "electric"
    ],
    "fight_style": "Melee",
    "hitpoints": 150,
    "attack": 450,
    "obtain_method": "Evolve Pikachu (Lv. 22)"
  },
  "Sandshrew": {
    "dex": "027",
    "number": 27,
    "types": [
      "ground"
    ],
    "fight_style": "Melee",
    "hitpoints": 80,
    "attack": 120,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nMud Pie à la Cube\n"
  },
  "Sandslash": {
    "dex": "028",
    "number": 28,
    "types": [
      "ground"
    ],
    "fight_style": "Melee",
    "hitpoints": 150,
    "attack": 350,
    "obtain_method": "Evolve Sandshrew (Lv. 22)"
  },
  "Nidoran♀": {
    "dex": "029",
    "number": 29,
    "types": [
      "poison"
    ],
    "fight_style": "Range",
    "hitpoints": 140,
    "attack": 60,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\n"
  },
  "Nidorina": {
    "dex": "030",
    "number": 30,
    "types": [
      "poison"
    ],
    "fight_style": "Range",
    "hitpoints": 325,
    "attack": 175,
    "obtain_method": "Evolve Nidoran (Lv. 16)"
  },
  "Nidoqueen": {
    "dex": "031",
    "number": 31,
    "types": [
      "poison",
      "ground"
    ],
    "fight_style": "Range",
    "hitpoints": 600,
    "attack": 200,
    "obtain_method": "Evolve Nidorina (Lv. 36)"
  },
  "Nidoran♂": {
    "dex": "032",
    "number": 32,
    "types": [
      "poison"
    ],
    "fight_style": "Melee",
    "hitpoints": 60,
    "attack": 140,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\n"
  },
  "Nidorino": {
    "dex": "033",
    "number": 33,
    "types": [
      "poison"
    ],
    "fight_style": "Melee",
    "hitpoints": 175,
    "attack": 325,
    "obtain_method": "Evolve Nidoran (Lv. 16)"
  },
  "Nidoking": {
    "dex": "034",
    "number": 34,
    "types": [
      "poison",
      "ground"
    ],
    "fight_style": "Melee",
    "hitpoints": 200,
    "attack": 600,
    "obtain_method": "Evolve Nidorino (Lv. 36)"
  },
  "Clefairy": {
    "dex": "035",
    "number": 35,
    "types": [
      "fairy"
    ],
    "fight_style": "Melee",
    "hitpoints": 120,
    "attack": 80,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\n"
  },
  "Clefable": {
    "dex": "036",
    "number": 36,
    "types": [
      "fairy"
    ],
    "fight_style": "Melee",
    "hitpoints": 450,
    "attack": 250,
    "obtain_method": "Evolve Clefairy (Lv. 36)"
  },
  "Vulpix": {
    "dex": "037",
    "number": 37,
    "types": [
      "fire"
    ],
    "fight_style": "Range",
    "hitpoints": 110,
    "attack": 90,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nHot Pot à la Cube\n"
  },
  "Ninetales": {
    "dex": "038",
    "number": 38,
    "types": [
      "fire"
    ],
    "fight_style": "Range",
    "hitpoints": 550,
    "attack": 250,
    "obtain_method": "Evolve Vulpix (Lv. 36)"
  },
  "Jigglypuff": {
    "dex": "039",
    "number": 39,
    "types": [
      "normal",
      "fairy"
    ],
    "fight_style": "Melee",
    "hitpoints": 140,
    "attack": 60,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nPlain Crepe à la Cube\n"
  },
  "Wigglytuff": {
    "dex": "040",
    "number": 40,
    "types": [
      "normal",
      "fairy"
    ],
    "fight_style": "Melee",
    "hitpoints": 450,
    "attack": 150,
    "obtain_method": "Evolve Jigglypuff (Lv. 36)"
  },
  "Zubat": {
    "dex": "041",
    "number": 41,
    "types": [
      "poison",
      "flying"
    ],
    "fight_style": "Range",
    "hitpoints": 80,
    "attack": 120,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nSludge Soup à la Cube\nLight-as-Air Casserole à la Cube\n"
  },
  "Golbat": {
    "dex": "042",
    "number": 42,
    "types": [
      "poison",
      "flying"
    ],
    "fight_style": "Range",
    "hitpoints": 200,
    "attack": 400,
    "obtain_method": "Evolve Zubat (Lv. 22)"
  },
  "Oddish": {
    "dex": "043",
    "number": 43,
    "types": [
      "grass",
      "poison"
    ],
    "fight_style": "Range",
    "hitpoints": 75,
    "attack": 125,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\n"
  },
  "Gloom": {
    "dex": "044",
    "number": 44,
    "types": [
      "grass",
      "poison"
    ],
    "fight_style": "Range",
    "hitpoints": 250,
    "attack": 350,
    "obtain_method": "Evolve Oddish (Lv. 21)"
  },
  "Vileplume": {
    "dex": "045",
    "number": 45,
    "types": [
      "grass",
      "poison"
    ],
    "fight_style": "Range",
    "hitpoints": 300,
    "attack": 500,
    "obtain_method": "Evolve Gloom (Lv. 36)"
  },
  "Paras": {
    "dex": "046",
    "number": 46,
    "types": [
      "bug",
      "grass"
    ],
    "fight_style": "Range",
    "hitpoints": 80,
    "attack": 120,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nVeggie Smoothie à la Cube\nHoney Nectar à la Cube\n"
  },
  "Parasect": {
    "dex": "047",
    "number": 47,
    "types": [
      "bug",
      "grass"
    ],
    "fight_style": "Range",
    "hitpoints": 200,
    "attack": 500,
    "obtain_method": "Evolve Paras (Lv. 24)"
  },
  "Venonat": {
    "dex": "048",
    "number": 48,
    "types": [
      "bug",
      "poison"
    ],
    "fight_style": "Range",
    "hitpoints": 120,
    "attack": 80,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nSludge Soup à la Cube\nHoney Nectar à la Cube\n"
  },
  "Venomoth": {
    "dex": "049",
    "number": 49,
    "types": [
      "bug",
      "poison"
    ],
    "fight_style": "Range",
    "hitpoints": 350,
    "attack": 350,
    "obtain_method": "Evolve Venonat (Lv. 31)"
  },
  "Diglett": {
    "dex": "050",
    "number": 50,
    "types": [
      "ground"
    ],
    "fight_style": "Range",
    "hitpoints": 60,
    "attack": 140,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nMud Pie à la Cube\n"
  },
  "Dugtrio": {
    "dex": "051",
    "number": 51,
    "types": [
      "ground"
    ],
    "fight_style": "Range",
    "hitpoints": 100,
    "attack": 600,
    "obtain_method": "Evolve Diglett (Lv. 26)"
  },
  "Meowth": {
    "dex": "052",
    "number": 52,
    "types": [
      "normal"
    ],
    "fight_style": "Melee",
    "hitpoints": 85,
    "attack": 115,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nPlain Crepe à la Cube\n"
  },
  "Persian": {
    "dex": "053",
    "number": 53,
    "types": [
      "normal"
    ],
    "fight_style": "Melee",
    "hitpoints": 300,
    "attack": 400,
    "obtain_method": "Evolve Meowth (Lv. 28)"
  },
  "Psyduck": {
    "dex": "054",
    "number": 54,
    "types": [
      "water"
    ],
    "fight_style": "Range",
    "hitpoints": 80,
    "attack": 120,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nMouth-Watering Dip à la Cube\n"
  },
  "Golduck": {
    "dex": "055",
    "number": 55,
    "types": [
      "water"
    ],
    "fight_style": "Range",
    "hitpoints": 200,
    "attack": 500,
    "obtain_method": "Evolve Psyduck (Lv. 33)"
  },
  "Mankey": {
    "dex": "056",
    "number": 56,
    "types": [
      "fighting"
    ],
    "fight_style": "Melee",
    "hitpoints": 60,
    "attack": 140,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\n"
  },
  "Primeape": {
    "dex": "057",
    "number": 57,
    "types": [
      "fighting"
    ],
    "fight_style": "Melee",
    "hitpoints": 150,
    "attack": 550,
    "obtain_method": "Evolve Mankey (Lv. 28)"
  },
  "Growlithe": {
    "dex": "058",
    "number": 58,
    "types": [
      "fire"
    ],
    "fight_style": "Melee",
    "hitpoints": 80,
    "attack": 120,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nHot Pot à la Cube\n"
  },
  "Arcanine": {
    "dex": "059",
    "number": 59,
    "types": [
      "fire"
    ],
    "fight_style": "Melee",
    "hitpoints": 350,
    "attack": 450,
    "obtain_method": "Evolve Growlithe (Lv. 36)"
  },
  "Poliwag": {
    "dex": "060",
    "number": 60,
    "types": [
      "water"
    ],
    "fight_style": "Melee",
    "hitpoints": 90,
    "attack": 110,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\nMouth-Watering Dip à la Cube\n"
  },
  "Poliwhirl": {
    "dex": "061",
    "number": 61,
    "types": [
      "water"
    ],
    "fight_style": "Melee",
    "hitpoints": 350,
    "attack": 350,
    "obtain_method": "Evolve Poliwag (Lv. 25)"
  },
  "Poliwrath": {
    "dex": "062",
    "number": 62,
    "types": [
      "water",
      "fighting"
    ],
    "fight_style": "Melee",
    "hitpoints": 350,
    "attack": 450,
    "obtain_method": "Evolve Poliwhirl (Lv. 36)"
  },
  "Abra": {
    "dex": "063",
    "number": 63,
    "types": [
      "psychic"
    ],
    "fight_style": "Range",
    "hitpoints": 45,
    "attack": 155,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nBrain Food à la Cube\n"
  },
  "Kadabra": {
    "dex": "064",
    "number": 64,
    "types": [
      "psychic"
    ],
    "fight_style": "Range",
    "hitpoints": 90,
    "attack": 410,
    "obtain_method": "Evolve Abra (Lv. 16)"
  },
  "Alakazam": {
    "dex": "065",
    "number": 65,
    "types": [
      "psychic"
    ],
    "fight_style": "Range",
    "hitpoints": 100,
    "attack": 700,
    "obtain_method": "Evolve Kadabra (Lv. 36)"
  },
  "Machop": {
    "dex": "066",
    "number": 66,
    "types": [
      "fighting"
    ],
    "fight_style": "Melee",
    "hitpoints": 80,
    "attack": 120,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\nGet Swole Syrup à la Cube\n"
  },
  "Machoke": {
    "dex": "067",
    "number": 67,
    "types": [
      "fighting"
    ],
    "fight_style": "Melee",
    "hitpoints": 200,
    "attack": 500,
    "obtain_method": "Evolve Machop (Lv. 28)"
  },
  "Machamp": {
    "dex": "068",
    "number": 68,
    "types": [
      "fighting"
    ],
    "fight_style": "Melee",
    "hitpoints": 250,
    "attack": 550,
    "obtain_method": "Evolve Machoke (Lv. 36)"
  },
  "Bellsprout": {
    "dex": "069",
    "number": 69,
    "types": [
      "grass",
      "poison"
    ],
    "fight_style": "Range",
    "hitpoints": 80,
    "attack": 120,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\n"
  },
  "Weepinbell": {
    "dex": "070",
    "number": 70,
    "types": [
      "grass",
      "poison"
    ],
    "fight_style": "Range",
    "hitpoints": 250,
    "attack": 350,
    "obtain_method": "Evolve Bellsprout (Lv. 21)"
  },
  "Victreebel": {
    "dex": "071",
    "number": 71,
    "types": [
      "grass",
      "poison"
    ],
    "fight_style": "Range",
    "hitpoints": 300,
    "attack": 500,
    "obtain_method": "Evolve Weepinbell (Lv. 36)"
  },
  "Tentacool": {
    "dex": "072",
    "number": 72,
    "types": [
      "water",
      "poison"
    ],
    "fight_style": "Range",
    "hitpoints": 90,
    "attack": 110,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\nMouth-Watering Dip à la Cube\n"
  },
  "Tentacruel": {
    "dex": "073",
    "number": 73,
    "types": [
      "water",
      "poison"
    ],
    "fight_style": "Range",
    "hitpoints": 550,
    "attack": 150,
    "obtain_method": "Evolve Tentacool (Lv. 30)"
  },
  "Geodude": {
    "dex": "074",
    "number": 74,
    "types": [
      "rock",
      "ground"
    ],
    "fight_style": "Melee",
    "hitpoints": 140,
    "attack": 60,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nMud Pie à la Cube\nStone Soup à la Cube\n"
  },
  "Graveler": {
    "dex": "075",
    "number": 75,
    "types": [
      "rock",
      "ground"
    ],
    "fight_style": "Melee",
    "hitpoints": 610,
    "attack": 90,
    "obtain_method": "Evolve Geodude (Lv. 24)"
  },
  "Golem": {
    "dex": "076",
    "number": 76,
    "types": [
      "rock",
      "ground"
    ],
    "fight_style": "Melee",
    "hitpoints": 700,
    "attack": 100,
    "obtain_method": "Evolve Graveler (Lv. 36)"
  },
  "Ponyta": {
    "dex": "077",
    "number": 77,
    "types": [
      "fire"
    ],
    "fight_style": "Melee",
    "hitpoints": 100,
    "attack": 100,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nHot Pot à la Cube\n"
  },
  "Rapidash": {
    "dex": "078",
    "number": 78,
    "types": [
      "fire"
    ],
    "fight_style": "Melee",
    "hitpoints": 400,
    "attack": 400,
    "obtain_method": "Evolve Ponyta (Lv. 40)"
  },
  "Slowpoke": {
    "dex": "079",
    "number": 79,
    "types": [
      "water",
      "psychic"
    ],
    "fight_style": "Melee",
    "hitpoints": 130,
    "attack": 70,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nMouth-Watering Dip à la Cube\nBrain Food à la Cube\n"
  },
  "Slowbro": {
    "dex": "080",
    "number": 80,
    "types": [
      "water",
      "psychic"
    ],
    "fight_style": "Melee",
    "hitpoints": 650,
    "attack": 150,
    "obtain_method": "Evolve Slowpoke (Lv. 37)"
  },
  "Magnemite": {
    "dex": "081",
    "number": 81,
    "types": [
      "electric",
      "steel"
    ],
    "fight_style": "Range",
    "hitpoints": 80,
    "attack": 120,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nWatt a Risotto à la Cube\n"
  },
  "Magneton": {
    "dex": "082",
    "number": 82,
    "types": [
      "electric",
      "steel"
    ],
    "fight_style": "Range",
    "hitpoints": 300,
    "attack": 400,
    "obtain_method": "Evolve Magnemite (Lv. 30)"
  },
  "Farfetch'd": {
    "dex": "083",
    "number": 83,
    "types": [
      "normal",
      "flying"
    ],
    "fight_style": "Melee",
    "hitpoints": 350,
    "attack": 350,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nPlain Crepe à la Cube\nLight-as-Air Casserole à la Cube\n"
  },
  "Doduo": {
    "dex": "084",
    "number": 84,
    "types": [
      "normal",
      "flying"
    ],
    "fight_style": "Melee",
    "hitpoints": 80,
    "attack": 120,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nPlain Crepe à la Cube\nLight-as-Air Casserole à la Cube\n"
  },
  "Dodrio": {
    "dex": "085",
    "number": 85,
    "types": [
      "normal",
      "flying"
    ],
    "fight_style": "Melee",
    "hitpoints": 200,
    "attack": 500,
    "obtain_method": "Evolve Doduo (Lv. 31)"
  },
  "Seel": {
    "dex": "086",
    "number": 86,
    "types": [
      "water"
    ],
    "fight_style": "Range",
    "hitpoints": 110,
    "attack": 90,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nMouth-Watering Dip à la Cube\n"
  },
  "Dewgong": {
    "dex": "087",
    "number": 87,
    "types": [
      "water",
      "ice"
    ],
    "fight_style": "Range",
    "hitpoints": 500,
    "attack": 200,
    "obtain_method": "Evolve Seel (Lv. 34)"
  },
  "Grimer": {
    "dex": "088",
    "number": 88,
    "types": [
      "poison"
    ],
    "fight_style": "Melee",
    "hitpoints": 110,
    "attack": 90,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\nSludge Soup à la Cube\n"
  },
  "Muk": {
    "dex": "089",
    "number": 89,
    "types": [
      "poison"
    ],
    "fight_style": "Melee",
    "hitpoints": 650,
    "attack": 150,
    "obtain_method": "Evolve Grimer (Lv. 38)"
  },
  "Shellder": {
    "dex": "090",
    "number": 90,
    "types": [
      "water"
    ],
    "fight_style": "Range",
    "hitpoints": 120,
    "attack": 80,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nMouth-Watering Dip à la Cube\n"
  },
  "Cloyster": {
    "dex": "091",
    "number": 91,
    "types": [
      "water",
      "ice"
    ],
    "fight_style": "Range",
    "hitpoints": 575,
    "attack": 225,
    "obtain_method": "Evolve Shellder (Lv. 36)"
  },
  "Gastly": {
    "dex": "092",
    "number": 92,
    "types": [
      "ghost",
      "poison"
    ],
    "fight_style": "Melee",
    "hitpoints": 50,
    "attack": 150,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nSludge Soup à la Cube\n"
  },
  "Haunter": {
    "dex": "093",
    "number": 93,
    "types": [
      "ghost",
      "poison"
    ],
    "fight_style": "Melee",
    "hitpoints": 125,
    "attack": 575,
    "obtain_method": "Evolve Gastly (Lv. 25)"
  },
  "Gengar": {
    "dex": "094",
    "number": 94,
    "types": [
      "ghost",
      "poison"
    ],
    "fight_style": "Melee",
    "hitpoints": 150,
    "attack": 650,
    "obtain_method": "Evolve Haunter (Lv. 36)"
  },
  "Onix": {
    "dex": "095",
    "number": 95,
    "types": [
      "rock",
      "ground"
    ],
    "fight_style": "Melee",
    "hitpoints": 600,
    "attack": 100,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nMud Pie à la Cube\nStone Soup à la Cube\n"
  },
  "Drowzee": {
    "dex": "096",
    "number": 96,
    "types": [
      "psychic"
    ],
    "fight_style": "Range",
    "hitpoints": 120,
    "attack": 80,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nBrain Food à la Cube\n"
  },
  "Hypno": {
    "dex": "097",
    "number": 97,
    "types": [
      "psychic"
    ],
    "fight_style": "Range",
    "hitpoints": 500,
    "attack": 200,
    "obtain_method": "Evolve Drowzee (Lv. 26)"
  },
  "Krabby": {
    "dex": "098",
    "number": 98,
    "types": [
      "water"
    ],
    "fight_style": "Melee",
    "hitpoints": 70,
    "attack": 130,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nMouth-Watering Dip à la Cube\n"
  },
  "Kingler": {
    "dex": "099",
    "number": 99,
    "types": [
      "water"
    ],
    "fight_style": "Melee",
    "hitpoints": 100,
    "attack": 600,
    "obtain_method": "Evolve Krabby (Lv. 28)"
  },
  "Voltorb": {
    "dex": "100",
    "number": 100,
    "types": [
      "electric"
    ],
    "fight_style": "Melee",
    "hitpoints": 110,
    "attack": 90,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\n"
  },
  "Electrode": {
    "dex": "101",
    "number": 101,
    "types": [
      "electric"
    ],
    "fight_style": "Melee",
    "hitpoints": 400,
    "attack": 300,
    "obtain_method": "Evolve Voltorb (Lv. 30)"
  },
  "Exeggcute": {
    "dex": "102",
    "number": 102,
    "types": [
      "grass",
      "psychic"
    ],
    "fight_style": "Range",
    "hitpoints": 130,
    "attack": 70,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nVeggie Smoothie à la Cube\nBrain Food à la Cube\n"
  },
  "Exeggutor": {
    "dex": "103",
    "number": 103,
    "types": [
      "grass",
      "psychic"
    ],
    "fight_style": "Range",
    "hitpoints": 250,
    "attack": 550,
    "obtain_method": "Evolve Exeggcute (Lv. 36)"
  },
  "Cubone": {
    "dex": "104",
    "number": 104,
    "types": [
      "ground"
    ],
    "fight_style": "Melee",
    "hitpoints": 130,
    "attack": 70,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nMud Pie à la Cube\n"
  },
  "Marowak": {
    "dex": "105",
    "number": 105,
    "types": [
      "ground"
    ],
    "fight_style": "Melee",
    "hitpoints": 525,
    "attack": 175,
    "obtain_method": "Evolve Cubone (Lv. 28)"
  },
  "Hitmonlee": {
    "dex": "106",
    "number": 106,
    "types": [
      "fighting"
    ],
    "fight_style": "Melee",
    "hitpoints": 50,
    "attack": 650,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nGet Swole Syrup à la Cube\n"
  },
  "Hitmonchan": {
    "dex": "107",
    "number": 107,
    "types": [
      "fighting"
    ],
    "fight_style": "Melee",
    "hitpoints": 75,
    "attack": 625,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nGet Swole Syrup à la Cube\n"
  },
  "Lickitung": {
    "dex": "108",
    "number": 108,
    "types": [
      "normal"
    ],
    "fight_style": "Melee",
    "hitpoints": 600,
    "attack": 100,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nPlain Crepe à la Cube\n"
  },
  "Koffing": {
    "dex": "109",
    "number": 109,
    "types": [
      "poison"
    ],
    "fight_style": "Range",
    "hitpoints": 140,
    "attack": 60,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\nSludge Soup à la Cube\n"
  },
  "Weezing": {
    "dex": "110",
    "number": 110,
    "types": [
      "poison"
    ],
    "fight_style": "Range",
    "hitpoints": 450,
    "attack": 350,
    "obtain_method": "Evolve Koffing (Lv. 35)"
  },
  "Rhyhorn": {
    "dex": "111",
    "number": 111,
    "types": [
      "ground",
      "rock"
    ],
    "fight_style": "Melee",
    "hitpoints": 120,
    "attack": 80,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nMud Pie à la Cube\nStone Soup à la Cube\n"
  },
  "Rhydon": {
    "dex": "112",
    "number": 112,
    "types": [
      "ground",
      "rock"
    ],
    "fight_style": "Melee",
    "hitpoints": 300,
    "attack": 500,
    "obtain_method": "Evolve Rhyhorn (Lv. 42)"
  },
  "Chansey": {
    "dex": "113",
    "number": 113,
    "types": [
      "normal"
    ],
    "fight_style": "Melee",
    "hitpoints": 675,
    "attack": 25,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nPlain Crepe à la Cube\n"
  },
  "Tangela": {
    "dex": "114",
    "number": 114,
    "types": [
      "grass"
    ],
    "fight_style": "Melee",
    "hitpoints": 400,
    "attack": 300,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\nVeggie Smoothie à la Cube\n"
  },
  "Kangaskhan": {
    "dex": "115",
    "number": 115,
    "types": [
      "normal"
    ],
    "fight_style": "Melee",
    "hitpoints": 350,
    "attack": 350,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nPlain Crepe à la Cube\n"
  },
  "Horsea": {
    "dex": "116",
    "number": 116,
    "types": [
      "water"
    ],
    "fight_style": "Range",
    "hitpoints": 90,
    "attack": 110,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\nMouth-Watering Dip à la Cube\n"
  },
  "Seadra": {
    "dex": "117",
    "number": 117,
    "types": [
      "water"
    ],
    "fight_style": "Range",
    "hitpoints": 250,
    "attack": 450,
    "obtain_method": "Evolve Horsea (Lv. 37)"
  },
  "Goldeen": {
    "dex": "118",
    "number": 118,
    "types": [
      "water"
    ],
    "fight_style": "Melee",
    "hitpoints": 70,
    "attack": 130,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nMouth-Watering Dip à la Cube\n"
  },
  "Seaking": {
    "dex": "119",
    "number": 119,
    "types": [
      "water"
    ],
    "fight_style": "Melee",
    "hitpoints": 350,
    "attack": 450,
    "obtain_method": "Evolve Goldeen (Lv. 33)"
  },
  "Staryu": {
    "dex": "120",
    "number": 120,
    "types": [
      "water"
    ],
    "fight_style": "Range",
    "hitpoints": 60,
    "attack": 140,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nMouth-Watering Dip à la Cube\n"
  },
  "Starmie": {
    "dex": "121",
    "number": 121,
    "types": [
      "water",
      "psychic"
    ],
    "fight_style": "Range",
    "hitpoints": 150,
    "attack": 650,
    "obtain_method": "Evolve Staryu (Lv. 36)"
  },
  "Mr. Mime": {
    "dex": "122",
    "number": 122,
    "types": [
      "psychic",
      "fairy"
    ],
    "fight_style": "Range",
    "hitpoints": 575,
    "attack": 125,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nBrain Food à la Cube\n"
  },
  "Scyther": {
    "dex": "123",
    "number": 123,
    "types": [
      "bug",
      "flying"
    ],
    "fight_style": "Melee",
    "hitpoints": 100,
    "attack": 700,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nHoney Nectar à la Cube\nLight-as-Air Casserole à la Cube\n"
  },
  "Jynx": {
    "dex": "124",
    "number": 124,
    "types": [
      "ice",
      "psychic"
    ],
    "fight_style": "Range",
    "hitpoints": 150,
    "attack": 550,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nBrain Food à la Cube\n"
  },
  "Electabuzz": {
    "dex": "125",
    "number": 125,
    "types": [
      "electric"
    ],
    "fight_style": "Melee",
    "hitpoints": 300,
    "attack": 400,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nWatt a Risotto à la Cube\n"
  },
  "Magmar": {
    "dex": "126",
    "number": 126,
    "types": [
      "fire"
    ],
    "fight_style": "Melee",
    "hitpoints": 175,
    "attack": 525,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nHot Pot à la Cube\n"
  },
  "Pinsir": {
    "dex": "127",
    "number": 127,
    "types": [
      "bug"
    ],
    "fight_style": "Melee",
    "hitpoints": 75,
    "attack": 725,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nHoney Nectar à la Cube\n"
  },
  "Tauros": {
    "dex": "128",
    "number": 128,
    "types": [
      "normal"
    ],
    "fight_style": "Melee",
    "hitpoints": 100,
    "attack": 600,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nPlain Crepe à la Cube\n"
  },
  "Magikarp": {
    "dex": "129",
    "number": 129,
    "types": [
      "water"
    ],
    "fight_style": "Melee",
    "hitpoints": 25,
    "attack": 25,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\nMouth-Watering Dip à la Cube\n"
  },
  "Gyarados": {
    "dex": "130",
    "number": 130,
    "types": [
      "water",
      "flying"
    ],
    "fight_style": "Melee",
    "hitpoints": 200,
    "attack": 400,
    "obtain_method": "Evolve Magikarp (Lv. 20)"
  },
  "Lapras": {
    "dex": "131",
    "number": 131,
    "types": [
      "water",
      "ice"
    ],
    "fight_style": "Range",
    "hitpoints": 650,
    "attack": 150,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\nMouth-Watering Dip à la Cube\n"
  },
  "Ditto": {
    "dex": "132",
    "number": 132,
    "types": [
      "normal"
    ],
    "fight_style": "Range",
    "hitpoints": 350,
    "attack": 350,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\nPlain Crepe à la Cube\n"
  },
  "Eevee": {
    "dex": "133",
    "number": 133,
    "types": [
      "normal"
    ],
    "fight_style": "Melee",
    "hitpoints": 100,
    "attack": 100,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nPlain Crepe à la Cube\n"
  },
  "Vaporeon": {
    "dex": "134",
    "number": 134,
    "types": [
      "water"
    ],
    "fight_style": "Melee",
    "hitpoints": 600,
    "attack": 200,
    "obtain_method": "Evolve Eevee (Lv. 36 - Only HP Power Stones attached)"
  },
  "Jolteon": {
    "dex": "135",
    "number": 135,
    "types": [
      "electric"
    ],
    "fight_style": "Melee",
    "hitpoints": 250,
    "attack": 550,
    "obtain_method": "Evolve Eevee (Lv. 36 - An equal mix of HP & ATK Power Stones attached)"
  },
  "Flareon": {
    "dex": "136",
    "number": 136,
    "types": [
      "fire"
    ],
    "fight_style": "Melee",
    "hitpoints": 200,
    "attack": 600,
    "obtain_method": "Evolve Eevee (Lv. 36 - Only ATK Power Stones attached)"
  },
  "Porygon": {
    "dex": "137",
    "number": 137,
    "types": [
      "normal"
    ],
    "fight_style": "Range",
    "hitpoints": 350,
    "attack": 350,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nPlain Crepe à la Cube\n"
  },
  "Omanyte": {
    "dex": "138",
    "number": 138,
    "types": [
      "rock",
      "water"
    ],
    "fight_style": "Range",
    "hitpoints": 140,
    "attack": 60,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\nMouth-Watering Dip à la Cube\nStone Soup à la Cube\n"
  },
  "Omastar": {
    "dex": "139",
    "number": 139,
    "types": [
      "rock",
      "water"
    ],
    "fight_style": "Range",
    "hitpoints": 575,
    "attack": 225,
    "obtain_method": "Evolve Omanyte (Lv. 40)"
  },
  "Kabuto": {
    "dex": "140",
    "number": 140,
    "types": [
      "rock",
      "water"
    ],
    "fight_style": "Melee",
    "hitpoints": 70,
    "attack": 130,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nMouth-Watering Dip à la Cube\nStone Soup à la Cube\n"
  },
  "Kabutops": {
    "dex": "141",
    "number": 141,
    "types": [
      "rock",
      "water"
    ],
    "fight_style": "Melee",
    "hitpoints": 150,
    "attack": 650,
    "obtain_method": "Evolve Kabuto (Lv. 40)"
  },
  "Aerodactyl": {
    "dex": "142",
    "number": 142,
    "types": [
      "rock",
      "flying"
    ],
    "fight_style": "Melee",
    "hitpoints": 125,
    "attack": 675,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nStone Soup à la Cube\nLight-as-Air Casserole à la Cube\n"
  },
  "Snorlax": {
    "dex": "143",
    "number": 143,
    "types": [
      "normal"
    ],
    "fight_style": "Melee",
    "hitpoints": 650,
    "attack": 150,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nPlain Crepe à la Cube\n"
  },
  "Articuno": {
    "dex": "144",
    "number": 144,
    "types": [
      "ice",
      "flying"
    ],
    "fight_style": "Range",
    "hitpoints": 600,
    "attack": 400,
    "obtain_method": "Ambrosia of Legends à la Cube\n"
  },
  "Zapdos": {
    "dex": "145",
    "number": 145,
    "types": [
      "electric",
      "flying"
    ],
    "fight_style": "Range",
    "hitpoints": 350,
    "attack": 650,
    "obtain_method": "Ambrosia of Legends à la Cube\n"
  },
  "Moltres": {
    "dex": "146",
    "number": 146,
    "types": [
      "fire",
      "flying"
    ],
    "fight_style": "Range",
    "hitpoints": 500,
    "attack": 500,
    "obtain_method": "Ambrosia of Legends à la Cube\n"
  },
  "Dratini": {
    "dex": "147",
    "number": 147,
    "types": [
      "dragon"
    ],
    "fight_style": "Melee",
    "hitpoints": 80,
    "attack": 120,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\n"
  },
  "Dragonair": {
    "dex": "148",
    "number": 148,
    "types": [
      "dragon"
    ],
    "fight_style": "Melee",
    "hitpoints": 300,
    "attack": 400,
    "obtain_method": "Evolve Dratini (Lv. 30)"
  },
  "Dragonite": {
    "dex": "149",
    "number": 149,
    "types": [
      "dragon",
      "flying"
    ],
    "fight_style": "Melee",
    "hitpoints": 400,
    "attack": 500,
    "obtain_method": "Evolve Dragonair (Lv. 55)"
  },
  "Mewtwo": {
    "dex": "150",
    "number": 150,
    "types": [
      "psychic"
    ],
    "fight_style": "Range",
    "hitpoints": 550,
    "attack": 750,
    "obtain_method": "Ambrosia of Legends à la Cube\n"
  },
  "Mew": {
    "dex": "151",
    "number": 151,
    "types": [
      "psychic"
    ],
    "fight_style": "Range",
    "hitpoints": 650,
    "attack": 650,
    "obtain_method": "Ambrosia of Legends à la Cube\n"
  }
}
