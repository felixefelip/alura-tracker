<template src="./formulario.html"></template>
<style src="./formulario.css"></style>

<script lang="ts">
import { defineComponent } from 'vue'
import Temporizador from '../temporizador/Temporizador.vue'

export default defineComponent({
  name: 'Formulario',
  emits: ['aoSalvarTarefa'],
  components: {
    Temporizador
  },
  data () {
    return {
      descricao: ''
    }
  },
  methods: {
    finalizarTarefa (tempoDecorrigo: number) : void {
      this.$emit('aoSalvarTarefa', {
        duracaoEmSegundos: tempoDecorrigo,
        descricao: this.descricao,
      })
      this.descricao = ''
    }
  }
})
</script>
