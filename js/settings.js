var settings = {};
if (!window.localStorage)
  window.localStorage = {};

(function() {
  Object.keys(window.localStorage).forEach(function(setting){
    var el = document.getElementById(setting);
    if (!el)
      return;
    switch (el.type){
      case 'checkbox':
        settings[setting] = Boolean(+window.localStorage[setting]);
        el.checked = settings[setting];
        break;
      case 'number':
        settings[setting] = +window.localStorage[setting];
        el.value = settings[setting];
        break;
      default:
        settings[setting] = window.localStorage[setting];
        el.value = settings[setting];
    }
  });
})();

function saveSetting(el){
  var setting = el.name;
  switch (el.type){
    case 'checkbox':
      settings[setting] = el.checked;
      window.localStorage[setting] = +el.checked;
      break;
    case 'number':
      settings[setting] = el.value;
      window.localStorage[setting] = +el.value;
      break;
    default:
      settings[setting] = el.value;
      window.localStorage[setting] = el.value;
  }
}

function getSetting(setting, defaultValue){
  return settings[setting] !== undefined ? settings[setting] : defaultValue;
}
