<template>
  <Box>
    <div class="columns">
      <div class="column is-7">{{ tarefa.descricao || 'Tarefa sem descrição' }}</div>
      <div class="column">
        <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Cronometro from '../cronometro/Cronometro.vue';
import ITarefa from '../../interfaces/ITarefa';
import Box from '../box/Box.vue';

export default defineComponent({
  name: 'Tarefas',
  components: {
    Cronometro,
    Box
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true
    }
  }
})
</script>
