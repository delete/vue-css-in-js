import Vue, { CreateElement, VNode } from 'vue'
import { Component } from 'vue-property-decorator';
import { style } from './styled-component';

@Component({})
export default class LinksItem extends Vue {
  public render(h: CreateElement): VNode {
    return (
      <li class={ style({ 'display': 'inline-block', 'margin': '0 10px' }) }>
        { this.$slots.default[0] }
      </li>
    )
  }
}