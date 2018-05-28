import Vue, { CreateElement, VNode } from 'vue'
import { style } from 'typestyle'

import { Colors } from '../styles/variables'

import Link from './link';

import { Link as LinkModel } from './links-data'

export const linkClass = style({ 'fontSize': '18px' })
const linksClass = style({ 'listStyleType': 'none', 'padding': 0 })
const linksClass__item = style({ 'display': 'inline-block', 'margin': '0 10px' })

// As there are no state, we can create a functional component here.
export default Vue.extend({
  functional: true,

  render(h: CreateElement, context: Record<string, any>): VNode {
    const { links } = context.props;

    const renderLink = (linkItem: LinkModel) =>
      <li class={linksClass__item}>
        <Link
            class={linkClass}
            onClick={() => console.log('clicked!')}
            target="_blank">
          {linkItem.text}
        </Link>
      </li>

    return (
      <ul class={linksClass}>
        {links.map(renderLink)}
      </ul>
    )
  }
})