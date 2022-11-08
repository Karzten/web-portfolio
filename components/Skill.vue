<template>
  <div class="flex flex-col gap-20 lg:flex-row  ">
    <div class="flex flex-col gap-6">
      <section class="flex flex-col gap-4 items-center">
        <img src="@/assets/image/frontend.png" alt="" class="w-24">
        <span class="text-lg md:text-xl lg:text-2xl text-center font-bold">Desarrollador Frontend</span>
        <p class="text-base md:text-lg lg:text-xl text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Iusto, rem officia!
        </p>
        <Button text="Ver proyectos" :typeButton="'primary'"/>
      </section>
      <section class="flex flex-col gap-2 lg:gap-4 items-center">
        <span class="text-center md:text-lg lg:text-xl">Lenguajes que hablo: </span>
        <div class="flex flex-row gap-4 md:gap-8 lg:gap-10">
          <div class="flex flex-col gap-1 items-center text-sm w-1/3">
            <img src="@/assets/image/knowledges/html.png" alt="" class="w-12 object-scale-down">
            <span class="font-bold text-xs md:text-sm lg:text-base">HTML</span>
          </div>

          <div class="flex flex-col gap-1 items-center text-sm w-1/3">
            <img src="@/assets/image/knowledges/css.png" alt="" class="w-12 object-scale-down">
            <span class="font-bold text-xs md:text-sm lg:text-base">CSS3</span>
          </div>

          <div class="flex flex-col gap-1 items-center text-sm w-1/3">
            <img src="@/assets/image/knowledges/javascript.png" alt="" class="w-12 object-scale-down">
            <span class="font-bold text-xs md:text-sm lg:text-base">JS</span>
          </div>

        </div>
      </section>
      <section class="flex flex-col gap-2 lg:gap-4 items-center">
        <span class="text-center md:text-lg lg:text-xl">Uso los frameworks: </span>
        <div class="flex flex-row gap-4 md:gap-8 lg:gap-10">
          <div class="flex flex-col gap-1 items-center text-sm w-1/3">
            <img src="@/assets/image/frameworks/vue.png" alt="" class="w-12 object-scale-down">
            <span class="font-bold text-xs md:text-sm lg:text-base">Vue.js</span>
          </div>

          <div class="flex flex-col gap-1 items-center text-sm w-1/3">
            <img src="@/assets/image/frameworks/nuxt.png" alt="" class="w-12 object-scale-down">
            <span class="font-bold text-xs md:text-sm lg:text-base">Nuxt.js</span>
          </div>

          <div class="flex flex-col gap-1 items-center text-sm w-1/3">
            <img src="@/assets/image/frameworks/tailwind.png" alt="" class="w-12 object-scale-down">
            <span class="font-bold text-xs md:text-sm lg:text-base">Tailwind</span>
          </div>

        </div>
      </section>
      <section class="flex flex-col gap-2 lg:gap-4 items-center">
        <span class="text-center md:text-lg lg:text-xl">Uso las herramientas: </span>
        <div class="flex flex-row gap-4 md:gap-8 lg:gap-10">
          <div class="flex flex-col gap-1 items-center text-sm w-1/3 md:w-1/2">
            <img src="@/assets/image/widgets/vscode.png" alt="" class="w-12 object-scale-down">
            <span class="font-bold text-xs md:text-sm text-center lg:text-base">VS Code</span>
          </div>

          <div class="flex flex-col gap-1 items-center text-sm w-1/3">
            <img src="@/assets/image/widgets/github.png" alt="" class="w-12 object-scale-down">
            <span class="font-bold text-xs md:text-sm lg:text-base">GitHub</span>
          </div>

          <div class="flex flex-col gap-1 items-center text-sm w-1/3">
            <img src="@/assets/image/widgets/bitbucket.png" alt="" class="w-12 object-scale-down">
            <span class="font-bold text-xs md:text-sm lg:text-base">Bitbucket</span>
          </div>

        </div>
      </section>
    </div>
    <div class="flex flex-col gap-6">
      <section class="flex flex-col gap-4 items-center">
        <img src="@/assets/image/desing.png" alt="" class="w-24">
        <span class="text-lg lg:text-2xl text-center font-bold">Diseñador UX/UI</span>
        <p class="text-base lg:text-xl text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Iusto, rem officia!
        </p>
        <Button text="Ver proyectos" :typeButton="'primary'"/>
      </section>
      <section class="flex flex-col gap-2 lg:gap-3 items-center">
        <span class="text-center lg:text-xl">Tengo conocimientos en: </span>
        <div class="flex flex-row gap-4">
          <span class="text-center lg:text-xl">UX, UI, Desing Thinking, Atomic Desing</span>
        </div>
      </section>
      <section class="flex flex-col gap-2 lg:gap-4 items-center">
        <span class="text-center lg:text-xl">Herramientas que uso: </span>
        <div class="flex flex-col gap-3 md:gap-4 lg:gap-6">
          <div class="flex flex-row gap-4 md:gap-8 lg:gap-10">
            <div class="flex flex-col gap-1 items-center text-sm w-1/3">
              <img src="@/assets/image/widgets/figma.png" alt="" class="w-12 object-scale-down">
              <span class="font-bold text-xs lg:text-base">Figma</span>
            </div>
            <div class="flex flex-col gap-1 items-center text-sm w-1/3">
              <img src="@/assets/image/widgets/whismical.png" alt="" class="w-12 object-scale-down">
              <span class="font-bold text-xs lg:text-base">Whismical</span>
            </div>
            <div class="flex flex-col gap-1 items-center text-sm w-1/3">
              <img src="@/assets/image/widgets/optimal.png" alt="" class="w-12 object-scale-down">
              <span class="font-bold text-xs lg:text-base">Optimal</span>
            </div>
          </div>
          <div class="flex flex-row gap-4 md:gap-8 lg:gap-10">
            <div class="flex flex-col gap-1 items-center text-sm w-1/3">
              <img src="@/assets/image/widgets/balsamiq.png" alt="" class="w-12 object-scale-down">
              <span class="font-bold text-xs lg:text-base">Balsamiq</span>
            </div>
            <div class="flex flex-col gap-1 items-center text-sm w-1/3">
              <img src="@/assets/image/widgets/draw.png" alt="" class="w-12 object-scale-down">
              <span class="font-bold text-xs lg:text-base">draw.io</span>
            </div>
            <div class="flex flex-col gap-1 items-center text-sm w-1/3">
              <img src="@/assets/image/widgets/photoshop.png" alt="" class="w-12 object-scale-down">
              <span class="font-bold text-xs lg:text-base">Photoshop</span>
            </div>
          </div>
        </div>
      </section>
    </div>
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
