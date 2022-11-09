<template>
  <section class="flex flex-col gap-8 font-oxanium px-5">
    <h1 class="text-center font-bold text-2xl lg:text-3xl">Mis proyectos</h1>
    <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:flex md:flex-row md:gap-4 justify-center text-xl -mt-2 ">
      <button class="chips active">Todos</button>
      <button class="chips">Diseño UX/UI</button>
      <button class="chips">Frontend</button>
    </div>
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

<style scoped>
  .chips {
    @apply text-green-950 font-semibold bg-white py-2 px-4 rounded-md border border-green-950 text-sm;
  }
  .active{
    @apply text-white font-semibold bg-green-950 py-2 px-4 rounded-md
  }

  @layer utilities{
    .chips:hover {
      @apply bg-green-950 text-white;
    }
    @screen sm {
      .chips {
        @apply text-base;
      }
    }
    @screen md {
      .chips {
        @apply text-xl;
      }
    }
  }
</style>
