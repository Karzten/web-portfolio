<template>
  <div class="">
    <Header />
    <Presentation class="mt-8 md:mt-10 lg:mt-12"/>
    <Description class="mt-8 md:mt-10 lg:mt-12"/>
    <Skills class="mt-8 md:mt-10 lg:mt-12"/>
    <Footer class="mt-64 md:mt-10 lg:mt-12"/>
  </div>
</template>

<script>
import Header from '~/components/UI/Header.vue'
import Presentation from '~/components/sections/Presentation.vue'
import Description from '~/components/sections/Description.vue'
import Skills from '~/components/sections/Skills.vue'
import Footer from '~/components/UI/Footer.vue'
export default {
  components: {
    Header, Presentation, Description, Skills, Footer
  }
}
</script>

<style>

</style>
