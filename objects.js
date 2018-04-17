playlist = {
  IU:'Good Day',
  GD:'Who You',
  CeeLoGr:'Fuck You'
  
};

console.log(playlist)

function updatePlaylist(obj, key, value) {
  var updObj= obj[key] = value
  return updObj
}

updatePlaylist(playlist,'neyo','So Sick')
console.log(playlist)

function removeFromPlaylist(obj, key) {
  newObj = delete obj.key 
  return newObj
}

removeFromPlaylist(playlist, neyo)
console.log(playlist)

delete playlist.neyo
console.log(playlist)

