import Vue, { CreateElement, VNode } from 'vue'
import { Prop, Component } from 'vue-property-decorator';
// @ts-ignore
import styled from 'vue-styled-components';

import { Link as LinkModel } from './links-data';

@Component({})
export default class LinksList extends Vue {
  @Prop()
  private items: any[];
  
  public render(h: CreateElement): VNode {

    const List = styled.ul`
      list-style-type: none;
      padding: 0;
    `;

    return (
      <List>
        {
          this.items.map(
            (linkItem: LinkModel, index: number) =>
              this.$scopedSlots.item({ linkItem, index }) || ''
          )
        }
      </List>
    )
  }
}