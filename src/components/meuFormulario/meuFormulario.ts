import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MeuFormulario',
  data () {
    return {
      tempoEmSegundos: 0,
      cronometro: 0
    }
  },
  computed: {
    tempoDecorrigo () : string {
      return new Date(this.tempoEmSegundos * 1000).toISOString().substr(11, 8)
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
