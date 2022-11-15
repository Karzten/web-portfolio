<template>
  <header class="flex justify-between items-center py-5 px-5 md:py-6 md:px-6 lg:px-8 border-b-2">
    <div class="cursor-pointer" @click="goToPrev()">
      <IconArrowLeft />
    </div>
    <div class="text-center text-xl md:text-2xl lg:text-3xl font-bold">
      Homero Zegarra
    </div>
    <div>
      <IconRefresh />
    </div>
  </header>
</template>

<script>
export default {
  components: {
    IconArrowLeft: () => import('~/components/Icons/IconArrowLeft.vue'),
    IconRefresh: () => import('~/components/Icons/IconRefresh.vue')
  },
  methods: {
    goToPrev() {
      this.$router.push('/')
    }
  }
}
</script>
