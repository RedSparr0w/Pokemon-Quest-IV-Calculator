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
var allPokemon = {
  "Bulbasaur": {
    "dex": "001",
    "hitpoints": 125,
    "attack": 75
  },
  "Ivysaur": {
    "dex": "002",
    "hitpoints": 400,
    "attack": 100
  },
  "Venusaur": {
    "dex": "003",
    "hitpoints": 550,
    "attack": 150
  },
  "Charmander": {
    "dex": "004",
    "hitpoints": 75,
    "attack": 125
  },
  "Charmeleon": {
    "dex": "005",
    "hitpoints": 100,
    "attack": 400
  },
  "Charizard": {
    "dex": "006",
    "hitpoints": 200,
    "attack": 600
  },
  "Squirtle": {
    "dex": "007",
    "hitpoints": 100,
    "attack": 100
  },
  "Wartortle": {
    "dex": "008",
    "hitpoints": 250,
    "attack": 250
  },
  "Blastoise": {
    "dex": "009",
    "hitpoints": 400,
    "attack": 400
  },
  "Caterpie": {
    "dex": "010",
    "hitpoints": 110,
    "attack": 90
  },
  "Metapod": {
    "dex": "011",
    "hitpoints": 275,
    "attack": 25
  },
  "Butterfree": {
    "dex": "012",
    "hitpoints": 150,
    "attack": 250
  },
  "Weedle": {
    "dex": "013",
    "hitpoints": 100,
    "attack": 100
  },
  "Kakuna": {
    "dex": "014",
    "hitpoints": 250,
    "attack": 50
  },
  "Beedrill": {
    "dex": "015",
    "hitpoints": 150,
    "attack": 250
  },
  "Pidgey": {
    "dex": "016",
    "hitpoints": 100,
    "attack": 100
  },
  "Pidgeotto": {
    "dex": "017",
    "hitpoints": 250,
    "attack": 250
  },
  "Pidgeot": {
    "dex": "018",
    "hitpoints": 400,
    "attack": 400
  },
  "Rattata": {
    "dex": "019",
    "hitpoints": 75,
    "attack": 125
  },
  "Raticate": {
    "dex": "020",
    "hitpoints": 150,
    "attack": 450
  },
  "Spearow": {
    "dex": "021",
    "hitpoints": 75,
    "attack": 125
  },
  "Fearow": {
    "dex": "022",
    "hitpoints": 100,
    "attack": 500
  },
  "Ekans": {
    "dex": "023",
    "hitpoints": 80,
    "attack": 120
  },
  "Arbok": {
    "dex": "024",
    "hitpoints": 150,
    "attack": 450
  },
  "Pikachu": {
    "dex": "025",
    "hitpoints": 70,
    "attack": 130
  },
  "Raichu": {
    "dex": "026",
    "hitpoints": 150,
    "attack": 450
  },
  "Sandshrew": {
    "dex": "027",
    "hitpoints": 80,
    "attack": 120
  },
  "Sandslash": {
    "dex": "028",
    "hitpoints": 150,
    "attack": 350
  },
  "Nidoran♀": {
    "dex": "029",
    "hitpoints": 140,
    "attack": 60
  },
  "Nidorina": {
    "dex": "030",
    "hitpoints": 325,
    "attack": 175
  },
  "Nidoqueen": {
    "dex": "031",
    "hitpoints": 600,
    "attack": 200
  },
  "Nidoran♂": {
    "dex": "032",
    "hitpoints": 60,
    "attack": 140
  },
  "Nidorino": {
    "dex": "033",
    "hitpoints": 175,
    "attack": 325
  },
  "Nidoking": {
    "dex": "034",
    "hitpoints": 200,
    "attack": 600
  },
  "Clefairy": {
    "dex": "035",
    "hitpoints": 120,
    "attack": 80
  },
  "Clefable": {
    "dex": "036",
    "hitpoints": 450,
    "attack": 250
  },
  "Vulpix": {
    "dex": "037",
    "hitpoints": 110,
    "attack": 90
  },
  "Ninetales": {
    "dex": "038",
    "hitpoints": 550,
    "attack": 250
  },
  "Jigglypuff": {
    "dex": "039",
    "hitpoints": 140,
    "attack": 60
  },
  "Wigglytuff": {
    "dex": "040",
    "hitpoints": 450,
    "attack": 150
  },
  "Zubat": {
    "dex": "041",
    "hitpoints": 80,
    "attack": 120
  },
  "Golbat": {
    "dex": "042",
    "hitpoints": 200,
    "attack": 400
  },
  "Oddish": {
    "dex": "043",
    "hitpoints": 75,
    "attack": 125
  },
  "Gloom": {
    "dex": "044",
    "hitpoints": 250,
    "attack": 350
  },
  "Vileplume": {
    "dex": "045",
    "hitpoints": 300,
    "attack": 500
  },
  "Paras": {
    "dex": "046",
    "hitpoints": 80,
    "attack": 120
  },
  "Parasect": {
    "dex": "047",
    "hitpoints": 200,
    "attack": 500
  },
  "Venonat": {
    "dex": "048",
    "hitpoints": 120,
    "attack": 80
  },
  "Venomoth": {
    "dex": "049",
    "hitpoints": 350,
    "attack": 350
  },
  "Diglett": {
    "dex": "050",
    "hitpoints": 60,
    "attack": 140
  },
  "Dugtrio": {
    "dex": "051",
    "hitpoints": 100,
    "attack": 600
  },
  "Meowth": {
    "dex": "052",
    "hitpoints": 85,
    "attack": 115
  },
  "Persian": {
    "dex": "053",
    "hitpoints": 300,
    "attack": 400
  },
  "Psyduck": {
    "dex": "054",
    "hitpoints": 80,
    "attack": 120
  },
  "Golduck": {
    "dex": "055",
    "hitpoints": 200,
    "attack": 500
  },
  "Mankey": {
    "dex": "056",
    "hitpoints": 60,
    "attack": 140
  },
  "Primeape": {
    "dex": "057",
    "hitpoints": 150,
    "attack": 550
  },
  "Growlithe": {
    "dex": "058",
    "hitpoints": 80,
    "attack": 120
  },
  "Arcanine": {
    "dex": "059",
    "hitpoints": 350,
    "attack": 450
  },
  "Poliwag": {
    "dex": "060",
    "hitpoints": 90,
    "attack": 110
  },
  "Poliwhirl": {
    "dex": "061",
    "hitpoints": 350,
    "attack": 350
  },
  "Poliwrath": {
    "dex": "062",
    "hitpoints": 350,
    "attack": 450
  },
  "Abra": {
    "dex": "063",
    "hitpoints": 45,
    "attack": 155
  },
  "Kadabra": {
    "dex": "064",
    "hitpoints": 90,
    "attack": 410
  },
  "Alakazam": {
    "dex": "065",
    "hitpoints": 100,
    "attack": 700
  },
  "Machop": {
    "dex": "066",
    "hitpoints": 80,
    "attack": 120
  },
  "Machoke": {
    "dex": "067",
    "hitpoints": 200,
    "attack": 500
  },
  "Machamp": {
    "dex": "068",
    "hitpoints": 250,
    "attack": 550
  },
  "Bellsprout": {
    "dex": "069",
    "hitpoints": 80,
    "attack": 120
  },
  "Weepinbell": {
    "dex": "070",
    "hitpoints": 250,
    "attack": 350
  },
  "Victreebel": {
    "dex": "071",
    "hitpoints": 300,
    "attack": 500
  },
  "Tentacool": {
    "dex": "072",
    "hitpoints": 90,
    "attack": 110
  },
  "Tentacruel": {
    "dex": "073",
    "hitpoints": 550,
    "attack": 150
  },
  "Geodude": {
    "dex": "074",
    "hitpoints": 140,
    "attack": 60
  },
  "Graveler": {
    "dex": "075",
    "hitpoints": 610,
    "attack": 90
  },
  "Golem": {
    "dex": "076",
    "hitpoints": 700,
    "attack": 100
  },
  "Ponyta": {
    "dex": "077",
    "hitpoints": 100,
    "attack": 100
  },
  "Rapidash": {
    "dex": "078",
    "hitpoints": 400,
    "attack": 400
  },
  "Slowpoke": {
    "dex": "079",
    "hitpoints": 130,
    "attack": 70
  },
  "Slowbro": {
    "dex": "080",
    "hitpoints": 650,
    "attack": 150
  },
  "Magnemite": {
    "dex": "081",
    "hitpoints": 80,
    "attack": 120
  },
  "Magneton": {
    "dex": "082",
    "hitpoints": 300,
    "attack": 400
  },
  "Farfetch'd": {
    "dex": "083",
    "hitpoints": 350,
    "attack": 350
  },
  "Doduo": {
    "dex": "084",
    "hitpoints": 80,
    "attack": 120
  },
  "Dodrio": {
    "dex": "085",
    "hitpoints": 200,
    "attack": 500
  },
  "Seel": {
    "dex": "086",
    "hitpoints": 110,
    "attack": 90
  },
  "Dewgong": {
    "dex": "087",
    "hitpoints": 500,
    "attack": 200
  },
  "Grimer": {
    "dex": "088",
    "hitpoints": 110,
    "attack": 90
  },
  "Muk": {
    "dex": "089",
    "hitpoints": 650,
    "attack": 150
  },
  "Shellder": {
    "dex": "090",
    "hitpoints": 120,
    "attack": 80
  },
  "Cloyster": {
    "dex": "091",
    "hitpoints": 575,
    "attack": 225
  },
  "Gastly": {
    "dex": "092",
    "hitpoints": 50,
    "attack": 150
  },
  "Haunter": {
    "dex": "093",
    "hitpoints": 125,
    "attack": 575
  },
  "Gengar": {
    "dex": "094",
    "hitpoints": 150,
    "attack": 650
  },
  "Onix": {
    "dex": "095",
    "hitpoints": 600,
    "attack": 100
  },
  "Drowzee": {
    "dex": "096",
    "hitpoints": 120,
    "attack": 80
  },
  "Hypno": {
    "dex": "097",
    "hitpoints": 500,
    "attack": 200
  },
  "Krabby": {
    "dex": "098",
    "hitpoints": 70,
    "attack": 130
  },
  "Kingler": {
    "dex": "099",
    "hitpoints": 100,
    "attack": 600
  },
  "Voltorb": {
    "dex": "100",
    "hitpoints": 110,
    "attack": 90
  },
  "Electrode": {
    "dex": "101",
    "hitpoints": 400,
    "attack": 300
  },
  "Exeggcute": {
    "dex": "102",
    "hitpoints": 130,
    "attack": 70
  },
  "Exeggutor": {
    "dex": "103",
    "hitpoints": 250,
    "attack": 550
  },
  "Cubone": {
    "dex": "104",
    "hitpoints": 130,
    "attack": 70
  },
  "Marowak": {
    "dex": "105",
    "hitpoints": 525,
    "attack": 175
  },
  "Hitmonlee": {
    "dex": "106",
    "hitpoints": 50,
    "attack": 650
  },
  "Hitmonchan": {
    "dex": "107",
    "hitpoints": 75,
    "attack": 625
  },
  "Lickitung": {
    "dex": "108",
    "hitpoints": 600,
    "attack": 100
  },
  "Koffing": {
    "dex": "109",
    "hitpoints": 140,
    "attack": 60
  },
  "Weezing": {
    "dex": "110",
    "hitpoints": 450,
    "attack": 350
  },
  "Rhyhorn": {
    "dex": "111",
    "hitpoints": 120,
    "attack": 80
  },
  "Rhydon": {
    "dex": "112",
    "hitpoints": 300,
    "attack": 500
  },
  "Chansey": {
    "dex": "113",
    "hitpoints": 675,
    "attack": 25
  },
  "Tangela": {
    "dex": "114",
    "hitpoints": 400,
    "attack": 300
  },
  "Kangaskhan": {
    "dex": "115",
    "hitpoints": 350,
    "attack": 350
  },
  "Horsea": {
    "dex": "116",
    "hitpoints": 90,
    "attack": 110
  },
  "Seadra": {
    "dex": "117",
    "hitpoints": 250,
    "attack": 450
  },
  "Goldeen": {
    "dex": "118",
    "hitpoints": 70,
    "attack": 130
  },
  "Seaking": {
    "dex": "119",
    "hitpoints": 350,
    "attack": 450
  },
  "Staryu": {
    "dex": "120",
    "hitpoints": 60,
    "attack": 140
  },
  "Starmie": {
    "dex": "121",
    "hitpoints": 150,
    "attack": 650
  },
  "Mr. Mime": {
    "dex": "122",
    "hitpoints": 575,
    "attack": 125
  },
  "Scyther": {
    "dex": "123",
    "hitpoints": 100,
    "attack": 700
  },
  "Jynx": {
    "dex": "124",
    "hitpoints": 150,
    "attack": 550
  },
  "Electabuzz": {
    "dex": "125",
    "hitpoints": 300,
    "attack": 400
  },
  "Magmar": {
    "dex": "126",
    "hitpoints": 175,
    "attack": 525
  },
  "Pinsir": {
    "dex": "127",
    "hitpoints": 75,
    "attack": 725
  },
  "Tauros": {
    "dex": "128",
    "hitpoints": 100,
    "attack": 600
  },
  "Magikarp": {
    "dex": "129",
    "hitpoints": 25,
    "attack": 25
  },
  "Gyarados": {
    "dex": "130",
    "hitpoints": 200,
    "attack": 400
  },
  "Lapras": {
    "dex": "131",
    "hitpoints": 650,
    "attack": 150
  },
  "Ditto": {
    "dex": "132",
    "hitpoints": 350,
    "attack": 350
  },
  "Eevee": {
    "dex": "133",
    "hitpoints": 100,
    "attack": 100
  },
  "Vaporeon": {
    "dex": "134",
    "hitpoints": 600,
    "attack": 200
  },
  "Jolteon": {
    "dex": "135",
    "hitpoints": 250,
    "attack": 550
  },
  "Flareon": {
    "dex": "136",
    "hitpoints": 200,
    "attack": 600
  },
  "Porygon": {
    "dex": "137",
    "hitpoints": 350,
    "attack": 350
  },
  "Omanyte": {
    "dex": "138",
    "hitpoints": 140,
    "attack": 60
  },
  "Omastar": {
    "dex": "139",
    "hitpoints": 575,
    "attack": 225
  },
  "Kabuto": {
    "dex": "140",
    "hitpoints": 70,
    "attack": 130
  },
  "Kabutops": {
    "dex": "141",
    "hitpoints": 150,
    "attack": 650
  },
  "Aerodactyl": {
    "dex": "142",
    "hitpoints": 125,
    "attack": 675
  },
  "Snorlax": {
    "dex": "143",
    "hitpoints": 650,
    "attack": 150
  },
  "Articuno": {
    "dex": "144",
    "hitpoints": 600,
    "attack": 400
  },
  "Zapdos": {
    "dex": "145",
    "hitpoints": 350,
    "attack": 650
  },
  "Moltres": {
    "dex": "146",
    "hitpoints": 500,
    "attack": 500
  },
  "Dratini": {
    "dex": "147",
    "hitpoints": 80,
    "attack": 120
  },
  "Dragonair": {
    "dex": "148",
    "hitpoints": 300,
    "attack": 400
  },
  "Dragonite": {
    "dex": "149",
    "hitpoints": 400,
    "attack": 500
  },
  "Mewtwo": {
    "dex": "150",
    "hitpoints": 550,
    "attack": 750
  },
  "Mew": {
    "dex": "151",
    "hitpoints": 650,
    "attack": 650
  }
};
