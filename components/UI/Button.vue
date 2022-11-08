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
 .contact{
    @apply py-3 px-6 rounded-md bg-green-1000 text-white border border-white font-bold text-lg;
 }
 .primary {
    @apply py-3 px-6 rounded-md bg-green-950 text-white font-bold text-lg;
 }
 @media screen and (min-width: 768px) {
  .download {
    @apply py-3 px-6 text-xl;
  }
  .contact{
    @apply py-3 px-6 text-xl;
  }
  .primary {
    @apply py-3 px-5 text-lg;
  }
 }
 @media screen and (min-width: 1024px) {
  .download {
    @apply py-4 px-8 text-2xl;
  }
  .contact{
    @apply py-4 px-8 text-2xl;
  }
  .primary {
    @apply py-3 px-6 text-xl;
  }
 }

 @layer utilities{
  .download:hover {
    @apply bg-gray-300
  }
  .primary:hover{
    @apply bg-green-1000 text-white
  }
  .contact:hover{
    @apply bg-white text-green-950 border border-green-1000
  }
 }

</style>
