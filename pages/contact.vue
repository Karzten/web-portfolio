<template>
  <section>
    <TopBar class="font-oxanium" />
    <div class="flex flex-col gap-4 font-oxanium my-4 lg:my-6 px-5 text-center">
      <h2 class="font-bold text-lg lg:text-2xl xl:text-3xl">
        ¡Gracias por querer contactarte conmigo!
      </h2>
      <span class="text-base lg:text-lg xl:text-xl">
        Puedes dejar tu mensaje en la caja de texto, colocando tu nombre y correo electrónico.
      </span>
    </div>
    <form class="font-oxanium flex flex-col gap-4 mb-4 md:px-1 lg:px-40 xl:px-72">
      <div class="flex flex-col md:flex-row gap-4 md:gap-3 lg:gap-6 items-center">
        <div class="w-full px-5 md:pl-6 md:pr-0 lg:pl-8">
          <label for="name" class="block text-base lg:text-lg font-medium text-gray-800">Nombre</label>
          <div class="mt-2">
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-normal focus:border-green-950 focus:outline-none focus:shadow-inner" id="name" type="text" placeholder="Escribe tu nombre...">
          </div>
        </div>
        <div class="w-full px-5 md:pl-0 md:pr-6 lg:pr-8">
          <label for="name" class="block text-base lg:text-lg font-medium text-gray-800">Email</label>
          <div class="mt-2">
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-normal focus:border-green-950 focus:outline-none focus:shadow-inner" id="name" type="email" placeholder="Escribe tu e-mail...">
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <div class="w-full px-5 md:px-6 lg:px-8">
          <label for="name" class="block text-base lg:text-lg font-medium text-gray-800">Mensaje</label>
          <div class="mt-2">
            <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-normal focus:border-green-950 focus:outline-none focus:shadow-inner" id="mensaje" rows="8" placeholder="Escribe aquí tu mensaje...">
            </textarea>
          </div>
        </div>
      </div>
    </form>
    <div class="text-center px-5 my-4 lg:my-8">
      <Button
        class="font-oxanium text-center"
        :text="'Enviar'"
        :typeButton="'submit'"
      />
    </div>

  </section>

</template>

<script>
export default {
  components: {
    TopBar: () => import('~/components/UI/TopBar.vue'),
    Button: () => import('~/components/UI/Button.vue')
  }
}
</script>
