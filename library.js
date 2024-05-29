const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three",
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003",
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952",
    },
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] },
  },
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function () {
  const playlists = library.playlists;
  for (const playlistsKey in playlists) {
    console.log(
      `${playlists[playlistsKey].id}: ${playlists[playlistsKey].name} - ${playlists[playlistsKey].tracks.length} tracks`
    );
  }
};

// printPlaylists(library);

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function () {
  const tracks = library.tracks;
  for (const tracksKey in tracks) {
    console.log(
      `${tracks[tracksKey].id}: ${tracks[tracksKey].name} by ${tracks[tracksKey].artist} (${tracks[tracksKey].album}) `
    );
  }
};

// printTracks(library);

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function (playlistId) {
  let playlistsKeyArr = Object.keys(library.playlists); //creates an array of the playlists inside of the object
  let counter = 1; // initializes a counter at 1

  for (const playlistsKey of playlistsKeyArr) {
    if (library.playlists[playlistsKey].id === playlistId) {
      // if the value sent to the function (playlistId) exists in the array
      console.log(
        `${library.playlists[playlistId].id}: ${library.playlists[playlistId].name} - ${library.playlists[playlistId].tracks.length} tracks`
      );

      break;
    } else if (playlistsKeyArr.length === counter) {
      //if the loop goes through the array and hasn't found a match between the keys and the value sent
      console.log(`${playlistId} does not exist`);
      return;
    }
    counter++;
  }

  for (const tracksKey of library.playlists[playlistId].tracks) {
    // loops through the tracks properties of the library object
    console.log(
      `${library.tracks[tracksKey].id}: ${library.tracks[tracksKey].name} by ${library.tracks[tracksKey].artist} (${library.tracks[tracksKey].album}) `
    );
  }
};

let playlistId = "p01";
printPlaylist(playlistId);
console.log("------");
playlistId = "p02";
printPlaylist(playlistId);
console.log("------");
playlistId = "p03";
printPlaylist(playlistId);

// adds an existing track to an existing playlist
const addTrackToPlaylist = function (trackId, playlistId) {
  //perhaps some testing would be good:
  // test that there is a track with that id
  // test that that track isn't already in that playlist
  // rearreange the array accordingly
  library.playlists[playlistId].tracks.push(trackId);
};

// addTrackToPlaylist("t01", "p01");
// console.log(library.playlists);

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function () {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

// adds a track to the library
const addTrack = function (name, artist, album) {};

// adds a playlist to the library
const addPlaylist = function (name) {};

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function (query) {};
