<template>
  <div class="">
    <Header />
    <Presentation id="home" class="pt-6 md:pt-8 lg:pt-10"/>
    <Description id="aboutme" class="pt-12 md:pt-16 lg:pt-24"/>
    <Skills id="skills" class="pt-16 md:pt-20 lg:pt-24"/>
    <Projects id="projects" class="pt-16 md:pt-20 lg:pt-24"/>
    <Footer id="contact" class="pt-64 md:pt-48 lg:pt-24 xl:pt-32 2xl:pt-40"/>
  </div>
</template>

<script>
import Header from '@/components/UI/Header'
import Presentation from '~/components/sections/Presentation.vue'
import Description from '~/components/sections/Description.vue'
import Skills from '~/components/sections/Skills.vue'
import Projects from '~/components/sections/Projects.vue'
import Footer from '~/components/UI/Footer.vue'
export default {
  components: {
    Header, Presentation, Description, Skills, Projects, Footer
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
