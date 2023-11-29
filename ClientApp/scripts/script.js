const playerBtn = document.querySelector('.player');
const namemusic1Div = document.querySelector('.namemusic1');
const singerNameDiv = document.querySelector('.singer');
const mainplayerImg = document.querySelector('.mainplayer');
const nextSongBtn = document.querySelector('.forward');
const backSongBtn = document.querySelector('.back');
const playBtn = document.querySelector('.stop');
const likeBtn = document.querySelector('.like');
const songAudio = document.createElement('audio');

const htmlObj = {
    playerBtn,
    namemusic1Div,
    singerNameDiv,
    mainplayerImg,
    nextSongBtn,
    backSongBtn,
    playBtn,
    likeBtn,
    songAudio
};
const player = new Player(getAllMusic(), htmlObj);

player.applySong(player.playListSongs[player.songIndex]);

likeBtn.addEventListener('click', function () {
    const song = player.playListSongs[player.songIndex];
    song.like = !song.like;
    player.applyLikeSong(song);
});

playBtn.addEventListener('click', function () {
    player.checkPlay = !player.checkPlay;
    const buttonType = player.checkPlay ? './buttons/pause.svg' : './buttons/play.svg';
    playBtn.style.backgroundImage = `url(${buttonType})`;
    if (player.checkPlay) {
        songAudio.play();

    }
    else {
        songAudio.pause();
    }
});

nextSongBtn.addEventListener('click', function () {
    player.changeSong(player.nextSong());
});

backSongBtn.addEventListener('click', function () {
    player.changeSong(player.backSong());
});

let checkColor = true;
playerBtn.addEventListener('click', function () {
    const backgroundColor = document.querySelector('body');
    const playerGround = document.querySelector('.player');
    if (checkColor) {
        backgroundColor.style.background = '#E5E5E5';
        playerGround.style.background = '#454545';
        checkColor = false;
    }
    else {
        backgroundColor.style.background = '#454545';
        playerGround.style.background = '#FFFEF8';
        checkColor = true;
    }
});