var playlist = {
  IU:'Good Day',
  GD:'Who You',
  CeeLoGr:'Fuck You'
  
};

console.log(playlist)

function updatePlaylist(obj,key,value) {
  obj[key] = value
  return obj
}

updatePlaylist(playlist,neyo,sosick)
console.log(playlist)

function removeFromPlaylist(obj,key) {
  delete obj.key 
  return obj 
}

console.log(playlist)
