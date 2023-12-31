class Player {
    constructor(playlist, htmlObj) {
        this.songIndex = 0;
        this.checkPlay = false;
        this.playListSongs = playlist;
        this.htmlObj = htmlObj;
    }
    applyLikeSong(song) {
        const buttonType = song.like ? './buttons/unlike.svg' : './buttons/like.svg';
        this.htmlObj.likeBtn.style.backgroundImage = `url(${buttonType})`;
    }

    applySong(song) {
        this.htmlObj.namemusic1Div.textContent = song.name;
        this.htmlObj.singerNameDiv.textContent = song.singer;
        this.htmlObj.mainplayerImg.style.backgroundImage = `url(${song.mainplayer})`;
        this.htmlObj.songAudio.src = song.path;
        this.applyLikeSong(song);
    }

    changeSong(currentSong) {       
        this.applySong(currentSong);
        this.htmlObj.songAudio.play();
    }
    nextSong() {
        this.songIndex = this.songIndex == this.playListSongs.length - 1 ? 0 : this.songIndex + 1;
        return this.playListSongs[this.songIndex];
    }
    backSong() {
        this.songIndex = this.songIndex == 0 ? this.playListSongs.length - 1 : this.songIndex - 1;
        return this.playListSongs[this.songIndex];
    }
}
