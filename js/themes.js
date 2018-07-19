// Bootstrap 4 themes, Thanks to https://bootswatch.com
var themes = {
    'Default Theme': '',
    'Cerulean': 'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/cerulean/bootstrap.min.css',
    'Cosmo': 'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/cosmo/bootstrap.min.css',
    'Cyborg': 'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/cyborg/bootstrap.min.css',
    'Darkly': 'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/darkly/bootstrap.min.css',
    'Flatly': 'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/flatly/bootstrap.min.css',
    'Journal': 'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/journal/bootstrap.min.css',
    'Litera': 'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/litera/bootstrap.min.css',
    'Lumen': 'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/lumen/bootstrap.min.css',
    'Lux': 'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/lux/bootstrap.min.css',
    'Materia': 'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/materia/bootstrap.min.css',
    'Minty': 'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/minty/bootstrap.min.css',
    'Pulse': 'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/pulse/bootstrap.min.css',
    'Sandstone': 'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/sandstone/bootstrap.min.css',
    'Simplex': 'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/simplex/bootstrap.min.css',
    'Sketchy': 'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/sketchy/bootstrap.min.css',
    'Slate': 'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/slate/bootstrap.min.css',
    'Solar': 'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/solar/bootstrap.min.css',
    'Spacelab': 'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/spacelab/bootstrap.min.css',
    'Superhero': 'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/superhero/bootstrap.min.css',
    'United': 'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/united/bootstrap.min.css',
    'Yeti': 'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/yeti/bootstrap.min.css',
};

(function() {
  var themeSelect = document.getElementById('theme');
  Object.keys(themes).forEach(function(theme, index){
    var option = document.createElement('option');
    option.text = theme;
    themeSelect.appendChild(option);
  });

  themeSelect.onchange = function(){
    var theme = themeSelect.value;
    document.getElementById('set-theme').href = themes[theme];
  }

  // Set theme from settings
  var theme = getSetting('theme', 'Default Theme');
  if (themes[theme] === undefined)
    return;
  document.getElementById('set-theme').href = themes[theme];
  themeSelect.value = theme;
})();
