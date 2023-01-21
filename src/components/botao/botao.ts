import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Botao',
  props: {
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  }
})
