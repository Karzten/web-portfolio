<template>
  <section class="flex flex-col gap-6 font-oxanium px-5">
    <h1 class="text-center font-bold text-2xl lg:text-3xl">Mis proyectos</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card />
      <Card />
      <Card />
    </div>
  </section>
</template>

<script>
import Card from '@/components/UI/Card'
export default {
  components: {
    Card
  },
}
</script>

