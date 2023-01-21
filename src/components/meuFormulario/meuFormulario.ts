import { defineComponent } from 'vue'
import Temporizador from '../temporizador/Temporizador.vue'

export default defineComponent({
  name: 'MeuFormulario',
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
      console.log('tempo da tarefa', tempoDecorrigo)
      console.log('descrição da tarefa', this.descricao)
      this.descricao = ''
    }
  }
})
