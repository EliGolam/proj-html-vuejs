<template>
  <div class="loading-screen">
    <div class="loading-message flex-column">
      <p>Hi!</p>
      <p>We're preparing a freshly baked website for you!</p>
    </div>

    <div class="svg-clipped" >
      <div class="loading-fill">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="100 0 1440 320">
          <path class="wave-fill" fill="#0099ff" fill-opacity="1" d="M0,128L30,112C60,96,120,64,180,42.7C240,21,300,11,360,21.3C420,32,480,64,540,69.3C600,75,660,53,720,48C780,43,840,53,900,80C960,107,1020,149,1080,181.3C1140,213,1200,235,1260,224C1320,213,1380,171,1410,149.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>
      </div>
    </div>

    <svg viewBox="0 0" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="loading-text">
          <text :x="0" :y="200" class="loading-word">bakery.</text>
        </clipPath>
      </defs>
    </svg>
  </div>
</template>



<style lang="scss" scoped>
@import '@/assets/styles/variables';
@import url('https://fonts.googleapis.com/css2?family=Ultra&display=swap');

$animationDuration: 4500ms;

.loading-screen {
  // Position
  position: absolute;
    top: 0;
    z-index: 10;

  // Size  
  height: 100%;
  width: 100%;

  background-color: $clr-primary-light;
  padding: $_size-2;

  // Animation
  animation: 600ms ease $animationDuration forwards fadeOut;


  .loading-message {
    font-size: $fs-5;
    color: $clr-primary;
  }

  .svg-clipped {
    clip-path: url(#loading-text);
  
    background-color: $clr-primary-light;
    
    svg {
      width: 1600px;
    }
    .wave-fill {
      fill: $clr-primary;
  
      transform: translateY(10%);
      animation: $animationDuration linear forwards fill-loader;
    }
  
  }
  .loading-word {
    font-family: 'Ultra', $ff-secondary;
    font-size: 4rem;
    font-weight: 900;
  }

  // MEDIA QUERIES
  @media only screen and (min-width: $md-breakpoint) {
    padding: $_size-10;

    .loading-message {
      font-size: $fs-2;
    }
    .loading-word {
      font-size: 7rem;
    }
  }
  

}


// Keyframes
@keyframes fill-loader {
  from {
    transform: translateY(50%);
  }

  25% {
    transform: translateY(40%);
  }

  40% {
    transform: translateY(40%);
  }

  75% {
    transform: translateY(20%);
  }

  85% {
    transform: translateY(20%);
  }

  to {
    transform: translateY(0%);
  }
};

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>