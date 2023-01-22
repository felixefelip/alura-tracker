<template src="./temporizador.html"></template>
<style src="./temporizador.css"></style>

<script lang="ts">
import { defineComponent } from 'vue'
import Botao from '../botao/Botao.vue'
import Cronometro from '../cronometro/Cronometro.vue'

export default defineComponent({
  name: 'MeuFormulario',
  emits: ['aoTemporizadorFinalizado'],
  components: {
    Cronometro,
    Botao
  },
  data () {
    return {
      tempoEmSegundos: 0,
      cronometro: 0,
      cronometroRodando: false
    }
  },
  methods: {
    iniciar () : void {
      this.cronometroRodando = true
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos += 1
      }, 1000)
    },
    finalizar () : void  {
      this.cronometroRodando = false
      clearInterval(this.cronometro)
      this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
      this.tempoEmSegundos = 0
    }
  }
})
</script>
