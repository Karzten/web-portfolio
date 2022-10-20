<template>
  <button
    :class="typeButton"
    :disabled="disabled"
    >
      {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    typeButton: {
      type: String,
      default: 'download'
    }
  },
}
</script>

<style scoped>
 .download {
  @apply py-3 px-6 rounded-md bg-white text-green-950 font-bold text-lg;
 }
 @media screen and (min-width: 768px) {
  .download {
    @apply py-3 px-6 text-xl;
  }
 }
 @media screen and (min-width: 1024px) {
  .download {
    @apply py-4 px-8 text-2xl;
  }
 }
 .primary {
  @apply py-3 px-6 rounded-md bg-green-950 text-white font-bold text-lg;
 }
 @media screen and (min-width: 768px) {
  .download {
    @apply py-3 px-6 text-xl;
  }
 }
 @media screen and (min-width: 1024px) {
  .download {
    @apply py-4 px-8 text-2xl;
  }
 }
 @layer utilities{
  .download:hover {
    @apply bg-gray-300
  }
  .primary:hover{
    @apply bg-white text-green-950
  }
 }
</style>
