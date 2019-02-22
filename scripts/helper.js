class Helper {
  playPauseAndUpdate(song) {
    const totalTime = song.duration
    $('#time-control .total-time').text( totalTime );
    return player.playPause(song)
  }
}

const helper = new Helper();
