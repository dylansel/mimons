let songs = [
  { 
    title: "KAKDILA", 
    path: "src/songs/עומר אדם  קאקדילה (Prod. By Moshe & Ofek).mp3", 
    played: false,
    hStart: 35 
  },
  { 
    title: "BASHANA HABAA", 
    path: "src/songs/Bashana Haba'a - בשנה הבאה.mp3", 
    played: false,
    hStart: 60 
  },
  { 
    title: "AM ISRAEL JAI", 
    path: "src/songs/Am Israel Jai.mp3", 
    played: false,
    hStart: 40 
  },
  { 
    title: "BE ROSH HASHANA", 
    path: "src/songs/Berosh Hashana Ish lereeu.mp3", 
    played: false,
  },
  { 
    title: "ANAJNU MAMINIM", 
    path: "src/songs/Anajnu ma'aminim.mp3", 
    played: false,
    hStart: 32 

  },
  { 
    title: "IAJAD", 
    path: "src/songs/Yajad Shir la ahava.mp3", 
    played: false,
    hStart: 62 
  },
  { 
    title: "MI SHEEMAAIM", 
    path: "src/songs/Mi shema'amim - HebreoEspañol - Eyal Golan.mp3", 
    played: false,
    hStart: 68
  },
  { 
    title: "SHAVUA TOV", 
    path: "", 
    played: false,
  },
  { 
    title: "SHEL SIMJA", 
    path: "src/songs/ליאור נרקיס ועומר אדם מהפכה של שמחה Lior Narkis and Omer Adam.mp3", 
    played: false,
    hStart: 50
  },
  { 
    title: "SHANA TOVA", 
    path: "", 
    played: false,
  },
  { 
    title: "TAPUCHIM UDVASH", 
    path: "", 
    played: false,
  },
  { 
    title: "DIP YOUR APPLE", 
    path: "src/songs/Dip Your Apple - Fountainheads Rosh Hashanah.mp3", 
    played: false,
  },

];

function fadeOut(audio) {
  let fadeInterval = setInterval(() => {
    if (!audio.paused && audio.volume > 0) {
      let newVolume = audio.volume - 0.05;
      if (Math.abs(newVolume) < 0.0001) {
        newVolume = 0;
      }
      audio.volume = newVolume;
    } else if (audio.volume <= 0) {
      clearInterval(fadeInterval);
      audio.pause();
      audio.volume = 1;
    }
  }, 50);
}

function fadeIn(audio) {
  audio.volume = 0;
  audio.play();
  let fadeInterval = setInterval(() => {
    if (audio.volume < 1) {
      let newVolume = audio.volume + 0.05;
      if (newVolume > 1) {
        newVolume = 1;
      }
      audio.volume = newVolume;
    } else {
      clearInterval(fadeInterval);
    }
  }, 50);
}

const audioCtx = new AudioContext();
const spinSound = new Audio('/src/songs/Redoblantes.mp3');

function playSound() {
  spinSound.currentTime = 3.2; 
  spinSound.play();
}

let audio = new Audio();
const $contCancion = document.getElementById('songTitle');

function iCancionByPath(path) {
  for (let i = 0; i < songs.length; i++) {
    if (songs[i].path === path) {
      return i;
    }
  }
  return -1;
}

function aleatorio(minimo, maximo) {
  return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

const $roulette = document.getElementById("roulette");
function start() {
  $roulette.classList.add("roulette");
  setTimeout(()=>{
    $roulette.classList.remove("roulette");
  },1000); // Ruleta más rápida: dura 1 segundo
}

const stateBtn = (state) => {
  const $btn = document.getElementById("nextBtn")
  if(!state){
    $btn.disabled = true;
    $btn.classList.add("disable")
  }else{
    $btn.disabled = false;
    $btn.classList.remove("disable")
  }
}

const isEnd = ()=>{
  const cancionesPorReproducir = songs.filter(function(s) {
    return s.played === false;
  });
  return cancionesPorReproducir.length
}

window.addEventListener("click", e=>{
  let $btn = e.target;
  if($btn.matches("#nextBtn") && isEnd()){
    stateBtn(false)
    fadeOut(audio)
    start() 
    playSound()
    $contCancion.classList.remove("mostrando")
    setTimeout(()=>{
      tirar()
      stateBtn(isEnd()>0)
    },1500) // Reducido el delay para que arranque rápido
  }
  if($btn.matches("#stop-btn")){
    if (audio.paused) {
      fadeIn(audio); 
    } else {
      fadeOut(audio); 
    }
  }
})

window.addEventListener("load", ()=>{
  insertarCanciones();
})

function insertarCanciones() {
  const listaCanciones = document.getElementById('lcanciones');
  const cancionesHTML = songs.map(function(s) {
    let li = '<li class="lista';
    if (s.played) {
      li += ' played';
    }
    li += '">' + s.title + '</li>';
    return li;
  }).join('');
  
  listaCanciones.innerHTML = cancionesHTML;
}

function tirar(){
  const cancionesPorReproducir = songs.filter(function(s) {
    return s.played === false;
  });

  if(cancionesPorReproducir.length >= 1){
    // Elegir canción 
    const cancion = cancionesPorReproducir[aleatorio(0,cancionesPorReproducir.length-1)];
    
    // Reproducir canción
    audio = new Audio(cancion.path);

    if (cancion.hStart !== undefined && !isNaN(cancion.hStart)) {
      audio.currentTime = cancion.hStart; 
    } else {
      audio.currentTime = aleatorio(20, 60); 
    }

    fadeIn(audio);
    
    // Actualizar estado
    cancion.played = true;
    songs[iCancionByPath(cancion.path)] = cancion;
    
    // Actualizar lista
    insertarCanciones();

    // Actualizar título
    $contCancion.innerHTML= cancion.title;
    $contCancion.classList.add("mostrando")
  }
}
