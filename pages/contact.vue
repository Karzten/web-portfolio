<template>
  <section>
    <TopBar class="font-oxanium"  @cleanForm="onClickClean" />
    <div v-if="success" class="bg-green-950 text-white text-lg p-4">
      ¡Gracias por ponerte en contacto conmigo! Te responderé lo antes posible.
    </div>
    <div class="flex flex-col gap-4 font-oxanium my-4 lg:my-6 px-5 text-center">
      <h2 class="font-bold text-lg lg:text-2xl xl:text-3xl">
        ¡Gracias por querer contactarte conmigo!
      </h2>
      <span class="text-base lg:text-lg xl:text-xl">
        Puedes dejar tu mensaje en la caja de texto, colocando tu nombre y correo electrónico.
      </span>
    </div>
    <form class="font-oxanium flex flex-col gap-4 mb-4 md:px-1 lg:px-40 xl:px-72">
      <div v-if="errored" class="rounded bg-red-200 text-lg p-4">
        Ups, parece que algo ha salido mal. ¿Llenaste todos los campos?
      </div>
      <div class="flex flex-col md:flex-row gap-4 md:gap-3 lg:gap-6 items-center">
        <div class="w-full px-5 md:pl-6 md:pr-0 lg:pl-8">
          <label for="name" class="block text-base lg:text-lg font-medium text-gray-800">Nombre</label>
          <div class="mt-2">
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-normal focus:border-green-950 focus:outline-none focus:shadow-inner" id="name" type="text" v-model="name" placeholder="Escribe tu nombre...">
          </div>
        </div>
        <div class="w-full px-5 md:pl-0 md:pr-6 lg:pr-8">
          <label for="name" class="block text-base lg:text-lg font-medium text-gray-800">Email</label>
          <div class="mt-2">
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-normal focus:border-green-950 focus:outline-none focus:shadow-inner" id="name" type="email" v-model="email" placeholder="Escribe tu e-mail...">
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <div class="w-full px-5 md:px-6 lg:px-8">
          <label for="name" class="block text-base lg:text-lg font-medium text-gray-800">Mensaje</label>
          <div class="mt-2">
            <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-normal focus:border-green-950 focus:outline-none focus:shadow-inner" id="mensaje" rows="8" v-model="message" placeholder="Escribe aquí tu mensaje...">
            </textarea>
          </div>
        </div>
      </div>
      <div class="text-center px-5 my-4 lg:my-8">
        <button type="submit" @click.prevent="send" class="submit ">{{ loading ? "Enviando mensaje..." : "Enviar" }}</button>
      </div>
    </form>
  </section>

</template>

<script>
export default {
  components: {
    TopBar: () => import('~/components/UI/TopBar.vue'),
    Button: () => import('~/components/UI/Button.vue')
  },
  data: () => ({
    loading: false,
    success: false,
    errored: false,
    name: '',
    email: '',
    message: '',
  }),
  methods: {
    send() {
      this.loading = true
      this.$axios.post('/mail/send', {
        from: this.email,
        subject: 'Pruebita',
        text: 'Mi email es ' + this.email + ' ' + this.message,
      }).then(response => {
          this.success = true
          this.errored =false
        })
        .catch(error => {
          this.errored = true
        })
        .finally(() => {
          this.loading = false
        });
    },
    onClickClean () {
      this.name = ''
      this.email = ''
      this.message = ''
    }
  }
}
</script>

<style scoped>
  .submit {
    @apply py-3 px-6 rounded-lg bg-green-950 text-white font-bold text-lg;
  }
  @media screen and (min-width: 280px) and (max-width: 680px) {
    .submit{
      @apply w-full;
    }
  }
  @media screen and (min-width: 768px) {
    .submit {
      @apply py-3 px-32 text-xl;
    }
  }
 @media screen and (min-width: 1024px) {
  .submit {
    @apply py-3 px-32 text-2xl;
  }
 }

 @layer utilities{
  .submit:hover{
    @apply bg-green-1000 text-white
  }
 }


</style>
