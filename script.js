console.log('welcome to moodify');
//inintialse song variable
let songIndex = 0;

let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songitem = document.getElementsByClassName('songitem');
let masterSongName=document.getElementById('masterSongName')


let songs = [
    { songName: "Lag Ja Gale", filePath: "1.mp3", coverPath: "cover1.jpeg" },
    { songName: "Tujhse Naraz Nhi Zindagi", filePath: "2.mp3", coverPath: "cover2.jpeg" },
    { songName: "Tera Mujhse Hai Pehle Ka Nata Koi", filePath: "3.mp3", coverPath: "cover3.jpg" },
    { songName: "Mere Saamne Wali Khidki Par", filePath: "4.mp3", coverPath: "cover4.jpeg" },
    { songName: "Yeh Shaam Mastani", filePath: "5.mp3", coverPath: "cover5.png" },
    { songName: "Ajeeb Dastaan H Yeh", filePath: "6.mp3", coverPath: "cover6.png" },
    { songName: "O Saathi Re", filePath: "7.mp3", coverPath: "cover7.jpeg" },
    { songName: "Pal Pal dil Ke Pass", filePath: "8.mp3", coverPath: "cover8.png" },





]
//audioElement.play();
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    progress = parseInt(audioElement.currentTime / audioElement.duration * 100);
    // console.log(progress);
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change', () => {

    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;


})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})