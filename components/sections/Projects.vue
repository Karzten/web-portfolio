<template>
  <section id="projects" class="flex flex-col gap-8 font-oxanium px-5">
    <h1 class="text-center font-bold text-2xl lg:text-3xl">Mis proyectos</h1>
    <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:flex md:flex-row md:gap-4 justify-center text-xl -mt-2 ">
      <button class="chips active">Todos</button>
      <button class="chips">Diseño UX/UI</button>
      <button class="chips">Frontend</button>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="project in projects" :key="project.id">
        <Card
          :id="project.project_id"
          :name="project.name"
          :description="project.short_description"
          :image="project.image"
          :url="project.url"
          :category="project.category"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Card from '@/components/UI/Card'
export default {
  components: {
    Card
  },
  data () {
    return {
      projects: [
        {
          project_id: 1,
          name: 'Easy Food',
          short_description: 'Aplicación Móvil para donar, vender o comprar comida y permitir que los restaurantes puedan donar comida a personas necesitadas.',
          url: '',
          image: 'projects/easyfood.png',
          category: 'Diseño UX/UI',
        },
        {
          project_id: 2,
          name: 'Crunchyroll Rediseño',
          short_description: 'Rediseño del aplicativo móvil Crunchyroll, plataforma para ver anime online',
          url: '',
          image: 'projects/crunchyroll.png',
          small_image: 'projects/crunchyroll_small.png',
          category: 'Diseño UX/UI',
        },
        {
          project_id: 3,
          name: 'Dermalia',
          short_description: 'Plataforma e-commerce para venta de productos dermatológicos en Perú.',
          url: '',
          image: 'projects/dermalia.png',
          small_image: 'projects/dermalia_small.png',
          category: 'Frontend',
        },

      ]
    }
  }
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
