import Vue, { CreateElement, VNode } from 'vue'
import { style, classes } from 'typestyle'

import { Colors } from '../styles/variables'

const defaultClass = style({ 'color': Colors.green })

// As there are no state, we can create a functional component here.
export default Vue.extend({
  functional: true,

  render(h: CreateElement, { data, props, children }: Record<string, any>): VNode {
    const { class: className, ...rest } = props;

    return (
      <a { ...data } class={ classes(defaultClass, className) }>
        {children}
      </a>
    )
  }
})