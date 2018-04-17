var playlist = {
  IU:'Good Day',
  GD:'Who You',
  CeeLoGr:'Fuck You'
  
};

function updatePlaylist(obj,key,value) {
  obj[key] = value
  return obj
}

function removeFromPlaylist(obj,key) {
  delete obj.key 
  return obj 
}

