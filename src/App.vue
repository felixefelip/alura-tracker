<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>

    <div class="column is-three-quarter">
      <MeuFormulario />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BarraLateral from './components/barraLateral/BarraLateral.vue'
import MeuFormulario from './components/MeuFormulario.vue'

export default defineComponent({
  name: "App",
    components: {
      BarraLateral,
      MeuFormulario
    }
})
</script>

<style>

</style>
