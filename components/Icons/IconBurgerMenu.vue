<template>
  <svg aria-hidden="true" class="h-8 w-8" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
    <path
      :class="{ 'active': animate }"
      class="line1"
      d="M21,12.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,12.9,21,12.9z"
    ></path>
    <path
      :class="{ 'active': animate }"
      class="line2"
      d="M21,6.9H3C2.5,6.9,2.1,6.5,2.1,6S2.5,5.1,3,5.1h18c0.5,0,0.9,0.4,0.9,0.9S21.5,6.9,21,6.9z"
    ></path>
    <path
      :class="{ 'active': animate }"
      class="line3"
      d="M21,18.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,18.9,21,18.9z"
    ></path>
    <circle class="sb-icon-hover" cx="50%" cy="50%" fill="transparent" r="75%"></circle>
  </svg>
</template>
<script>
export default {
  props: ['animate']
}
</script>
<style scoped>
.line1 {
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
    transition-property: opacity;
}
.line1.active {
    opacity: 0;
}
.line2, .line3 {
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
    transition-property: transform;
}
.line2.active {
    transform: rotate(45deg) translateX(20%) translateY(-20%);
}
.line3.active {
    transform: rotate(-45deg) translateX(-55%) translateY(-5%);
}
</style>
