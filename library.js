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
  printPlaylists: function () {
    // prints a list of all playlists, in the form:
    // p01: Coding Music - 2 tracks
    // p02: Other Playlist - 1 tracks

    for (const playlistsKey in this.playlists) {
      console.log(
        `${this.playlists[playlistsKey].id}: ${this.playlists[playlistsKey].name} - ${this.playlists[playlistsKey].tracks.length} tracks`
      );
    }
  },

  printTracks: function () {
    for (const tracksKey in this.tracks) {
      console.log(
        `${this.tracks[tracksKey].id}: ${this.tracks[tracksKey].name} by ${this.tracks[tracksKey].artist} (${this.tracks[tracksKey].album}) `
      );
    }
  },

  printPlaylist: function (playlistId) {
    // let playlistsKeyArr = Object.keys(this.playlists); //creates an array of the playlists inside of the object
    // let counter = 1; // initializes a counter at 1

    // for (const playlistsKey of playlistsKeyArr) {
    //   if (this.playlists[playlistsKey].id === playlistId) {
    //     // if the value sent to the function (playlistId) exists in the array
    //     console.log(
    //       `${this.playlists[playlistId].id}: ${this.playlists[playlistId].name} - ${this.playlists[playlistId].tracks.length} tracks`
    //     );

    //     break;
    //   } else if (playlistsKeyArr.length === counter) {
    //     //if the loop goes through the array and hasn't found a match between the keys and the value sent
    //     console.log(`${playlistId} does not exist`);
    //     return;
    //   }
    //   counter++;
    // }

    // for (const tracksKey of this.playlists[playlistId].tracks) {
    //   // loops through the tracks properties of the object
    //   console.log(
    //     `${this.tracks[tracksKey].id}: ${this.tracks[tracksKey].name} by ${this.tracks[tracksKey].artist} (${this.tracks[tracksKey].album}) `
    //   );
    // }

    if (this.playlists[playlistId]) {
      console.log(
        `${this.playlists[playlistId].id}: ${this.playlists[playlistId].name} - ${this.playlists[playlistId].tracks.length} tracks`
      );
    } else {
      //if the loop goes through the array and hasn't found a match between the keys and the value sent
      console.log(`${playlistId} does not exist`);
      return;
    }

    for (const tracksKey of this.playlists[playlistId].tracks) {
      // loops through the tracks properties of the object
      console.log(
        `${this.tracks[tracksKey].id}: ${this.tracks[tracksKey].name} by ${this.tracks[tracksKey].artist} (${this.tracks[tracksKey].album}) `
      );
    }
  },

  addTrackToPlaylist: function (trackId, playlistId) {
    // const tracksKeysArr = Object.keys(this.tracks);
    // let counter = 1;
    // let playlistsKeyArr = Object.keys(this.playlists);
    // let isPlaylist;
    // let isTrack;

    // for (const tracksKey of tracksKeysArr) {
    //   // loop to go through the tracks properties' keys and checks whether the track id sent to the function exists
    //   if (trackId === this.tracks[tracksKey].id) {
    //     isTrack = true;
    //     break;
    //   } else if (tracksKeysArr.length === counter) {
    //     // if loop has reached the end and it hasn't found a match then function stops
    //     console.log(`${trackId} does not exist`);
    //     return;
    //   }
    //   counter++;
    // }
    // counter = 1; // resets counter

    // for (const playlistsKey of playlistsKeyArr) {
    //   // loop to go through the playlists properties' keys and checks whether the playlist id sent to the function exists
    //   if (this.playlists[playlistsKey].id === playlistId) {
    //     isPlaylist = true;
    //     break;
    //   } else if (playlistsKeyArr.length === counter) {
    //     console.log(`${playlistId} does not exist`);
    //     return;
    //   }
    //   counter++;
    // }

    // if (isPlaylist && isTrack) {
    //   // if both playlistId and trackId exist in the object
    //   let playlistTrackArr = Object.values(this.playlists[playlistId].tracks);
    //   for (const trackInArr of playlistTrackArr) {
    //     // checks if track isn't already in the playlist
    //     if (trackInArr === trackId) {
    //       console.log(`${trackId} is already in ${playlistId}`);
    //       return;
    //     }
    //   }
    // }
    // this.playlists[playlistId].tracks.push(trackId);

    //TO DO: rearreange the array accordingly

    if (this.playlists[playlistId]) {
      if (this.tracks[trackId]) {
        for (const track of Object.values(this.playlists[playlistId].tracks)) {
          if (track === trackId) {
            console.log(`${trackId} is already in ${playlistId}`);
            return;
          }
        }
      } else {
        console.log(`${playlistId} does not exist`);
      }
    } else {
      console.log(`${trackId} does not exist`);
    }

    this.playlists[playlistId].tracks.push(trackId);
  },

  generateUid: function () {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  },

  addTrack: function (name, artist, album) {
    const trackId = this.generateUid();

    this.tracks[trackId] = {
      id: trackId,
      name: name,
      artist: artist,
      album: album,
    };
  },
  addPlaylist: function (name) {
    const playlistId = this.generateUid();

    this.playlists[playlistId] = {
      id: playlistId,
      name: name,
      tracks: [],
    };
  },
};

/* TEST */
// library.printPlaylists();
// console.log("------");

// library.printTracks();
// console.log("------");

// console.log("------");

// let playlistId = "p01";
// library.printPlaylist(playlistId);
// console.log("------");
// playlistId = "p02";
// library.printPlaylist(playlistId);
// console.log("------");
// playlistId = "p03";
// library.printPlaylist(playlistId);
// console.log("------");

// console.log("------");

library.addTrackToPlaylist("t03", "p01");
console.log(library.playlists);

// console.log("------");

// library.addTrack("Smoke On The Water", "Deep Purple", "Machine Head");
// console.log(library);

// /* TEST */
// library.addPlaylist("Rockin' Music");
// console.log(library);

// // STRETCH:
// // given a query string string, prints a list of tracks
// // where the name, artist or album contains the query string (case insensitive)
// // tip: use "string".search("tri")
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
// const printSearchResults = function (query) {};
