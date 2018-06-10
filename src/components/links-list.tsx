import Vue, { CreateElement, VNode } from 'vue'
import { Prop, Component } from 'vue-property-decorator';

import { style } from './styled-component';
import { Link as LinkModel } from './links-data';

@Component({})
export default class LinksList extends Vue {
  @Prop()
  private items: any[];
  
  public render(h: CreateElement): VNode {
    return (
      <ul clas={ style({ 'listStyleType': 'none', 'padding': 0 }) }>
        {this.items.map(
          (linkItem: LinkModel, index: number) =>
          this.$scopedSlots.item({ linkItem, index }) || ''
        )}
      </ul>
    )
  }
}