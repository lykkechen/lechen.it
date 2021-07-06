<template>
  <div class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class DefaultLayout extends Vue {}
</script>
