<template>
  <div>
    <div class="svg-clipped flex-column" >
      <div class="loading-fill">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 320">
          <path class="wave-fill" fill="#0099ff" fill-opacity="1" d="M0,64L30,69.3C60,75,120,85,180,85.3C240,85,300,75,360,69.3C420,64,480,64,540,85.3C600,107,660,149,720,138.7C780,128,840,64,900,42.7C960,21,1020,43,1080,42.7C1140,43,1200,21,1260,26.7C1320,32,1380,64,1410,80L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>
      </div>
    </div>

    <svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="loading-text">
          <text :x="positionLoader.x" :y="positionLoader.y" class="loading-word">bakery.</text>
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script>
  export default {
    computed: {
      positionLoader() {
        const windowHeigth = window.innerHeight;
      
        return {
          x: 30,
          y: windowHeigth / 2
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';
@import url('https://fonts.googleapis.com/css2?family=Ultra&display=swap');

.loading-word {
  font-family: 'Ultra', $ff-secondary;
  font-size: 15rem;
  font-weight: 900;
}

.svg-clipped {
  clip-path: url(#loading-text);

  background-color: $clr-primary-light;
  width: 100%;
  

  overflow: hidden;

  align-items: flex-end;

  .wave-fill {
    fill: $clr-primary;

    transform: translateY(65%);
    animation: 6000ms linear forwards fill-loader;
  }

}

@keyframes fill-loader {
  from {
    transform: translateY(65%);
    
  }

  to {
    transform: translateY(0%);
  }
}
</style>