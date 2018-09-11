import Vue, { CreateElement, VNode } from 'vue';
import { Prop, Component } from 'vue-property-decorator';
// @ts-ignore
import styled from 'vue-styled-components';

import RenderlessProgress from './renderless-progress';

@Component
export default class ProgressBar extends Vue {

  @Prop({default: 0})
  public current: number;

  @Prop({ default: 0 })
  public total: number;

  public render(h: CreateElement): VNode {

    const Bar = styled.div`
      height: 15px;
      width: 100%;
      border-radius: 50px;
      position: relative;
      background-color: #dedede7d;
    `;

    const BarInner = styled(Bar)`
      background-color: #000;
      position: absolute;
      top: 0;
      left: 0;
      border: none;
      max-width: 498px;
    `;

    return (
      <RenderlessProgress
        current={this.current} 
        total={this.total} 
        scopedSlots={ {default: ({percent, filledWidthStyle}: any) => {
          return <div>
            <span>{percent}%</span>
            <Bar>
              <BarInner
                style={filledWidthStyle}
                title={`${percent}%`}
              />
            </Bar>
            <span> ({this.current}/{this.total}) </span>
          </div>
        }} }
      />
    );
  }
}