import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Cronometro',
  props: {
    tempoEmSegundos: {
      type: Number,
      default: 0
    }
  },
  computed: {
    tempoDecorrigo () : string {
      return new Date(this.tempoEmSegundos * 1000).toISOString().substr(11, 8)
    }
  },
})
