<template>
  <div>
    <div class="w-screen h-screen">
      <div class="container mx-auto rounded border border-gray-50 p-2 z-50">
        <div class="flex items-center justify-start">
          <p class="mr-4">
            👀 Revas is hiring!
          </p>
          <a class="rounded bg-gray-800 text-white px-2 py-1 hover:underline" href="https://www.revas.io">discover more</a>
        </div>
      </div>
      <div class="container mx-auto py-10 px-8">
        <div class="mb-8">
          <div class="text-4xl text-white">Hi! 👋</div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full md:w-4/5 mb-4 md:mb-0">
            <div class="text-white">
              <div class="mb-4">
                <div class="text-2xl">About me</div>
              </div>
              <div class="mb-2">
                My name is Le Chen, but I usually introduce myself as Luisa.
              </div>
              <div class="mb-2">
                I'm currently working in <a href="https://www.revas.io" class="underline">Revas Società Benefit</a>, where I am also partner.
              </div>
              <div class="mb-2">
                I mostly do Frontend Web Develpment (with Vue.js and Nuxt.js) and sometimes Backend (Golang).
              </div>
            </div>
            <div class="text-white md:mt-24">
              <div class="mb-4">
                <div class="text-2xl">Hobbies</div>
              </div>
              <div class="mb-2">
                🍿 Netflix and chill
              </div>
              <div class="mb-2">
                🍣 Sushi lover
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/5">
            <div class="bg-white shadow-2xl p-4 rounded-lg">
              <div class="mb-4">
                <div class="text-2xl">Contacts</div>
              </div>
              <div class="mb-2">
                <div class="font-bold">
                  Email
                </div>
                <a href="mailto:le.chen@revas.io" class="underline">le.chen@revas.io</a>
              </div>
              <div class="mb-2">
                <div class="font-bold">
                  Socials
                </div>
              </div>
              <div class="mb-2">
                <a href="https://github.com/lykkechen" class="underline">GitHub</a>
              </div>
              <div class="mb-2">
                <a href="https://www.linkedin.com/in/lykkechen/" class="underline">Linkedin</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  head() {
    return {
      title: 'Home |',
    }
  },
})
export default class IndexPage extends Vue {}
</script>
