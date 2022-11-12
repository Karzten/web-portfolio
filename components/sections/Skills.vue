<template>
  <section class="font-oxanium">
    <h2 class="text-2xl lg:text-3xl font-bold text-center">Mi experiencia</h2>
    <section class="flex flex-col items-center justify-center mt-8 mb-20 px-10 md:px-48">
      <Skill />
    </section>
  </section>
</template>

<script>
import Skill from '~/components/Skill.vue'

export default {
  components: {
    Skill
  }
}
</script>
