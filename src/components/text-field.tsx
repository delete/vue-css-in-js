import Vue, { CreateElement, VNode } from 'vue'

import styled from './styled-component';

const Input = styled.input({
  'color': '#999',
  'backgroundColor': 'transparent'
})

// As there are no state, we can create a functional component here.
export default Vue.extend({
  functional: true,

  render(h: CreateElement, { data }: Record<string, any>): VNode {
    return (
      <Input {...data} />
    )
  }
})