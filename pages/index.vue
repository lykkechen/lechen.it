<template>
  <div>
    Hello
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  head () {
    return {
      title: 'Home |'
    }
  }
})
export default class IndexPage extends Vue {}
</script>
