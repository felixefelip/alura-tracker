import { defineComponent } from 'vue'
import Cronometro from '../cronometro/Cronometro.vue'

export default defineComponent({
  name: 'MeuFormulario',
  components: {
    Cronometro
  },
  data () {
    return {
      tempoEmSegundos: 0,
      cronometro: 0,
      cronometroRodando: false
    }
  },
  methods: {
    iniciar () {
      this.cronometroRodando = true

      this.cronometro = setInterval(() => {
        this.tempoEmSegundos += 1
      }, 1000)
    },
    finalizar () {
      this.cronometroRodando = false

      clearInterval(this.cronometro)
    }
  }
})
