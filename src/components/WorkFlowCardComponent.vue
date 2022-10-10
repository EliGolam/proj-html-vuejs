<template>
  <article :style="bgImg">
    <div class="flex head">
      <h3 class="font-emphasized text-light">{{ card.title }}</h3>
      <p class="process-number">{{ processId }}</p>
    </div>

    <div class="flex content" :class="`cardID-${card.id}`">
      <div>
        <h4 class="font-subtle-caps">{{ card.subtitle }}</h4>
        <p>{{ card.content }}</p>
      </div>
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
        subtitle: String,
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

  .head {
    align-items: center;
  }
}

.process-number {
  margin-left: auto;
  font-size: $fs-1;
  font-weight: $fw-extra-thin;
}

.content {
  flex-grow: 1;
  align-items: flex-end;

  &.cardID-1,
  &.cardID-3 {
    justify-content: end;
  }

  p {
    max-width: 50ch;
  }
}
</style>