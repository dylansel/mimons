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
    path: "src/songs/Popuri.mp3", 
    played: false, 
    hStart: 260
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
    title: "SILSULIM", 
    path: "src/songs/Static and Ben El - Silsulim (Produced by Jordi)  סטטיק ובן אל תבורי - סלסולים (Prod. by Jordi).mp3", 
    played: false
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
    path: "src/songs/Popuri.mp3", 
    played: false,
    hStart: 230
  },
  { 
    title: "TAPUCHIM UDVASH", 
    path: "src/songs/Popuri.mp3", 
    played: false,
    hStart: 1
  },
  { 
    title: "HASHEM MELECH", 
    path: "src/songs/גד ובני אלבז - ה' מלך - Gad Elbaz & Beni Elbaz - Hashem Meleh.mp3", 
    played: false,
    hStart: 16
  },
  { 
    title: "DIP YOUR APPLE", 
    path: "src/songs/Dip Your Apple - Fountainheads Rosh Hashanah.mp3", 
    played: false,
    hStart: 30
  },
  { 
    title: "SHMONALEINU", 
    path: "src/songs/.mp3", 
    played: false,
    hStart: 30
  },
  { 
    title: "MOSHAICH", 
    path: "src/songs/.mp3", 
    played: false,
    hStart: 30
  },
  { 
    title: "IVRI ANOCHI", 
    path: "src/songs/Benny - Ivri Anochi - I'm a Jew and I'm Proud - The Music Video -  בני פרידמן - עברי אנכי.mp3", 
    played: false,
  },
  { 
    title: "AJI ISRAELI", 
    path: "src/songs/Haji Israelí - Lo más israelí (subtitulado en castellano).mp3", 
    played: false,
    hStart: 35
  },
  { 
    title: "BE ASHEL MIDBARAJ", 
    path: "src/songs/.mp3", 
    played: false,
    hStart: 30
  },
  { 
    title: "MESHUGAIM", 
    path: "src/songs/עומר אדם - שני משוגעים.mp3", 
    played: false,
    hStart: 32
  },
  { 
    title: "BA LA LIRKOD", 
    path: "src/songs/גל מלכה מארח את סטטיק-בא לה לרקוד (קליפ רשמי).mp3", 
    played: false,
    hStart: 42
  },
  { 
    title: "HI RAK ROTZA LIRKOD", 
    path: "src/songs/.mp3", 
    played: false,
    hStart: 30
  },
  { 
    title: "MAPIOT", 
    path: "src/songs/Stephane Legar - Mapiot  (Prod. By Johnny Goldstein)  סטפן לגר - מפיות.mp3", 
    played: false,
  },
  { 
    title: "COMME CI COMME CA", 
    path: "src/songs/Stephane Legar - Comme Ci Comme ça (Music Video)  סטפן לגר - קומסי קומסה.mp3", 
    played: false,
  },
  
  { 
    title: "ANI OSALI MANGUINOT", 
    path: "src/songs/Ani Osali Manguinot.mp3", 
    played: false,
  },
  { 
    title: "ISRAELA", 
    path: "src/songs/.mp3", 
    played: false,
  },
  { 
    title: "OD NAGUIA", 
    path: "src/songs/.mp3", 
    played: false,
    hStart: 30
  },
  { 
    title: "OD LO AHAVTI DAI", 
    path: "src/songs/.mp3", 
    played: false,
    hStart: 30
  },
  { 
    title: "SIMARIK", 
    path: "src/songs/.mp3", 
    played: false,
    hStart: 30
  },
  { 
    title: "HAVA NAGUILA", 
    path: "src/songs/.mp3", 
    played: false,
    hStart: 30
  },
  { 
    title: "SHIR LASHALOM", 
    path: "src/songs/Shir lashalom.mp3", 
    played: false,
    hStart: 105
  },
  { 
    title: "UF GOZAL", 
    path: "src/songs/.mp3", 
    played: false,
    hStart: 30
  },
  { 
    title: "ET REKOD", 
    path: "src/songs/עת רקוד - SHWEKEY - Et Rekod.mp3", 
    played: false,
  },
  { 
    title: "TEL AVIV", 
    path: "src/songs/Omer Adam feat. Arisa - Tel Aviv עומר אדם עם אריסה - תל אביב.mp3", 
    played: false,
  },
  { 
    title: "HEIVEINU", 
    path: "src/songs/.mp3", 
    played: false,
    hStart: 30
  },
  { 
    title: "SHALOM ALEICHEM", 
    path: "src/songs/.mp3", 
    played: false,
    hStart: 30
  },
  { 
    title: "MESIVA BE JAIVA", 
    path: "src/songs/.mp3", 
    played: false,
    hStart: 30
  },
  { 
    title: "IHYE BESEDER", 
    path: "src/songs/.mp3", 
    played: false,
    hStart: 30
  },
  { 
    title: "SIMAN TOV", 
    path: "src/songs/.mp3", 
    played: false,
    hStart: 30
  },
  { 
    title: "LAUF", 
    path: "src/songs/Harel Skaat - Lauf.mp3", 
    played: false,
    hStart: 30
  },
  { 
    title: "ZAHAV", 
    path: "src/songs/.mp3", 
    played: false,
    hStart: 30
  },
  { 
    title: "KVISH HACHOF", 
    path: "src/songs/.mp3", 
    played: false,
    hStart: 30
  },
  { 
    title: "MASHIAJ", 
    path: "src/songs/Mashiaj.mp3", 
    played: false,
    hStart: 30
  },
];


function fadeOut(audio) {
  let fadeInterval = setInterval(() => {
    if (!audio.paused && audio.volume > 0) {
      let newVolume = audio.volume - 0.1;
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
      let newVolume = audio.volume + 0.1;
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
  },500); // Ruleta más rápida: dura 1 segundo
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
    },500) // Reducido el delay para que arranque rápido
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
