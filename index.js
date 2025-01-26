const songs = [
      { title: "Bernadya-Untungnya", src: "music/Bernadya-Untungnya.mp3" },
      { title: "Kita Bikin Romantis", src: "music/Kita Bikin Romantis.mp3" },
      { title: "Dj Mengapa Mudahnya", src: "music/Dj Mengapa Mudahnya.mp3" },
    ];

    let currentSongIndex = 0;
    const audioPlayer = document.getElementById('audio-player');
    const playBtn = document.getElementById('big_play_pause');
    const prevBtn = document.getElementById('big1');
    const nextBtn = document.getElementById('big2');
    const songTitle = document.getElementById('song_details');

    // Toggle play and pause
    playBtn.addEventListener('click', () => {
      if (audioPlayer.paused) {
        audioPlayer.play();
      } else {
        audioPlayer.pause();
      }
    });

    // Switch to next song
    nextBtn.addEventListener('click', () => {
      currentSongIndex = (currentSongIndex + 1) % songs.length;
      changeSong();
    });

    // Switch to previous song
    prevBtn.addEventListener('click', () => {
      currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
      changeSong();
    });

    // Change the song
    function changeSong() {
      const song = songs[currentSongIndex];
      songTitle.textContent = song.title;
      audioPlayer.src = song.src;
      audioPlayer.play();
      playBtn.textContent = '❚❚'; // Pause symbol
    }
    
//https://upload.wikimedia.org/wikipedia/en/f/f3/EVOL_by_Future_cover.jpg