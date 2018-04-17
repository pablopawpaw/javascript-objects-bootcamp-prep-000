var playlist = {
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

function removeFromPlaylist(playlist, artistName) {
  newPlaylist = delete playlist.artistName;
  return newPlaylist
}

removeFromPlaylist(playlist, 'GD')
console.log(playlist)

delete playlist.IU
console.log(playlist)

