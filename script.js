let title = document.getElementById("title");
let artist = document.getElementById("artist");
let prev = document.getElementById("prev");
let play = document.getElementById("play");
let next = document.getElementById("next");
let img = document.querySelector('img');

let music = document.querySelector('audio');

let check = 0 ;
play.addEventListener('click', () =>{
    if(check==0){
        play.classList.replace("fa-play","fa-pause");
        play.title = "Pause" ;
        img.classList.add("rotateImg");
        music.play();
        check = 1 ;
    }else{
        play.classList.replace("fa-pause","fa-play");
        play.title = "Play" ;
        img.classList.remove("rotateImg");
        music.pause();
        check = 0 ;
    }
});

let songs = [
    {
        title: "Second Song" ,
        artist: "Sannu Kumar Ojha" ,
        img: "./pic1.jpg" ,
        music: "./audio2.mp3"
    },
    {
        title: "Third Song" ,
        artist: "Mithu Marshal" ,
        img: "./pic2.jpg" ,
        music: "./audio3.mp3"
    },
    {
        title: " Fourth Song" ,
        artist: "Ajay Kumar Ojha" ,
        img: "./pic2.jpg" ,
        music: "./audio4.mp3"
    },
    {
        title: " Fourth Song" ,
        artist: "Ajay Kumar Ojha" ,
        img: "./pic2.jpg" ,
        music: "./audio4.mp3"
    },
    {
        title: " Fifth Song" ,
        artist: "Prince Ojha" ,
        img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        music: "./audio5.mp3"
    },
    {
        title: " Sixth Song" ,
        artist: "Sonu Sarthi" ,
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        music: "./audio6.mp3"
    },
    {
        title: " Seventh Song" ,
        artist: "Alok Kumar Ojha" ,
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        music: "./audio7.mp3"
    },
    {
        title: " Eighth Song" ,
        artist: "Kheshari Lal Yadaw" ,
        img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        music: "./audio8.mp3"
    },
    {
        title: " Ninth Song" ,
        artist: "Aman Gupta" ,
        img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        music: "./audio9.mp3"
    },
    {
        title: " 10 Top Song" ,
        artist: "Sonu Kumar Ojha" ,
        img: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        music: "./audio10.mp3"
    }
]

const loadSong = (songs) =>{
     title.textContent = songs.title ;
     artist.textContent = songs.artist ;
     music.src = songs.music ;
     img.src = songs.img ;
}
let songIndex = 0 ;
next.addEventListener('click',()=>{
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    music.play();
})
prev.addEventListener('click',()=>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    music.play();
})

let audioRange = document.getElementById("audioRange");
let mouseDownOnSlider = false;


music.addEventListener("loadeddata", () => {
    audioRange.value = 0;
  });
  music.addEventListener("timeupdate", () => {
    if (!mouseDownOnSlider) {
      audioRange.value = music.currentTime / music.duration * 100;
    }
  });
  music.addEventListener("ended", () => {
    play.classList.replace("fa-pause","fa-play");
  });

audioRange.addEventListener("change", () => {
    const pct = audioRange.value / 100;
    music.currentTime = (music.duration || 0) * pct;
  });
  audioRange.addEventListener("mousedown", () => {
    mouseDownOnSlider = true;
  });
  audioRange.addEventListener("mouseup", () => {
    mouseDownOnSlider = false;
  });