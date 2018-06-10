import Vue, { CreateElement, VNode } from 'vue'

import styled from './styled-component';

const A = styled.a({ 'color': 'blue' })

// As there are no state, we can create a functional component here.
export default Vue.extend({
  functional: true,

  render(h: CreateElement, { data, props, children }: Record<string, any>): VNode {
    return (
      <A {...data}>
        {children}
      </A>
    )
  }
})