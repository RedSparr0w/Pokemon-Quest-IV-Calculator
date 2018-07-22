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
    var pokemon_image = document.getElementById('pokemon_img'),
        serebii_link = document.getElementById('serebii_link');
    pokemon_image.src = 'images/icons/pokeball.svg';
    pokemon_image.src = 'images/pokemon/' + pokemon.dex + '.svg';
    serebii_link.href = 'https://www.serebii.net/quest/pokemon/' + pokemon.dex + '.shtml';

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

  // Temp - Show/Hide total IV based on setting
  toggleTotalIV();
});

function updateIVs(){
  var baseStats = allPokemon[document.getElementById('pokemon').value],
      myStats = {
        level: +document.getElementById('level').value,
        hitpoints: +document.getElementById('hitpoints').value,
        attack: +document.getElementById('attack').value,
      };

  // Update the valculated IV's
  var IVs = getIV(baseStats, myStats);
  document.getElementById('hitpoints_iv').innerText = IVs.hitpoints.string || 'N/A';
  document.getElementById('attack_iv').innerText = IVs.attack.string || 'N/A';
  document.getElementById('total_iv').innerText = IVs.total.string || 'N/A';
}

function calculateIV(base, current, level){
  var IVs,
      diff = current - (base + level);
  if (!getSetting('group_iv_by_pot', true) && diff >= 0 && diff <= 400)
    IVs = {
        value: diff,
        max: 400,
        pot: 'overall',
      };
  else if (diff >= 0 && diff <= 10) // Brass Pot
    IVs = {
        value: diff,
        max: 10,
        pot: 'brass',
      };
	else if (diff >= 50 && diff <= 100) // Bronze Pot
    IVs = {
        value: diff - 50,
        max: 50,
        pot: 'bronze',
      };
	else if (diff >= 150 && diff <= 250) // Silver Pot
    IVs = {
        value: diff - 150,
        max: 100,
        pot: 'silver',
      };
	else if (diff >= 300 && diff <= 400) // Gold Pot
    IVs = {
        value: diff - 300,
        max: 100,
        pot: 'gold',
      };
  else // Still entering value ?
    return false;

  IVs.string = (getSetting('show_iv_as_percent', true) ? +((IVs.value / IVs.max) * 100).toFixed(2) + '%' : IVs.value + '/' + IVs.max) + ' (' + IVs.pot + ')';
  return IVs;
}

function totalIV(hitpoints, attack){
  if (!hitpoints || !attack)
    return false;
  else
    var IVs = {
        value: hitpoints.value + attack.value,
        max: hitpoints.max + attack.max,
        pot: hitpoints.pot === attack.pot ? hitpoints.pot : 'unknown',
      };

  IVs.string = (getSetting('show_iv_as_percent', true) ? +((IVs.value / IVs.max) * 100).toFixed(2) + '%' : IVs.value + '/' + IVs.max) + ' (' + IVs.pot + ')';
  return IVs;
}

function getIV(base, current){
  var hitpoints = calculateIV(base['hitpoints'], current['hitpoints'], current['level']),
      attack = calculateIV(base['attack'], current['attack'], current['level']),
      total = totalIV(hitpoints, attack);
  return {
    hitpoints,
    attack,
    total,
  }
}

function toggleTotalIV(show){
  show = show !== undefined ? show : getSetting('show_total_iv', true);
  if (show)
    $('#total_iv').fadeIn();
  else
    $('#total_iv').fadeOut();
}
