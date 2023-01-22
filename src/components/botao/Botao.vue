<template src="./botao.html"></template>
<style src="./botao.css"></style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Botao',
  props: {
    text: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
})
</script>
