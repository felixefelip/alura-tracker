<template src="./app.html"></template>
<style src="./app.css"></style>

<script lang="ts">
import { defineComponent } from 'vue'
import BarraLateral from './barraLateral/BarraLateral.vue'
import MeuFormulario from './meuFormulario/MeuFormulario.vue'

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    MeuFormulario
  }
})
</script>
