<template>
  <Formulario @aoSalvarTarefa="salvarTarefa"/>
  <div class="lista">
    <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
    <Box v-if="listaEstaVazia">
      Você não está muito produtivo hoje :(
    </Box>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Formulario from '../components/formulario/Formulario.vue'
import Tarefa from '../components/tarefa/Tarefa.vue'
import ITarefa from '../interfaces/ITarefa'
import Box from '../components/box/Box.vue'

export default defineComponent({
  name: "Tarefas",
  components: {
    Formulario,
    Tarefa,
    Box
  },
  data () {
    return {
      tarefas: [] as ITarefa[],
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
  }
})
</script>

<style>
  .lista {
    padding: 1.25rem;
    }

    main {
        --bg-primaro: #fff;
        --texto-primario: #000;
    }

    main.modo-escuro {
        --bg-primaro: #2b2d42;
        --texto-primario: #ddd;
    }

    .conteudo {
        background-color: var(--bg-primaro);
    }
</style>
