<template src="./app.html"></template>
<style src="./app.css"></style>

<script lang="ts">
import { defineComponent } from 'vue'
import BarraLateral from './barraLateral/BarraLateral.vue'
import Formulario from './formulario/Formulario.vue'

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    Formulario
  }
})
</script>
