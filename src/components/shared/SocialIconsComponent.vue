<template>
  <ul class="flex social-icons">
    <li class="icon" v-for="brand in socials" :key="brand.icon">
      <a :href="brand.link">
        <font-awesome-icon :icon="['fab', brand.icon]" class="icon" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SocialIcons', 

  data() {
    return {
      socials: [
        { 
          icon:'instagram',
          link: "#"
        },
        { 
          icon:'twitter',
          link: "#"
        },
        { 
          icon:'facebook-f',
          link: "#"
        },
        { 
          icon:'pinterest-p',
          link: "#"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.social-icons {
  /* Flex container */
  gap: $_size-4;

  // Icons
  font-size: $fs-4;
  color: $clr-primary-dark-purple;

  .icon {
    cursor: pointer;

    // Animation
    transition: color $_speed-1 ease-in;

    &:hover {
      transform: scale(1.2);
      color: $clr-primary-purple;
    }
  }
}
</style>