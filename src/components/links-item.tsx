import Vue, { CreateElement, VNode } from 'vue'
import { Component } from 'vue-property-decorator';
// @ts-ignore
import styled from 'vue-styled-components';

@Component({})
export default class LinksItem extends Vue {
  public render(h: CreateElement): VNode {

    const ListItem = styled.li`
      display: inline-block;
      margin: 0 10px;
    `;

    return (
      <ListItem>
        { this.$slots.default[0] }
      </ListItem>
    )
  }
}