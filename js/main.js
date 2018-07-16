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
    document.getElementById('pokemon_img').src = 'images/icons/pokeball.svg';
    document.getElementById('pokemon_img').src = 'images/pokemon/' + pokemon.dex + '.svg';

    var hitpoints = document.getElementById('hitpoints'),
        attack = document.getElementById('attack'),
        level = document.getElementById('level');
    // Set minimum value, and placeholder value to current pokemons base values, clear current value
    hitpoints.placeholder = pokemon['hitpoints'] + ' - ' + (pokemon['hitpoints'] + 500);
    hitpoints.min = pokemon['hitpoints'];
    hitpoints.max = pokemon['hitpoints'] + 500;
    hitpoints.value = '';
    attack.placeholder = pokemon['attack'] + ' - ' + (pokemon['attack'] + 500);
    attack.min = pokemon['attack'];
    attack.max = pokemon['attack'] + 500;
    attack.value = '';
    level.value = '';

    updateFields();
  });

  $('input').on('input', function(){
    updateFields();
  });

  // Set to last selected pokemon
  if (window.localStorage){
    document.getElementById('pokemon').value = window.localStorage.pokemon || 'Bulbasaur';
  }
  $('#pokemon').change();
});

function updateFields(){
  var pokemon = allPokemon[document.getElementById('pokemon').value],
      level = +document.getElementById('level').value,
      hitpoints = +document.getElementById('hitpoints').value,
      attack = +document.getElementById('attack').value;

  // Update the valculated IV's
  document.getElementById('hitpoints_iv').innerText = calcIV(pokemon['hitpoints'], hitpoints, level);
  document.getElementById('attack_iv').innerText = calcIV(pokemon['attack'], attack, level);
  // Add attack + hp then devide by 2 to get the total IV value
  document.getElementById('total_iv').innerText = calcIV((pokemon['attack'] + pokemon['hitpoints']) / 2, (attack + hitpoints) / 2, level);
}

function calcIV(base, current, level){
	var diff = current - (base + level);
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
