<template src="./app.html"></template>
<style src="./app.css"></style>

<script lang="ts">
import { defineComponent } from 'vue'
import BarraLateral from './barraLateral/BarraLateral.vue'
import Formulario from './formulario/Formulario.vue'
import Tarefa from './tarefa/Tarefa.vue'
import ITarefa from '../interfaces/ITarefa'
import Box from './box/Box.vue'

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    Formulario,
    Tarefa,
    Box
  },
  data () {
    return {
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false,
    }
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0
    }
  },
  methods: {
    salvarTarefa (tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    },
    trocarTema (modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo
    },
  }
})
</script>
