<template src="./app.html"></template>
<style src="./app.css"></style>

<script lang="ts">
import { defineComponent } from 'vue'
import BarraLateral from './barraLateral/BarraLateral.vue'
import Formulario from './formulario/Formulario.vue'
import Tarefa from './tarefa/Tarefa.vue'
import ITarefa from '../interfaces/ITarefa'

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    Formulario,
    Tarefa
  },
  data () {
    return {
      tarefas: [] as ITarefa[]
    }
  },
  methods: {
    salvarTarefa (tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    }
  }
})
</script>
