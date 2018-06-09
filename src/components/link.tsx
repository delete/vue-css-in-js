import Vue, { CreateElement, VNode } from 'vue'

import styled from './styled-component';

const StyledLink = styled.a({ 'color': 'blue' })

// As there are no state, we can create a functional component here.
export default Vue.extend({
  functional: true,

  render(h: CreateElement, { data, props, children }: Record<string, any>): VNode {
    const { class: className } = props;
    return (
      <StyledLink {...data} myProp={ 'olar' } class={ className }>
        {children}
      </StyledLink>
    )
  }
})