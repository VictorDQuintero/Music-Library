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
  printPlaylists: function() {
    // prints a list of all playlists, in the form:
    // p01: Coding Music - 2 tracks
    // p02: Other Playlist - 1 tracks

    for (const playlistsKey in this.playlists) {
      //accesses and prints out the objects properties in playlists
      console.log(
        `${this.playlists[playlistsKey].id}: ${this.playlists[playlistsKey].name} - ${this.playlists[playlistsKey].tracks.length} tracks`
      );
    }
  },

  printTracks: function() {
    for (const tracksKey in this.tracks) {
      //accesses and prints out the objects properties in tracks
      console.log(
        `${this.tracks[tracksKey].id}: ${this.tracks[tracksKey].name} by ${this.tracks[tracksKey].artist} (${this.tracks[tracksKey].album}) `
      );
    }
  },

  printPlaylist: function(playlistId) {
    if (this.playlists[playlistId]) {
      //if there is a playlist with that playlistId it will print out the playlist
      console.log(
        `${this.playlists[playlistId].id}: ${this.playlists[playlistId].name} - ${this.playlists[playlistId].tracks.length} tracks`
      );
    } else {
      //if the loop goes through the array and hasn't found a match between the keys and the value sent
      console.log(`${playlistId} does not exist`);
      return;
    }

    for (const tracksKey of this.playlists[playlistId].tracks) {
      // loops through the tracks properties of the tracks nested object
      console.log(
        `${this.tracks[tracksKey].id}: ${this.tracks[tracksKey].name} by ${this.tracks[tracksKey].artist} (${this.tracks[tracksKey].album}) `
      );
    }
  },

  addTrackToPlaylist: function(trackId, playlistId) {
    if (this.playlists[playlistId].id) {
      //checks that the playlist exists
      if (this.tracks[trackId].id) {
        // checks that the track exists
        for (const track of this.playlists[playlistId].tracks) {
          // loops through an array of the tracks in a playlist
          if (track === trackId) {
            console.log(`${trackId} is already in ${playlistId}`);
            return;
          }
        }
      } else {
        // if playlistId sent doesn't exist in object
        console.log(`${playlistId} does not exist`);
      }
    } else {
      // if trackId sent doesn't exist in object
      console.log(`${trackId} does not exist`);
    }

    this.playlists[playlistId].tracks.push(trackId); // if all existence tests pass, pushes trackId into track array of the playlist object
  },

  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  },

  addTrack: function(name, artist, album) {
    const trackId = this.generateUid(); // generates random number, assigns it to trackId

    this.tracks[trackId] = {
      // creates new track object inside library.tracks
      id: trackId,
      name: name,
      artist: artist,
      album: album,
    };
  },
  addPlaylist: function(name) {
    const playlistId = this.generateUid();

    this.playlists[playlistId] = {
      // creates new playlist object inside playlist.tracks
      id: playlistId,
      name: name,
      tracks: [],
    };
  },
  printSearchResults: function(query) {
    // // given a query string string, prints a list of tracks where the name, artist or album contains the query string (case insensitive)
    let isMatch = false;
    for (const tracksKey in this.tracks) {
      // loops through the tracks keys inside the tracks object
      for (const track of Object.keys(this.tracks[tracksKey])) {
        // creates and loops through an array of the property keys inside each track object.
        if (this.tracks[tracksKey][track].search(query) !== -1) {
          // if search finds a match, it prints out all of the track's info that match
          isMatch = true;
          console.log(
            `${this.tracks[tracksKey].id}: ${this.tracks[tracksKey].name} by ${this.tracks[tracksKey].artist} (${this.tracks[tracksKey].album}) `
          );
        }
      }
    }

    if (!isMatch) {
      console.log("There is no match");
    }
  },
};

/* TEST */
// library.printPlaylists();
// console.log("\n------\n");

// library.printTracks();
// console.log("\n------\n");

// let playlistId = "p01";
// library.printPlaylist(playlistId);
// console.log("------");
// playlistId = "p02";
// library.printPlaylist(playlistId);
// console.log("------");
// playlistId = "p03";
// library.printPlaylist(playlistId);
// console.log("------");

// console.log("\n------\n");

// library.addTrackToPlaylist("t03", "p01");
// library.addTrackToPlaylist("t01", "p02");
// library.addTrackToPlaylist("t02", "p01");
// console.log(library.playlists);

// console.log("\n------\n");

// library.addTrack("Smoke On The Water", "Deep Purple", "Machine Head");
// console.log(library);

// console.log("\n------\n");

// library.addPlaylist("Rockin' Music");
// console.log(library);

// console.log("\n------\n");

// library.printSearchResults(/ode/i);
// console.log("------");
// library.printSearchResults(/Ziltoid/i);
