<template>
  <footer>
    <div class="bg-green-950 font-oxanium text-center px-6 py-6 flex flex-col gap-10">
      <div class="bg-green-1000 rounded-lg px-5 -mt-40 lg:-mt-20">
        <div class="flex flex-col gap-8 lg:flex-row lg:justify-evenly lg:items-center py-10">
          <div class="text-white text-xl font-bold md:text-2xl lg:text-xl xl:text-2xl">
            <p>Trabajemos juntos</p>
          </div>
          <div class="text-white text-lg px-6 md:text-xl xl:text-2xl">
            <p>Si estás interesado o interesada en mi perfil, envíame un e-mail</p>
          </div>
          <div>
            <a href="/contact"><Button text="Contáctame" :typeButton="'contact'"/></a>
          </div>
        </div>
      </div>
      <div class="flex flex-row gap-8 items-center justify-center">
        <div class="">
          <img src="@/assets/image/behance.png" alt="">
        </div>
        <div class="">
          <img src="@/assets/image/linkedin.png" alt="">
        </div>
      </div>
      <div>
        <span class="text-base xl:text-xl font-bold text-white">Diseñado y codeado por © 2022 Homero Zegarra.</span>
      </div>
    </div>
  </footer>

</template>

<script>
import Button from '@/components/UI/Button'
export default {
  components: {
    Button
  },
}
</script>
