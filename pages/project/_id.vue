<template>
  <div class="font-oxanium">
    <TopBar />
    <div class="px-5 py-10">
      <h2>Project Title</h2>
    </div>
  </div>
</template>

<script>
import TopBar from '~/components/UI/Project/TopBar.vue'

export default {
  components: {
    TopBar,
  },
}
</script>

<style scoped>
  h2 {
    @apply text-2xl font-bold text-center;
  }
  @layer utilities {
    @screen md {
      h2 {
        @apply text-3xl;
      }
    }
    @screen lg {
      h2 {
        @apply text-4xl;
      }
    }
  }
</style>
