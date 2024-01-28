console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('my-progess-bar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('master-song-name')
let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
  {songName: "Jhoome Jo Pathaan", filePath: "songs/1.mp3", coverPath: "covers/1.jpeg"},
  {songName: "Tujh Mein Rab Dikhta Hain", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
  {songName: "Surili Akhiyon Wale", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
  {songName: "Baby Calm Down", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
  {songName: "Moye Moye", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
  {songName: "Unstoppable - Sia ", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
  {songName: "Kesariya", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
  {songName: "Euta Manche Ko Mayale Kati", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
  {songName: "Gajalu Ti Thula Thula Aankha", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
  {songName: "Ashare Mahinama Pani Paryo Rujhaune", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
  
]

songItems.forEach((element, i)=>{
  
  element.getElementsByTagName('img')[0].src = songs[i].coverPath;
  element.getElementsByClassName('songname')[0].innerText = songs[i].songName;


})

// Handle play/pause click

masterPlay.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause')
    gif.style.opacity = 1;
  }else {
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity = 0;
  }
}); 

// Listen to Events

audioElement.addEventListener('timeupdate', ()=>{
  // Update seekbar

  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  
  myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
  audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('song-item-play')).forEach((element) => {
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
    
  });
};


Array.from(document.getElementsByClassName('song-item-play')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
  })
}) 


document.getElementById('next').addEventListener('click',()=>{
  if(songIndex>=9){
    songIndex = 0;
  }else{
    songIndex +=1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
  if(songIndex<=0){
    songIndex = 9;
  }else{
    songIndex -=1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime =0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
})