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

updatePlaylist(playlist,NeYo,'So Sick')
console.log(playlist)

function removeFromPlaylist(obj,key) {
  delete obj.key 
  return obj 
}

removeFromPlaylist(playlist,NeYo)
console.log(playlist)
