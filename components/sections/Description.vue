<template>
  <section class="bg-green-950 text-white px-8 py-8 md:py-10 lg:py-12 font-oxanium text-center">
    <h3 class="text-lg md:text-xl lg:text-3xl font-bold">Hola, mi nombre es Homero. Mucho gusto</h3>
    <p class="text-base md:text-lg lg:text-2xl pt-4">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero explicabo amet ad doloremque voluptates
      harum hic ut commodi, molestiae neque nostrum facere a! Porro delectus mollitia iste ab quas aliquam!
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero explicabo amet ad doloremque voluptates
      harum hic ut commodi, molestiae neque nostrum facere a! Porro delectus mollitia iste ab quas aliquam!
    </p>
    <Button text="Descargar CV" class="mt-6" :typeButton="download"/>
  </section>
</template>

<script>
import Button from '@/components/UI/Button'
export default {
  components: {
    Button
  },
}
</script>
