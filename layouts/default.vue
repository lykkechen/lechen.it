<template>
  <div class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import metadata from '@/utils/metadata'

@Component({
  head () {
    return {
      title: 'Le Chen',
      meta: metadata({
        title: 'Le Chen',
        description: 'Le Chen personal website',
        image: 'https://images.unsplash.com/photo-1566504182406-416ab1e86d5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80',
        url: process.env.BASE_URL + this.$route.path
      }),
      link: [
        {
          rel: 'canonical',
          href: process.env.BASE_URL + this.$route.path
        }
      ],
      htmlAttrs: {
        lang: 'it'
      }
    }
  }
})
export default class DefaultLayout extends Vue {}
</script>
