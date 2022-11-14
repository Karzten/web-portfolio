<template>
  <section>
    <TopBar class="font-oxanium" />
    <form class="font-oxanium flex flex-col gap-4">
      <div class="flex flex-col md:flex-row gap-4 md:gap-3 lg:gap-6 items-center">
        <div class="w-full px-5 md:pl-6 md:pr-0 lg:pl-8">
          <label for="name" class="block text-base lg:text-lg font-medium text-gray-800">Nombre</label>
          <div class="mt-2">
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Nombre">
          </div>
        </div>
        <div class="w-full px-5 md:pl-0 md:pr-6 lg:pr-8">
          <label for="name" class="block text-base lg:text-lg font-medium text-gray-800">Email</label>
          <div class="mt-2">
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="name" type="email" placeholder="E-mail">
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <div class="w-full px-5 md:px-6 lg:px-8">
          <label for="name" class="block text-base lg:text-lg font-medium text-gray-800">Mensaje</label>
          <div class="mt-2">
            <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="mensaje" type="textarea" placeholder="Nombre">
            </textarea>
          </div>
        </div>
      </div>
    </form>
  </section>

</template>

<script>
export default {
  components: {
    TopBar: () => import('~/components/UI/TopBar.vue')
  }
}
</script>
