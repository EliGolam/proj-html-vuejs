<template>
  <article :style="bgImg">
    <div class="flex">
      <h3 class="font-emphasized text-light">{{ card.title }}</h3>
      <p class="process-flow">{{ processId }}</p>
    </div>

    <div class="flex content">
      <p>{{ card.content }}</p>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'WorkFlowCardComponent',

    props: {
      card: Object,
      /* Format {
        id: Number,
        title: String,
        content: String,
        bgImgUrl: String,
      }*/
    }, 

    data() {
      return {
        publicPath: process.env.BASE_URL,
      }
    },

    computed: {
      bgImg() {
        const { bgImgUrl } = this.card;
        return `background-image: url(${this.publicPath}${bgImgUrl})`;
      }, 
      processId() {
        return this.zeroPad(this.card.id, 2);
      }
    }, 

    methods: {
      zeroPad: (num, digits) => String(num).padStart(digits, '0'), 
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

article {
  background-repeat: no-repeat;
  background-size: cover;

  color: $clr-light;

  padding: $_size-7;

  display: flex;
  flex-direction: column;
}

.process-flow {
  margin-left: auto;
}

.content {
  flex-grow: 1;

  justify-content: end;
  align-items: flex-end;

  p {
    max-width: 50ch;
  }
}
</style>