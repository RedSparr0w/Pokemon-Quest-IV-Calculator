var version = '1.0.0';

// Add functions here to keep settings compatibility between versions if they happen to change in the future
function setVersion(version){
  if (!window.localStorage)
    return false;
  window.localStorage.version = version;
  return window.localStorage.version;
}

function getVersion(){
  if (!window.localStorage)
    return false;

  return window.localStorage.version;
}

function isVersionNewer(current, last){
  current = current.split('.');
  last = last.split('.');
}
