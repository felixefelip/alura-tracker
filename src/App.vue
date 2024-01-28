<template src="./app.html"></template>
<style src="./app.css"></style>

<script lang="ts">
import { defineComponent } from 'vue'
import BarraLateral from './components/barraLateral/BarraLateral.vue'

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
  },
  data () {
    return {
      modoEscuroAtivo: false,
    }
  },
  methods: {
    trocarTema (modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo
    },
  }
})
</script>
