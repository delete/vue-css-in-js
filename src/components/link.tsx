import Vue, { CreateElement, VNode } from 'vue'
import { style, classes } from 'typestyle'

import styled from './styled-component';

import { Colors } from '../styles/variables'

const defaultClass = style({ 'color': Colors.green })

const StyledLink = styled.a({ 'color': 'blue' })

// As there are no state, we can create a functional component here.
export default Vue.extend({
  functional: true,

  render(h: CreateElement, { data, props, children }: Record<string, any>): VNode {
    const { class: className, ...rest } = props;
    return (
      <StyledLink {...data} myProp={ 'olar' } class={ className }>
        {children}
      </StyledLink>
      // 
      // <a {...data} class={classes(defaultClass, className)}>
      //   {children}
      // </a>
    )
  }
})