<template>
  <section class="font-oxanium">
    <h2 class="text-2xl font-bold text-center">Mi experiencia</h2>
    <section class="flex flex-col items-center justify-center">
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
