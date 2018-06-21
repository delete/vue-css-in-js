import Vue, { CreateElement, VNode } from 'vue';
import { Prop, Component } from 'vue-property-decorator';

import RenderlessProgress from './renderless-progress';
import { styled } from 'style-it';
import { NestedCSSProperties } from 'typestyle/lib/types';

@Component
export default class ProgressBar extends Vue {

  @Prop({default: 0})
  public current: number;

  @Prop({ default: 0 })
  public total: number;

  public render(h: CreateElement): VNode {

    const percentBar = (props: Record<string, any>) => ({
      height: `${props.height || 15}px`,
      width: `${props.width || 100}%`,
      borderRadius: '50px',
      position: 'relative',
      backgroundColor: `${props.secondary || '#dedede7d'}`,
    }) as NestedCSSProperties;

    const percentBarFill = (props: Record<string, any>) => ({
      backgroundColor: `${props.primary || '#000'}`,
      position: 'absolute',
      top: 0,
      left: 0,
      border: 'none',
      maxWidth: '498px',
    }) as NestedCSSProperties;


    const Bar = styled.div(percentBar({}))
    const BarInner = styled.span({
      ...percentBar({}),
      ...percentBarFill({})
    })

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