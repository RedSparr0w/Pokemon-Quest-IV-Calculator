$(document).ready(function(){
  // Add each of the pokemon options to the select element
  Object.keys(allPokemon).forEach(function(pokemon, index){
    $('#pokemon').append($('<option>', {
      value: pokemon,
      text : pokemon + ' #' + allPokemon[pokemon].dex
    }));
  });

  $('#pokemon').change(function(){
    var pokemon = document.getElementById('pokemon').value;
    // Remember last selected pokemon
    if (window.localStorage){
      window.localStorage.pokemon = pokemon;
    }
    pokemon = allPokemon[pokemon];

    // Update image top currently selected pokemon
    document.getElementById('pokemon_img').src = pokemon.img

    // Set minimum value, and placeholder value to current pokemons base values
    document.getElementById('hitpoints').placeholder = pokemon['hitpoints'] + ' - ' + (pokemon['hitpoints'] + 500);
    document.getElementById('hitpoints').min = pokemon['hitpoints'];
    document.getElementById('hitpoints').max = pokemon['hitpoints'] + 500;
    document.getElementById('hitpoints').value = '';
    document.getElementById('attack').placeholder = pokemon['attack'] + ' - ' + (pokemon['attack'] + 500);
    document.getElementById('attack').min = pokemon['attack'];
    document.getElementById('attack').max = pokemon['attack'] + 500;
    document.getElementById('attack').value = '';
    document.getElementById('level').value = '';

    updateFields();
  });
  $('input').change(function(){
    updateFields();
  })

  // Set to last selected pokemon
  if (window.localStorage){
    document.getElementById('pokemon').value = window.localStorage.pokemon || 'Bulbasaur';
  }
  $('#pokemon').change();
});

function updateFields(){
  formdata = {};
  $("form").serializeArray().forEach(function(obj, index){
      formdata[obj.name] = obj.value;
  });
  pokemon = allPokemon[formdata['pokemon']];

  // Update the valculated IV's
  document.getElementById('hitpoints_iv').innerText = calcIV(pokemon['hitpoints'], +formdata['hitpoints'], +formdata['level']);
  document.getElementById('attack_iv').innerText = calcIV(pokemon['attack'], +formdata['attack'], +formdata['level']);
  // Add attack + hp then devide by 2 to get the total IV value
  document.getElementById('total_iv').innerText = calcIV((pokemon['attack'] + pokemon['hitpoints']) / 2, (+formdata['attack'] + +formdata['hitpoints']) / 2, +formdata['level']);
}

function calcIV(base_attack, current_attack, level){
	base_attack += level;
	var diff = current_attack - base_attack;
	if (diff >= 0 && diff <= 10) // Brass Pot
    return (diff * 10) + '% (brass)';
	else if (diff >= 50 && diff <= 100) // Bronze Pot
    return ((diff - 50) * 2) + '% (bronze)';
	else if (diff >= 100 && diff <= 250) // Silver Pot (serebii says it's a range of 100, but i have multiple pokemon in the range of 150 - mobile edition)
    return (diff - 150) + '% (silver)';
	else if (diff >= 251 && diff <= 299) // No pokemon should be in this range (maybe silver, but have yet to find any)
    return '¯\\_(ツ)_/¯';
	else if (diff >= 300 && diff <= 400) // Gold Pot
    return (diff - 300) + '% (gold)';
  else // Still entering value ?
    return 'N/A';
}
