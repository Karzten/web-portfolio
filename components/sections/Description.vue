<template>
  <div>
    <section class="bg-green-950 text-white px-8 py-8 md:py-10 lg:py-12 font-oxanium text-center">
      <h3 class="text-lg md:text-xl lg:text-3xl font-bold">Hola, mi nombre es Homero. Mucho gusto</h3>
      <p class="text-base md:text-lg lg:text-2xl pt-4">
        Soy una persona proactiva con muchas ganas de aprender. Me gusta trabajar en equipo, con constante comunicación para
        ayudar a cumplir objetivos. Poseo conocimientos en Desarrollo Web y actualmente me encuentro estudiando
        sobre Diseño UX/UI.
      </p>
      <a href="/cv.pdf" download><Button text="Descargar CV" class="mt-6" :typeButton="'download'"/></a>
    </section>
  </div>
</template>

<script>
import Button from '@/components/UI/Button'
export default {
  components: {
    Button
  },
}
</script>
