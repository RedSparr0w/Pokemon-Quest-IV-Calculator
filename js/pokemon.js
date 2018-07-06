/*
All pokemon data scraped from serebii
https://www.serebii.net/quest/pokemon.shtml

allPokemon = [];
rows = document.querySelectorAll(".dextable tbody tr")
rows.forEach((el, i)=>{
	if (!(i % 2)) return;
	pokemon = {};
	specs = el.getElementsByTagName('td');
	pokemon.number = +specs[0].innerText.substr(1,4);
	pokemon.img = specs[1].getElementsByTagName('img')[0].src;
	pokemon.name = specs[3].getElementsByTagName('u')[0].innerText;
	pokemon.types = [];
	[...specs[4].getElementsByTagName('img')].forEach((el,i)=>{pokemon.types.push(el.src.match(/(\w+)\.gif/)[1]);});
	pokemon.style = specs[5].innerText;
	pokemon.hitpoints = +specs[6].innerText;
	pokemon.attack = +specs[7].innerText;
	pokemon.obtain_method = specs[8].innerText;;
	allPokemon.push(pokemon);
});
*/
allPokemon = [
  {
    "number": 1,
    "img": "https://www.serebii.net/quest/pokemon/001.png",
    "name": "Bulbasaur",
    "types": [
      "grass",
      "poison"
    ],
    "style": "Melee",
    "hitpoints": 125,
    "attack": 75,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nSludge Soup à la Cube\nVeggie Smoothie à la Cube\n"
  },
  {
    "number": 2,
    "img": "https://www.serebii.net/quest/pokemon/002.png",
    "name": "Ivysaur",
    "types": [
      "grass",
      "poison"
    ],
    "style": "Melee",
    "hitpoints": 400,
    "attack": 100,
    "obtain_method": "Evolve Bulbasaur (Lv. 16)"
  },
  {
    "number": 3,
    "img": "https://www.serebii.net/quest/pokemon/003.png",
    "name": "Venusaur",
    "types": [
      "grass",
      "poison"
    ],
    "style": "Melee",
    "hitpoints": 550,
    "attack": 150,
    "obtain_method": "Evolve Ivysaur (Lv. 32)"
  },
  {
    "number": 4,
    "img": "https://www.serebii.net/quest/pokemon/004.png",
    "name": "Charmander",
    "types": [
      "fire"
    ],
    "style": "Melee",
    "hitpoints": 75,
    "attack": 125,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nHot Pot à la Cube\n"
  },
  {
    "number": 5,
    "img": "https://www.serebii.net/quest/pokemon/005.png",
    "name": "Charmeleon",
    "types": [
      "fire"
    ],
    "style": "Melee",
    "hitpoints": 100,
    "attack": 400,
    "obtain_method": "Evolve Charmander (Lv. 16)"
  },
  {
    "number": 6,
    "img": "https://www.serebii.net/quest/pokemon/006.png",
    "name": "Charizard",
    "types": [
      "fire",
      "flying"
    ],
    "style": "Melee",
    "hitpoints": 200,
    "attack": 600,
    "obtain_method": "Evolve Charmeleon (Lv. 36)"
  },
  {
    "number": 7,
    "img": "https://www.serebii.net/quest/pokemon/007.png",
    "name": "Squirtle",
    "types": [
      "water"
    ],
    "style": "Melee",
    "hitpoints": 100,
    "attack": 100,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\nMouth-Watering Dip à la Cube\n"
  },
  {
    "number": 8,
    "img": "https://www.serebii.net/quest/pokemon/008.png",
    "name": "Wartortle",
    "types": [
      "water"
    ],
    "style": "Melee",
    "hitpoints": 250,
    "attack": 250,
    "obtain_method": "Evolve Squirtle (Lv. 16)"
  },
  {
    "number": 9,
    "img": "https://www.serebii.net/quest/pokemon/009.png",
    "name": "Blastoise",
    "types": [
      "water"
    ],
    "style": "Melee",
    "hitpoints": 400,
    "attack": 400,
    "obtain_method": "Evolve Wartortle (Lv. 36)"
  },
  {
    "number": 10,
    "img": "https://www.serebii.net/quest/pokemon/010.png",
    "name": "Caterpie",
    "types": [
      "bug"
    ],
    "style": "Melee",
    "hitpoints": 110,
    "attack": 90,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\n"
  },
  {
    "number": 11,
    "img": "https://www.serebii.net/quest/pokemon/011.png",
    "name": "Metapod",
    "types": [
      "bug"
    ],
    "style": "Melee",
    "hitpoints": 275,
    "attack": 25,
    "obtain_method": "Evolve Caterpie (Lv. 7)"
  },
  {
    "number": 12,
    "img": "https://www.serebii.net/quest/pokemon/012.png",
    "name": "Butterfree",
    "types": [
      "bug",
      "flying"
    ],
    "style": "Melee",
    "hitpoints": 150,
    "attack": 250,
    "obtain_method": "Evolve Metapod (Lv. 10)"
  },
  {
    "number": 13,
    "img": "https://www.serebii.net/quest/pokemon/013.png",
    "name": "Weedle",
    "types": [
      "bug",
      "poison"
    ],
    "style": "Melee",
    "hitpoints": 100,
    "attack": 100,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\n"
  },
  {
    "number": 14,
    "img": "https://www.serebii.net/quest/pokemon/014.png",
    "name": "Kakuna",
    "types": [
      "bug",
      "poison"
    ],
    "style": "Melee",
    "hitpoints": 250,
    "attack": 50,
    "obtain_method": "Evolve Weedle (Lv. 7)"
  },
  {
    "number": 15,
    "img": "https://www.serebii.net/quest/pokemon/015.png",
    "name": "Beedrill",
    "types": [
      "bug",
      "poison"
    ],
    "style": "Melee",
    "hitpoints": 150,
    "attack": 250,
    "obtain_method": "Evolve Kakuna (Lv. 10)"
  },
  {
    "number": 16,
    "img": "https://www.serebii.net/quest/pokemon/016.png",
    "name": "Pidgey",
    "types": [
      "normal",
      "flying"
    ],
    "style": "Range",
    "hitpoints": 100,
    "attack": 100,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nPlain Crepe à la Cube\n"
  },
  {
    "number": 17,
    "img": "https://www.serebii.net/quest/pokemon/017.png",
    "name": "Pidgeotto",
    "types": [
      "normal",
      "flying"
    ],
    "style": "Range",
    "hitpoints": 250,
    "attack": 250,
    "obtain_method": "Evolve Pidgey (Lv. 18)"
  },
  {
    "number": 18,
    "img": "https://www.serebii.net/quest/pokemon/018.png",
    "name": "Pidgeot",
    "types": [
      "normal",
      "flying"
    ],
    "style": "Range",
    "hitpoints": 400,
    "attack": 400,
    "obtain_method": "Evolve Pidgeotto (Lv. 36)"
  },
  {
    "number": 19,
    "img": "https://www.serebii.net/quest/pokemon/019.png",
    "name": "Rattata",
    "types": [
      "normal"
    ],
    "style": "Melee",
    "hitpoints": 75,
    "attack": 125,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\nPlain Crepe à la Cube\n"
  },
  {
    "number": 20,
    "img": "https://www.serebii.net/quest/pokemon/020.png",
    "name": "Raticate",
    "types": [
      "normal"
    ],
    "style": "Melee",
    "hitpoints": 150,
    "attack": 450,
    "obtain_method": "Evolve Rattata (Lv. 20)"
  },
  {
    "number": 21,
    "img": "https://www.serebii.net/quest/pokemon/021.png",
    "name": "Spearow",
    "types": [
      "normal",
      "flying"
    ],
    "style": "Melee",
    "hitpoints": 75,
    "attack": 125,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nPlain Crepe à la Cube\n"
  },
  {
    "number": 22,
    "img": "https://www.serebii.net/quest/pokemon/022.png",
    "name": "Fearow",
    "types": [
      "normal",
      "flying"
    ],
    "style": "Melee",
    "hitpoints": 100,
    "attack": 500,
    "obtain_method": "Evolve Spearow (Lv. 20)"
  },
  {
    "number": 23,
    "img": "https://www.serebii.net/quest/pokemon/023.png",
    "name": "Ekans",
    "types": [
      "poison"
    ],
    "style": "Range",
    "hitpoints": 80,
    "attack": 120,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\nSludge Soup à la Cube\n"
  },
  {
    "number": 24,
    "img": "https://www.serebii.net/quest/pokemon/024.png",
    "name": "Arbok",
    "types": [
      "poison"
    ],
    "style": "Range",
    "hitpoints": 150,
    "attack": 450,
    "obtain_method": "Evolve Ekans (Lv. 22)"
  },
  {
    "number": 25,
    "img": "https://www.serebii.net/quest/pokemon/025.png",
    "name": "Pikachu",
    "types": [
      "electric"
    ],
    "style": "Melee",
    "hitpoints": 70,
    "attack": 130,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nWatt a Risotto à la Cube\n"
  },
  {
    "number": 26,
    "img": "https://www.serebii.net/quest/pokemon/026.png",
    "name": "Raichu",
    "types": [
      "electric"
    ],
    "style": "Melee",
    "hitpoints": 150,
    "attack": 450,
    "obtain_method": "Evolve Pikachu (Lv. 22)"
  },
  {
    "number": 27,
    "img": "https://www.serebii.net/quest/pokemon/027.png",
    "name": "Sandshrew",
    "types": [
      "ground"
    ],
    "style": "Melee",
    "hitpoints": 80,
    "attack": 120,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nMud Pie à la Cube\n"
  },
  {
    "number": 28,
    "img": "https://www.serebii.net/quest/pokemon/028.png",
    "name": "Sandslash",
    "types": [
      "ground"
    ],
    "style": "Melee",
    "hitpoints": 150,
    "attack": 350,
    "obtain_method": "Evolve Sandshrew (Lv. 22)"
  },
  {
    "number": 29,
    "img": "https://www.serebii.net/quest/pokemon/029.png",
    "name": "Nidoran♀",
    "types": [
      "poison"
    ],
    "style": "Range",
    "hitpoints": 140,
    "attack": 60,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\n"
  },
  {
    "number": 30,
    "img": "https://www.serebii.net/quest/pokemon/030.png",
    "name": "Nidorina",
    "types": [
      "poison"
    ],
    "style": "Range",
    "hitpoints": 325,
    "attack": 175,
    "obtain_method": "Evolve Nidoran (Lv. 16)"
  },
  {
    "number": 31,
    "img": "https://www.serebii.net/quest/pokemon/031.png",
    "name": "Nidoqueen",
    "types": [
      "poison",
      "ground"
    ],
    "style": "Range",
    "hitpoints": 600,
    "attack": 200,
    "obtain_method": "Evolve Nidorina (Lv. 36)"
  },
  {
    "number": 32,
    "img": "https://www.serebii.net/quest/pokemon/032.png",
    "name": "Nidoran♂",
    "types": [
      "poison"
    ],
    "style": "Melee",
    "hitpoints": 60,
    "attack": 140,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\n"
  },
  {
    "number": 33,
    "img": "https://www.serebii.net/quest/pokemon/033.png",
    "name": "Nidorino",
    "types": [
      "poison"
    ],
    "style": "Melee",
    "hitpoints": 175,
    "attack": 325,
    "obtain_method": "Evolve Nidoran (Lv. 16)"
  },
  {
    "number": 34,
    "img": "https://www.serebii.net/quest/pokemon/034.png",
    "name": "Nidoking",
    "types": [
      "poison",
      "ground"
    ],
    "style": "Melee",
    "hitpoints": 200,
    "attack": 600,
    "obtain_method": "Evolve Nidorino (Lv. 36)"
  },
  {
    "number": 35,
    "img": "https://www.serebii.net/quest/pokemon/035.png",
    "name": "Clefairy",
    "types": [
      "fairy"
    ],
    "style": "Melee",
    "hitpoints": 120,
    "attack": 80,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\n"
  },
  {
    "number": 36,
    "img": "https://www.serebii.net/quest/pokemon/036.png",
    "name": "Clefable",
    "types": [
      "fairy"
    ],
    "style": "Melee",
    "hitpoints": 450,
    "attack": 250,
    "obtain_method": "Evolve Clefairy (Lv. 36)"
  },
  {
    "number": 37,
    "img": "https://www.serebii.net/quest/pokemon/037.png",
    "name": "Vulpix",
    "types": [
      "fire"
    ],
    "style": "Range",
    "hitpoints": 110,
    "attack": 90,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nHot Pot à la Cube\n"
  },
  {
    "number": 38,
    "img": "https://www.serebii.net/quest/pokemon/038.png",
    "name": "Ninetales",
    "types": [
      "fire"
    ],
    "style": "Range",
    "hitpoints": 550,
    "attack": 250,
    "obtain_method": "Evolve Vulpix (Lv. 36)"
  },
  {
    "number": 39,
    "img": "https://www.serebii.net/quest/pokemon/039.png",
    "name": "Jigglypuff",
    "types": [
      "normal",
      "fairy"
    ],
    "style": "Melee",
    "hitpoints": 140,
    "attack": 60,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nPlain Crepe à la Cube\n"
  },
  {
    "number": 40,
    "img": "https://www.serebii.net/quest/pokemon/040.png",
    "name": "Wigglytuff",
    "types": [
      "normal",
      "fairy"
    ],
    "style": "Melee",
    "hitpoints": 450,
    "attack": 150,
    "obtain_method": "Evolve Jigglypuff (Lv. 36)"
  },
  {
    "number": 41,
    "img": "https://www.serebii.net/quest/pokemon/041.png",
    "name": "Zubat",
    "types": [
      "poison",
      "flying"
    ],
    "style": "Range",
    "hitpoints": 80,
    "attack": 120,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nSludge Soup à la Cube\nLight-as-Air Casserole à la Cube\n"
  },
  {
    "number": 42,
    "img": "https://www.serebii.net/quest/pokemon/042.png",
    "name": "Golbat",
    "types": [
      "poison",
      "flying"
    ],
    "style": "Range",
    "hitpoints": 200,
    "attack": 400,
    "obtain_method": "Evolve Zubat (Lv. 22)"
  },
  {
    "number": 43,
    "img": "https://www.serebii.net/quest/pokemon/043.png",
    "name": "Oddish",
    "types": [
      "grass",
      "poison"
    ],
    "style": "Range",
    "hitpoints": 75,
    "attack": 125,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\n"
  },
  {
    "number": 44,
    "img": "https://www.serebii.net/quest/pokemon/044.png",
    "name": "Gloom",
    "types": [
      "grass",
      "poison"
    ],
    "style": "Range",
    "hitpoints": 250,
    "attack": 350,
    "obtain_method": "Evolve Oddish (Lv. 21)"
  },
  {
    "number": 45,
    "img": "https://www.serebii.net/quest/pokemon/045.png",
    "name": "Vileplume",
    "types": [
      "grass",
      "poison"
    ],
    "style": "Range",
    "hitpoints": 300,
    "attack": 500,
    "obtain_method": "Evolve Gloom (Lv. 36)"
  },
  {
    "number": 46,
    "img": "https://www.serebii.net/quest/pokemon/046.png",
    "name": "Paras",
    "types": [
      "bug",
      "grass"
    ],
    "style": "Range",
    "hitpoints": 80,
    "attack": 120,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nVeggie Smoothie à la Cube\nHoney Nectar à la Cube\n"
  },
  {
    "number": 47,
    "img": "https://www.serebii.net/quest/pokemon/047.png",
    "name": "Parasect",
    "types": [
      "bug",
      "grass"
    ],
    "style": "Range",
    "hitpoints": 200,
    "attack": 500,
    "obtain_method": "Evolve Paras (Lv. 24)"
  },
  {
    "number": 48,
    "img": "https://www.serebii.net/quest/pokemon/048.png",
    "name": "Venonat",
    "types": [
      "bug",
      "poison"
    ],
    "style": "Range",
    "hitpoints": 120,
    "attack": 80,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nSludge Soup à la Cube\nHoney Nectar à la Cube\n"
  },
  {
    "number": 49,
    "img": "https://www.serebii.net/quest/pokemon/049.png",
    "name": "Venomoth",
    "types": [
      "bug",
      "poison"
    ],
    "style": "Range",
    "hitpoints": 350,
    "attack": 350,
    "obtain_method": "Evolve Venonat (Lv. 31)"
  },
  {
    "number": 50,
    "img": "https://www.serebii.net/quest/pokemon/050.png",
    "name": "Diglett",
    "types": [
      "ground"
    ],
    "style": "Range",
    "hitpoints": 60,
    "attack": 140,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nMud Pie à la Cube\n"
  },
  {
    "number": 51,
    "img": "https://www.serebii.net/quest/pokemon/051.png",
    "name": "Dugtrio",
    "types": [
      "ground"
    ],
    "style": "Range",
    "hitpoints": 100,
    "attack": 600,
    "obtain_method": "Evolve Diglett (Lv. 26)"
  },
  {
    "number": 52,
    "img": "https://www.serebii.net/quest/pokemon/052.png",
    "name": "Meowth",
    "types": [
      "normal"
    ],
    "style": "Melee",
    "hitpoints": 85,
    "attack": 115,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nPlain Crepe à la Cube\n"
  },
  {
    "number": 53,
    "img": "https://www.serebii.net/quest/pokemon/053.png",
    "name": "Persian",
    "types": [
      "normal"
    ],
    "style": "Melee",
    "hitpoints": 300,
    "attack": 400,
    "obtain_method": "Evolve Meowth (Lv. 28)"
  },
  {
    "number": 54,
    "img": "https://www.serebii.net/quest/pokemon/054.png",
    "name": "Psyduck",
    "types": [
      "water"
    ],
    "style": "Range",
    "hitpoints": 80,
    "attack": 120,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nMouth-Watering Dip à la Cube\n"
  },
  {
    "number": 55,
    "img": "https://www.serebii.net/quest/pokemon/055.png",
    "name": "Golduck",
    "types": [
      "water"
    ],
    "style": "Range",
    "hitpoints": 200,
    "attack": 500,
    "obtain_method": "Evolve Psyduck (Lv. 33)"
  },
  {
    "number": 56,
    "img": "https://www.serebii.net/quest/pokemon/056.png",
    "name": "Mankey",
    "types": [
      "fighting"
    ],
    "style": "Melee",
    "hitpoints": 60,
    "attack": 140,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\n"
  },
  {
    "number": 57,
    "img": "https://www.serebii.net/quest/pokemon/057.png",
    "name": "Primeape",
    "types": [
      "fighting"
    ],
    "style": "Melee",
    "hitpoints": 150,
    "attack": 550,
    "obtain_method": "Evolve Mankey (Lv. 28)"
  },
  {
    "number": 58,
    "img": "https://www.serebii.net/quest/pokemon/058.png",
    "name": "Growlithe",
    "types": [
      "fire"
    ],
    "style": "Melee",
    "hitpoints": 80,
    "attack": 120,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nHot Pot à la Cube\n"
  },
  {
    "number": 59,
    "img": "https://www.serebii.net/quest/pokemon/059.png",
    "name": "Arcanine",
    "types": [
      "fire"
    ],
    "style": "Melee",
    "hitpoints": 350,
    "attack": 450,
    "obtain_method": "Evolve Growlithe (Lv. 36)"
  },
  {
    "number": 60,
    "img": "https://www.serebii.net/quest/pokemon/060.png",
    "name": "Poliwag",
    "types": [
      "water"
    ],
    "style": "Melee",
    "hitpoints": 90,
    "attack": 110,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\nMouth-Watering Dip à la Cube\n"
  },
  {
    "number": 61,
    "img": "https://www.serebii.net/quest/pokemon/061.png",
    "name": "Poliwhirl",
    "types": [
      "water"
    ],
    "style": "Melee",
    "hitpoints": 350,
    "attack": 350,
    "obtain_method": "Evolve Poliwag (Lv. 25)"
  },
  {
    "number": 62,
    "img": "https://www.serebii.net/quest/pokemon/062.png",
    "name": "Poliwrath",
    "types": [
      "water",
      "fighting"
    ],
    "style": "Melee",
    "hitpoints": 350,
    "attack": 450,
    "obtain_method": "Evolve Poliwhirl (Lv. 36)"
  },
  {
    "number": 63,
    "img": "https://www.serebii.net/quest/pokemon/063.png",
    "name": "Abra",
    "types": [
      "psychic"
    ],
    "style": "Range",
    "hitpoints": 45,
    "attack": 155,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nBrain Food à la Cube\n"
  },
  {
    "number": 64,
    "img": "https://www.serebii.net/quest/pokemon/064.png",
    "name": "Kadabra",
    "types": [
      "psychic"
    ],
    "style": "Range",
    "hitpoints": 90,
    "attack": 410,
    "obtain_method": "Evolve Abra (Lv. 16)"
  },
  {
    "number": 65,
    "img": "https://www.serebii.net/quest/pokemon/065.png",
    "name": "Alakazam",
    "types": [
      "psychic"
    ],
    "style": "Range",
    "hitpoints": 100,
    "attack": 700,
    "obtain_method": "Evolve Kadabra (Lv. 36)"
  },
  {
    "number": 66,
    "img": "https://www.serebii.net/quest/pokemon/066.png",
    "name": "Machop",
    "types": [
      "fighting"
    ],
    "style": "Melee",
    "hitpoints": 80,
    "attack": 120,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\nGet Swole Syrup à la Cube\n"
  },
  {
    "number": 67,
    "img": "https://www.serebii.net/quest/pokemon/067.png",
    "name": "Machoke",
    "types": [
      "fighting"
    ],
    "style": "Melee",
    "hitpoints": 200,
    "attack": 500,
    "obtain_method": "Evolve Machop (Lv. 28)"
  },
  {
    "number": 68,
    "img": "https://www.serebii.net/quest/pokemon/068.png",
    "name": "Machamp",
    "types": [
      "fighting"
    ],
    "style": "Melee",
    "hitpoints": 250,
    "attack": 550,
    "obtain_method": "Evolve Machoke (Lv. 36)"
  },
  {
    "number": 69,
    "img": "https://www.serebii.net/quest/pokemon/069.png",
    "name": "Bellsprout",
    "types": [
      "grass",
      "poison"
    ],
    "style": "Range",
    "hitpoints": 80,
    "attack": 120,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\n"
  },
  {
    "number": 70,
    "img": "https://www.serebii.net/quest/pokemon/070.png",
    "name": "Weepinbell",
    "types": [
      "grass",
      "poison"
    ],
    "style": "Range",
    "hitpoints": 250,
    "attack": 350,
    "obtain_method": "Evolve Bellsprout (Lv. 21)"
  },
  {
    "number": 71,
    "img": "https://www.serebii.net/quest/pokemon/071.png",
    "name": "Victreebel",
    "types": [
      "grass",
      "poison"
    ],
    "style": "Range",
    "hitpoints": 300,
    "attack": 500,
    "obtain_method": "Evolve Weepinbell (Lv. 36)"
  },
  {
    "number": 72,
    "img": "https://www.serebii.net/quest/pokemon/072.png",
    "name": "Tentacool",
    "types": [
      "water",
      "poison"
    ],
    "style": "Range",
    "hitpoints": 90,
    "attack": 110,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\nMouth-Watering Dip à la Cube\n"
  },
  {
    "number": 73,
    "img": "https://www.serebii.net/quest/pokemon/073.png",
    "name": "Tentacruel",
    "types": [
      "water",
      "poison"
    ],
    "style": "Range",
    "hitpoints": 550,
    "attack": 150,
    "obtain_method": "Evolve Tentacool (Lv. 30)"
  },
  {
    "number": 74,
    "img": "https://www.serebii.net/quest/pokemon/074.png",
    "name": "Geodude",
    "types": [
      "rock",
      "ground"
    ],
    "style": "Melee",
    "hitpoints": 140,
    "attack": 60,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nMud Pie à la Cube\nStone Soup à la Cube\n"
  },
  {
    "number": 75,
    "img": "https://www.serebii.net/quest/pokemon/075.png",
    "name": "Graveler",
    "types": [
      "rock",
      "ground"
    ],
    "style": "Melee",
    "hitpoints": 610,
    "attack": 90,
    "obtain_method": "Evolve Geodude (Lv. 24)"
  },
  {
    "number": 76,
    "img": "https://www.serebii.net/quest/pokemon/076.png",
    "name": "Golem",
    "types": [
      "rock",
      "ground"
    ],
    "style": "Melee",
    "hitpoints": 700,
    "attack": 100,
    "obtain_method": "Evolve Graveler (Lv. 36)"
  },
  {
    "number": 77,
    "img": "https://www.serebii.net/quest/pokemon/077.png",
    "name": "Ponyta",
    "types": [
      "fire"
    ],
    "style": "Melee",
    "hitpoints": 100,
    "attack": 100,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nHot Pot à la Cube\n"
  },
  {
    "number": 78,
    "img": "https://www.serebii.net/quest/pokemon/078.png",
    "name": "Rapidash",
    "types": [
      "fire"
    ],
    "style": "Melee",
    "hitpoints": 400,
    "attack": 400,
    "obtain_method": "Evolve Ponyta (Lv. 40)"
  },
  {
    "number": 79,
    "img": "https://www.serebii.net/quest/pokemon/079.png",
    "name": "Slowpoke",
    "types": [
      "water",
      "psychic"
    ],
    "style": "Melee",
    "hitpoints": 130,
    "attack": 70,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nMouth-Watering Dip à la Cube\nBrain Food à la Cube\n"
  },
  {
    "number": 80,
    "img": "https://www.serebii.net/quest/pokemon/080.png",
    "name": "Slowbro",
    "types": [
      "water",
      "psychic"
    ],
    "style": "Melee",
    "hitpoints": 650,
    "attack": 150,
    "obtain_method": "Evolve Slowpoke (Lv. 37)"
  },
  {
    "number": 81,
    "img": "https://www.serebii.net/quest/pokemon/081.png",
    "name": "Magnemite",
    "types": [
      "electric",
      "steel"
    ],
    "style": "Range",
    "hitpoints": 80,
    "attack": 120,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nWatt a Risotto à la Cube\n"
  },
  {
    "number": 82,
    "img": "https://www.serebii.net/quest/pokemon/082.png",
    "name": "Magneton",
    "types": [
      "electric",
      "steel"
    ],
    "style": "Range",
    "hitpoints": 300,
    "attack": 400,
    "obtain_method": "Evolve Magnemite (Lv. 30)"
  },
  {
    "number": 83,
    "img": "https://www.serebii.net/quest/pokemon/083.png",
    "name": "Farfetch'd",
    "types": [
      "normal",
      "flying"
    ],
    "style": "Melee",
    "hitpoints": 350,
    "attack": 350,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nPlain Crepe à la Cube\nLight-as-Air Casserole à la Cube\n"
  },
  {
    "number": 84,
    "img": "https://www.serebii.net/quest/pokemon/084.png",
    "name": "Doduo",
    "types": [
      "normal",
      "flying"
    ],
    "style": "Melee",
    "hitpoints": 80,
    "attack": 120,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nPlain Crepe à la Cube\nLight-as-Air Casserole à la Cube\n"
  },
  {
    "number": 85,
    "img": "https://www.serebii.net/quest/pokemon/085.png",
    "name": "Dodrio",
    "types": [
      "normal",
      "flying"
    ],
    "style": "Melee",
    "hitpoints": 200,
    "attack": 500,
    "obtain_method": "Evolve Doduo (Lv. 31)"
  },
  {
    "number": 86,
    "img": "https://www.serebii.net/quest/pokemon/086.png",
    "name": "Seel",
    "types": [
      "water"
    ],
    "style": "Range",
    "hitpoints": 110,
    "attack": 90,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nMouth-Watering Dip à la Cube\n"
  },
  {
    "number": 87,
    "img": "https://www.serebii.net/quest/pokemon/087.png",
    "name": "Dewgong",
    "types": [
      "water",
      "ice"
    ],
    "style": "Range",
    "hitpoints": 500,
    "attack": 200,
    "obtain_method": "Evolve Seel (Lv. 34)"
  },
  {
    "number": 88,
    "img": "https://www.serebii.net/quest/pokemon/088.png",
    "name": "Grimer",
    "types": [
      "poison"
    ],
    "style": "Melee",
    "hitpoints": 110,
    "attack": 90,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\nSludge Soup à la Cube\n"
  },
  {
    "number": 89,
    "img": "https://www.serebii.net/quest/pokemon/089.png",
    "name": "Muk",
    "types": [
      "poison"
    ],
    "style": "Melee",
    "hitpoints": 650,
    "attack": 150,
    "obtain_method": "Evolve Grimer (Lv. 38)"
  },
  {
    "number": 90,
    "img": "https://www.serebii.net/quest/pokemon/090.png",
    "name": "Shellder",
    "types": [
      "water"
    ],
    "style": "Range",
    "hitpoints": 120,
    "attack": 80,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nMouth-Watering Dip à la Cube\n"
  },
  {
    "number": 91,
    "img": "https://www.serebii.net/quest/pokemon/091.png",
    "name": "Cloyster",
    "types": [
      "water",
      "ice"
    ],
    "style": "Range",
    "hitpoints": 575,
    "attack": 225,
    "obtain_method": "Evolve Shellder (Lv. 36)"
  },
  {
    "number": 92,
    "img": "https://www.serebii.net/quest/pokemon/092.png",
    "name": "Gastly",
    "types": [
      "ghost",
      "poison"
    ],
    "style": "Melee",
    "hitpoints": 50,
    "attack": 150,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nSludge Soup à la Cube\n"
  },
  {
    "number": 93,
    "img": "https://www.serebii.net/quest/pokemon/093.png",
    "name": "Haunter",
    "types": [
      "ghost",
      "poison"
    ],
    "style": "Melee",
    "hitpoints": 125,
    "attack": 575,
    "obtain_method": "Evolve Gastly (Lv. 25)"
  },
  {
    "number": 94,
    "img": "https://www.serebii.net/quest/pokemon/094.png",
    "name": "Gengar",
    "types": [
      "ghost",
      "poison"
    ],
    "style": "Melee",
    "hitpoints": 150,
    "attack": 650,
    "obtain_method": "Evolve Haunter (Lv. 36)"
  },
  {
    "number": 95,
    "img": "https://www.serebii.net/quest/pokemon/095.png",
    "name": "Onix",
    "types": [
      "rock",
      "ground"
    ],
    "style": "Melee",
    "hitpoints": 600,
    "attack": 100,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nMud Pie à la Cube\nStone Soup à la Cube\n"
  },
  {
    "number": 96,
    "img": "https://www.serebii.net/quest/pokemon/096.png",
    "name": "Drowzee",
    "types": [
      "psychic"
    ],
    "style": "Range",
    "hitpoints": 120,
    "attack": 80,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nBrain Food à la Cube\n"
  },
  {
    "number": 97,
    "img": "https://www.serebii.net/quest/pokemon/097.png",
    "name": "Hypno",
    "types": [
      "psychic"
    ],
    "style": "Range",
    "hitpoints": 500,
    "attack": 200,
    "obtain_method": "Evolve Drowzee (Lv. 26)"
  },
  {
    "number": 98,
    "img": "https://www.serebii.net/quest/pokemon/098.png",
    "name": "Krabby",
    "types": [
      "water"
    ],
    "style": "Melee",
    "hitpoints": 70,
    "attack": 130,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nMouth-Watering Dip à la Cube\n"
  },
  {
    "number": 99,
    "img": "https://www.serebii.net/quest/pokemon/099.png",
    "name": "Kingler",
    "types": [
      "water"
    ],
    "style": "Melee",
    "hitpoints": 100,
    "attack": 600,
    "obtain_method": "Evolve Krabby (Lv. 28)"
  },
  {
    "number": 100,
    "img": "https://www.serebii.net/quest/pokemon/100.png",
    "name": "Voltorb",
    "types": [
      "electric"
    ],
    "style": "Melee",
    "hitpoints": 110,
    "attack": 90,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\n"
  },
  {
    "number": 101,
    "img": "https://www.serebii.net/quest/pokemon/101.png",
    "name": "Electrode",
    "types": [
      "electric"
    ],
    "style": "Melee",
    "hitpoints": 400,
    "attack": 300,
    "obtain_method": "Evolve Voltorb (Lv. 30)"
  },
  {
    "number": 102,
    "img": "https://www.serebii.net/quest/pokemon/102.png",
    "name": "Exeggcute",
    "types": [
      "grass",
      "psychic"
    ],
    "style": "Range",
    "hitpoints": 130,
    "attack": 70,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nVeggie Smoothie à la Cube\nBrain Food à la Cube\n"
  },
  {
    "number": 103,
    "img": "https://www.serebii.net/quest/pokemon/103.png",
    "name": "Exeggutor",
    "types": [
      "grass",
      "psychic"
    ],
    "style": "Range",
    "hitpoints": 250,
    "attack": 550,
    "obtain_method": "Evolve Exeggcute (Lv. 36)"
  },
  {
    "number": 104,
    "img": "https://www.serebii.net/quest/pokemon/104.png",
    "name": "Cubone",
    "types": [
      "ground"
    ],
    "style": "Melee",
    "hitpoints": 130,
    "attack": 70,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nMud Pie à la Cube\n"
  },
  {
    "number": 105,
    "img": "https://www.serebii.net/quest/pokemon/105.png",
    "name": "Marowak",
    "types": [
      "ground"
    ],
    "style": "Melee",
    "hitpoints": 525,
    "attack": 175,
    "obtain_method": "Evolve Cubone (Lv. 28)"
  },
  {
    "number": 106,
    "img": "https://www.serebii.net/quest/pokemon/106.png",
    "name": "Hitmonlee",
    "types": [
      "fighting"
    ],
    "style": "Melee",
    "hitpoints": 50,
    "attack": 650,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nGet Swole Syrup à la Cube\n"
  },
  {
    "number": 107,
    "img": "https://www.serebii.net/quest/pokemon/107.png",
    "name": "Hitmonchan",
    "types": [
      "fighting"
    ],
    "style": "Melee",
    "hitpoints": 75,
    "attack": 625,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nGet Swole Syrup à la Cube\n"
  },
  {
    "number": 108,
    "img": "https://www.serebii.net/quest/pokemon/108.png",
    "name": "Lickitung",
    "types": [
      "normal"
    ],
    "style": "Melee",
    "hitpoints": 600,
    "attack": 100,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nPlain Crepe à la Cube\n"
  },
  {
    "number": 109,
    "img": "https://www.serebii.net/quest/pokemon/109.png",
    "name": "Koffing",
    "types": [
      "poison"
    ],
    "style": "Range",
    "hitpoints": 140,
    "attack": 60,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\nSludge Soup à la Cube\n"
  },
  {
    "number": 110,
    "img": "https://www.serebii.net/quest/pokemon/110.png",
    "name": "Weezing",
    "types": [
      "poison"
    ],
    "style": "Range",
    "hitpoints": 450,
    "attack": 350,
    "obtain_method": "Evolve Koffing (Lv. 35)"
  },
  {
    "number": 111,
    "img": "https://www.serebii.net/quest/pokemon/111.png",
    "name": "Rhyhorn",
    "types": [
      "ground",
      "rock"
    ],
    "style": "Melee",
    "hitpoints": 120,
    "attack": 80,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nMud Pie à la Cube\nStone Soup à la Cube\n"
  },
  {
    "number": 112,
    "img": "https://www.serebii.net/quest/pokemon/112.png",
    "name": "Rhydon",
    "types": [
      "ground",
      "rock"
    ],
    "style": "Melee",
    "hitpoints": 300,
    "attack": 500,
    "obtain_method": "Evolve Rhyhorn (Lv. 42)"
  },
  {
    "number": 113,
    "img": "https://www.serebii.net/quest/pokemon/113.png",
    "name": "Chansey",
    "types": [
      "normal"
    ],
    "style": "Melee",
    "hitpoints": 675,
    "attack": 25,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nPlain Crepe à la Cube\n"
  },
  {
    "number": 114,
    "img": "https://www.serebii.net/quest/pokemon/114.png",
    "name": "Tangela",
    "types": [
      "grass"
    ],
    "style": "Melee",
    "hitpoints": 400,
    "attack": 300,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\nVeggie Smoothie à la Cube\n"
  },
  {
    "number": 115,
    "img": "https://www.serebii.net/quest/pokemon/115.png",
    "name": "Kangaskhan",
    "types": [
      "normal"
    ],
    "style": "Melee",
    "hitpoints": 350,
    "attack": 350,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nPlain Crepe à la Cube\n"
  },
  {
    "number": 116,
    "img": "https://www.serebii.net/quest/pokemon/116.png",
    "name": "Horsea",
    "types": [
      "water"
    ],
    "style": "Range",
    "hitpoints": 90,
    "attack": 110,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\nMouth-Watering Dip à la Cube\n"
  },
  {
    "number": 117,
    "img": "https://www.serebii.net/quest/pokemon/117.png",
    "name": "Seadra",
    "types": [
      "water"
    ],
    "style": "Range",
    "hitpoints": 250,
    "attack": 450,
    "obtain_method": "Evolve Horsea (Lv. 37)"
  },
  {
    "number": 118,
    "img": "https://www.serebii.net/quest/pokemon/118.png",
    "name": "Goldeen",
    "types": [
      "water"
    ],
    "style": "Melee",
    "hitpoints": 70,
    "attack": 130,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nMouth-Watering Dip à la Cube\n"
  },
  {
    "number": 119,
    "img": "https://www.serebii.net/quest/pokemon/119.png",
    "name": "Seaking",
    "types": [
      "water"
    ],
    "style": "Melee",
    "hitpoints": 350,
    "attack": 450,
    "obtain_method": "Evolve Goldeen (Lv. 33)"
  },
  {
    "number": 120,
    "img": "https://www.serebii.net/quest/pokemon/120.png",
    "name": "Staryu",
    "types": [
      "water"
    ],
    "style": "Range",
    "hitpoints": 60,
    "attack": 140,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nMouth-Watering Dip à la Cube\n"
  },
  {
    "number": 121,
    "img": "https://www.serebii.net/quest/pokemon/121.png",
    "name": "Starmie",
    "types": [
      "water",
      "psychic"
    ],
    "style": "Range",
    "hitpoints": 150,
    "attack": 650,
    "obtain_method": "Evolve Staryu (Lv. 36)"
  },
  {
    "number": 122,
    "img": "https://www.serebii.net/quest/pokemon/122.png",
    "name": "Mr. Mime",
    "types": [
      "psychic",
      "fairy"
    ],
    "style": "Range",
    "hitpoints": 575,
    "attack": 125,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nBrain Food à la Cube\n"
  },
  {
    "number": 123,
    "img": "https://www.serebii.net/quest/pokemon/123.png",
    "name": "Scyther",
    "types": [
      "bug",
      "flying"
    ],
    "style": "Melee",
    "hitpoints": 100,
    "attack": 700,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nHoney Nectar à la Cube\nLight-as-Air Casserole à la Cube\n"
  },
  {
    "number": 124,
    "img": "https://www.serebii.net/quest/pokemon/124.png",
    "name": "Jynx",
    "types": [
      "ice",
      "psychic"
    ],
    "style": "Range",
    "hitpoints": 150,
    "attack": 550,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nBrain Food à la Cube\n"
  },
  {
    "number": 125,
    "img": "https://www.serebii.net/quest/pokemon/125.png",
    "name": "Electabuzz",
    "types": [
      "electric"
    ],
    "style": "Melee",
    "hitpoints": 300,
    "attack": 400,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nWatt a Risotto à la Cube\n"
  },
  {
    "number": 126,
    "img": "https://www.serebii.net/quest/pokemon/126.png",
    "name": "Magmar",
    "types": [
      "fire"
    ],
    "style": "Melee",
    "hitpoints": 175,
    "attack": 525,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nHot Pot à la Cube\n"
  },
  {
    "number": 127,
    "img": "https://www.serebii.net/quest/pokemon/127.png",
    "name": "Pinsir",
    "types": [
      "bug"
    ],
    "style": "Melee",
    "hitpoints": 75,
    "attack": 725,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nHoney Nectar à la Cube\n"
  },
  {
    "number": 128,
    "img": "https://www.serebii.net/quest/pokemon/128.png",
    "name": "Tauros",
    "types": [
      "normal"
    ],
    "style": "Melee",
    "hitpoints": 100,
    "attack": 600,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nPlain Crepe à la Cube\n"
  },
  {
    "number": 129,
    "img": "https://www.serebii.net/quest/pokemon/129.png",
    "name": "Magikarp",
    "types": [
      "water"
    ],
    "style": "Melee",
    "hitpoints": 25,
    "attack": 25,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\nMouth-Watering Dip à la Cube\n"
  },
  {
    "number": 130,
    "img": "https://www.serebii.net/quest/pokemon/130.png",
    "name": "Gyarados",
    "types": [
      "water",
      "flying"
    ],
    "style": "Melee",
    "hitpoints": 200,
    "attack": 400,
    "obtain_method": "Evolve Magikarp (Lv. 20)"
  },
  {
    "number": 131,
    "img": "https://www.serebii.net/quest/pokemon/131.png",
    "name": "Lapras",
    "types": [
      "water",
      "ice"
    ],
    "style": "Range",
    "hitpoints": 650,
    "attack": 150,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\nMouth-Watering Dip à la Cube\n"
  },
  {
    "number": 132,
    "img": "https://www.serebii.net/quest/pokemon/132.png",
    "name": "Ditto",
    "types": [
      "normal"
    ],
    "style": "Range",
    "hitpoints": 350,
    "attack": 350,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\nPlain Crepe à la Cube\n"
  },
  {
    "number": 133,
    "img": "https://www.serebii.net/quest/pokemon/133.png",
    "name": "Eevee",
    "types": [
      "normal"
    ],
    "style": "Melee",
    "hitpoints": 100,
    "attack": 100,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nPlain Crepe à la Cube\n"
  },
  {
    "number": 134,
    "img": "https://www.serebii.net/quest/pokemon/134.png",
    "name": "Vaporeon",
    "types": [
      "water"
    ],
    "style": "Melee",
    "hitpoints": 600,
    "attack": 200,
    "obtain_method": "Evolve Eevee (Lv. 36 - Only HP Power Stones attached)"
  },
  {
    "number": 135,
    "img": "https://www.serebii.net/quest/pokemon/135.png",
    "name": "Jolteon",
    "types": [
      "electric"
    ],
    "style": "Melee",
    "hitpoints": 250,
    "attack": 550,
    "obtain_method": "Evolve Eevee (Lv. 36 - An equal mix of HP & ATK Power Stones attached)"
  },
  {
    "number": 136,
    "img": "https://www.serebii.net/quest/pokemon/136.png",
    "name": "Flareon",
    "types": [
      "fire"
    ],
    "style": "Melee",
    "hitpoints": 200,
    "attack": 600,
    "obtain_method": "Evolve Eevee (Lv. 36 - Only ATK Power Stones attached)"
  },
  {
    "number": 137,
    "img": "https://www.serebii.net/quest/pokemon/137.png",
    "name": "Porygon",
    "types": [
      "normal"
    ],
    "style": "Range",
    "hitpoints": 350,
    "attack": 350,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nPlain Crepe à la Cube\n"
  },
  {
    "number": 138,
    "img": "https://www.serebii.net/quest/pokemon/138.png",
    "name": "Omanyte",
    "types": [
      "rock",
      "water"
    ],
    "style": "Range",
    "hitpoints": 140,
    "attack": 60,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\nMouth-Watering Dip à la Cube\nStone Soup à la Cube\n"
  },
  {
    "number": 139,
    "img": "https://www.serebii.net/quest/pokemon/139.png",
    "name": "Omastar",
    "types": [
      "rock",
      "water"
    ],
    "style": "Range",
    "hitpoints": 575,
    "attack": 225,
    "obtain_method": "Evolve Omanyte (Lv. 40)"
  },
  {
    "number": 140,
    "img": "https://www.serebii.net/quest/pokemon/140.png",
    "name": "Kabuto",
    "types": [
      "rock",
      "water"
    ],
    "style": "Melee",
    "hitpoints": 70,
    "attack": 130,
    "obtain_method": "Mulligan Stew à la Cube\nRed Stew à la Cube\nMouth-Watering Dip à la Cube\nStone Soup à la Cube\n"
  },
  {
    "number": 141,
    "img": "https://www.serebii.net/quest/pokemon/141.png",
    "name": "Kabutops",
    "types": [
      "rock",
      "water"
    ],
    "style": "Melee",
    "hitpoints": 150,
    "attack": 650,
    "obtain_method": "Evolve Kabuto (Lv. 40)"
  },
  {
    "number": 142,
    "img": "https://www.serebii.net/quest/pokemon/142.png",
    "name": "Aerodactyl",
    "types": [
      "rock",
      "flying"
    ],
    "style": "Melee",
    "hitpoints": 125,
    "attack": 675,
    "obtain_method": "Mulligan Stew à la Cube\nGray Porridge à la Cube\nStone Soup à la Cube\nLight-as-Air Casserole à la Cube\n"
  },
  {
    "number": 143,
    "img": "https://www.serebii.net/quest/pokemon/143.png",
    "name": "Snorlax",
    "types": [
      "normal"
    ],
    "style": "Melee",
    "hitpoints": 650,
    "attack": 150,
    "obtain_method": "Mulligan Stew à la Cube\nYellow Curry à la Cube\nPlain Crepe à la Cube\n"
  },
  {
    "number": 144,
    "img": "https://www.serebii.net/quest/pokemon/144.png",
    "name": "Articuno",
    "types": [
      "ice",
      "flying"
    ],
    "style": "Range",
    "hitpoints": 600,
    "attack": 400,
    "obtain_method": "Ambrosia of Legends à la Cube\n"
  },
  {
    "number": 145,
    "img": "https://www.serebii.net/quest/pokemon/145.png",
    "name": "Zapdos",
    "types": [
      "electric",
      "flying"
    ],
    "style": "Range",
    "hitpoints": 350,
    "attack": 650,
    "obtain_method": "Ambrosia of Legends à la Cube\n"
  },
  {
    "number": 146,
    "img": "https://www.serebii.net/quest/pokemon/146.png",
    "name": "Moltres",
    "types": [
      "fire",
      "flying"
    ],
    "style": "Range",
    "hitpoints": 500,
    "attack": 500,
    "obtain_method": "Ambrosia of Legends à la Cube\n"
  },
  {
    "number": 147,
    "img": "https://www.serebii.net/quest/pokemon/147.png",
    "name": "Dratini",
    "types": [
      "dragon"
    ],
    "style": "Melee",
    "hitpoints": 80,
    "attack": 120,
    "obtain_method": "Mulligan Stew à la Cube\nBlue Soda à la Cube\n"
  },
  {
    "number": 148,
    "img": "https://www.serebii.net/quest/pokemon/148.png",
    "name": "Dragonair",
    "types": [
      "dragon"
    ],
    "style": "Melee",
    "hitpoints": 300,
    "attack": 400,
    "obtain_method": "Evolve Dratini (Lv. 30)"
  },
  {
    "number": 149,
    "img": "https://www.serebii.net/quest/pokemon/149.png",
    "name": "Dragonite",
    "types": [
      "dragon",
      "flying"
    ],
    "style": "Melee",
    "hitpoints": 400,
    "attack": 500,
    "obtain_method": "Evolve Dragonair (Lv. 55)"
  },
  {
    "number": 150,
    "img": "https://www.serebii.net/quest/pokemon/150.png",
    "name": "Mewtwo",
    "types": [
      "psychic"
    ],
    "style": "Range",
    "hitpoints": 550,
    "attack": 750,
    "obtain_method": "Ambrosia of Legends à la Cube\n"
  },
  {
    "number": 151,
    "img": "https://www.serebii.net/quest/pokemon/151.png",
    "name": "Mew",
    "types": [
      "psychic"
    ],
    "style": "Range",
    "hitpoints": 650,
    "attack": 650,
    "obtain_method": "Ambrosia of Legends à la Cube\n"
  }
];
