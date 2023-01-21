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
      cronometro: 0
    }
  },
  methods: {
    iniciar () {
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos += 1
      }, 1000)
    },
    finalizar () {
      clearInterval(this.cronometro)
    }
  }
})
