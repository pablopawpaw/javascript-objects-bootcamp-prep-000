const playlist = {
  IU:'Good Day',
  GD:'Who You',
  CeeLoGr:'Fuck You'
  
};

console.log(playlist)

function updatePlaylist(obj, key, value) {
  var updObj= obj[key] = value
  return updObj
}

updatePlaylist(playlist,'NeYo','So Sick')
console.log(playlist)

function removeFromPlaylist(obj,key) {
  var updObj = delete obj.key 
  return updObj 
}

removeFromPlaylist(playlist,'NeYo')
console.log(playlist)

delete playlist.NeYo
console.log(playlist)

