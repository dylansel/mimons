let songs = [
  {
    title: "Despacito",
    path: "src/songs/Despacito.mp3",
    played: false
  },
  {
    title: "Caraluna",
    path: "src/songs/Bacilos - Caraluna.mp3",
    played: false
  },
  {
    title: "Bassa Sababa",
    path: "src/songs/Bassa Sababa.mp3",
    played: false
  },
  {
    title: "Calma",
    path: "src/songs/Calma.mp3",
    played: false
  },
  {
    title: "Dayenu",
    path: "src/songs/Dayenu.mp3",
    played: false
  },
  {
    title: "Don Miranda",
    path: "src/songs/Don Miranda.mp3",
    played: false
  },
  {
    title: "Ivri Anochi",
    path: "src/songs/Ivri Anochi.mp3",
    played: false
  },
  {
    title: "La Bicicleta",
    path: "src/songs/La Bicicleta.mp3",
    played: false
  },
  {
    title: "Limbo",
    path: "src/songs/Limbo.mp3",
    played: false
  },
  {
    title: "Mi shemaim",
    path: "src/songs/Mi shema'amim.mp3",
    played: false
  },
  {
    title: "Mil horas",
    path: "src/songs/Mil horas.mp3",
    played: false
  },
  {
    title: "Niña Bonita",
    path: "src/songs/Niña Bonita.mp3",
    played: false
  },
  {
    title: "Redoblantes",
    path: "src/songs/Redoblantes.mp3",
    played: false
  },
  {
    title: "Terminal 3- טרמינל 3",
    path: "src/songs/Terminal 3- טרמינל 3.mp3",
    played: false
  },
  {
    title: "Tudo Bom",
    path: "src/songs/Tudo Bom.mp3",
    played: false
  },
  {
    title: "Tusa",
    path: "src/songs/Tusa.mp3",
    played: false
  },
  {
    title: "Aji israeli",
    path: "src/songs/התקווה .mp3",
    played: false
  },
  {
    title: "Jaberot shelaj",
    path: "src/songs/עומר אדם - חברות שלך.mp3",
    played: false
  },
  {
    title:"Rak rotza lirkod",
    path: "src/songs/ היא רק רוצה לרקוד.mp3",
    played: false
  },
  {
    title: "dobigal",
    path: "src/songs/רון נשר#.mp3",
    played: false
  },
  {
    title: "Cae el Sol",
    path: "src/songs/Cae el Sol.mp3",
    played: false
  },
  {
    title: "Amor Clasificado",
    path: "src/songs/Amor Clasificado.mp3",
    played: false
  },
  {
    title: "3 Estrellas en el Conjunto",
    path: "src/songs/3 Estrellas en el Conjunto.mp3",
    played: false
  },
  {
    title: "Andas En Mi Cabeza",
    path: "src/songs/Andas En Mi Cabeza.mp3",
    played: false
  },
  {
    title: "Zahav",
    path: "src/songs/Zahav.mp3",
    played: false
  },
  {
    title: "Ma Nishtana",
    path: "src/songs/Mah Nishtanah.mp3",
    played: false
  },
  {
    title: "Eliahu Hanabi",
    path: "src/songs/Eliahu Hanabi.mp3",
    played: false
  },
  {
    title: "Silsulim",
    path: "src/songs/Silsulim.mp3",
    played: false
  },
  {
    title: "Israel Sheli",
    path: "src/songs/Israel Sheli.mp3",
    played: false
  },
  {
    title: "Od Naguia",
    path: "src/songs/Od Naguia.mp3",
    played: false
  },
  {
    title: "Hine Ma Tov",
    path: "src/songs/Hine Ma Tov.mp3",
    played: false
  },
  {
    title: "Et Rekod",
    path: "src/songs/Et Rekod.mp3",
    played: false
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
  
  spinSound.currentTime = 3.2; // Establecer inicio en 1:10
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
    return -1; // Retorna -1 si no se encuentra una coincidencia
  }
  
  function aleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  }
  const $roulette = document.getElementById("roulette");
  function start() {
    $roulette.classList.add("roulette");
    setTimeout(()=>{
      $roulette.classList.remove("roulette");
    },3000) 
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
      },3500) 

    }
    if($btn.matches("#stop-btn")){
      if (audio.paused) {
        fadeIn(audio, 500); // Aumenta gradualmente el volumen del audio durante 1 segundo
      } else {
        fadeOut(audio, 500); // Reduce gradualmente el volumen del audio durante 1 segundo
      }
     
    }
    


  })
  
  
  
  window.addEventListener("load", ()=>{
    // Llama la función cuando se haya cargado completamente la página
      insertarCanciones();
  })


  function insertarCanciones() {
    const listaCanciones = document.getElementById('lcanciones');
    // Agrega los títulos de las canciones filtradas a la lista
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
    if(cancionesPorReproducir.length >= 1){// Animaciones previas

      // Elegir canción 
      const cancion = cancionesPorReproducir[aleatorio(0,cancionesPorReproducir.length-1)];
      
      // Reproducir canción
      audio = new Audio(cancion.path);
      audio.currentTime = 30; // Establecer inicio 
      fadeIn(audio)
      
      // Actualizar el estado de la canción
      cancion.played = true;
      songs[iCancionByPath(cancion.path)] = cancion;
      
      // Actualizar la lista de canciones en el HTML
      insertarCanciones();
  
      // Actualizar el título de la canción en el HTML
      $contCancion.innerHTML= cancion.title;
      $contCancion.classList.add("mostrando")
    }
    
  }


  