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
    pokemon = allPokemon[pokemon];

    // Save setting - Remember last selected pokemon
    saveSetting(document.getElementById('pokemon'));

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

    updateIVs();
  }).val(getSetting('pokemon', 'Bulbasaur')).change();

  $('input').on('input', function(){
    updateIVs();
  });
});

function updateIVs(){
  var pokemon = allPokemon[document.getElementById('pokemon').value],
      level = +document.getElementById('level').value,
      hitpoints = +document.getElementById('hitpoints').value,
      attack = +document.getElementById('attack').value;

  // Update the valculated IV's
  document.getElementById('hitpoints_iv').innerText = calcIV(pokemon['hitpoints'], hitpoints, level);
  document.getElementById('attack_iv').innerText = calcIV(pokemon['attack'], attack, level);
}

function calcIV(base, current, level){
  var group_by_pot = getSetting('group_iv_by_pot', true);
  var percentage = getSetting('show_iv_as_percent', true);
	var diff = current - (base + level);
  if (!group_by_pot && diff >= 0 && diff <= 400)
    return (percentage ? (diff / 4) + '%' : diff + '/400') + ' (overall)';
  else if (diff >= 0 && diff <= 10) // Brass Pot
    return (percentage ? (diff * 10) + '%' : diff + '/10') + ' (brass)';
	else if (diff >= 50 && diff <= 100) // Bronze Pot
    return (percentage ? ((diff - 50) * 2) + '%' : (diff - 50) + '/50') + ' (bronze)';
	else if (diff >= 150 && diff <= 250) // Silver Pot
    return (diff - 150) + (percentage ? '%' : '/100') + ' (silver)';
	else if (diff >= 251 && diff <= 299) // No pokemon should be in this range
    return '¯\\_(ツ)_/¯';
	else if (diff >= 300 && diff <= 400) // Gold Pot
    return (diff - 300) + (percentage ? '%' : '/100') + ' (gold)';
  else // Still entering value ?
    return 'N/A';
}
