import Vue, { CreateElement, VNode } from 'vue';

import { Prop, Component } from 'vue-property-decorator';



@Component
export default class RenderlessProgress extends Vue {

  @Prop({ required: true })
  private total: number;

  @Prop({ required: true })
  private current: number;


  get dinamicSize(): any {
    return {width: `${this.current}%`};
  }

  get percent(): number {
    return (this.current * 100) / this.total;
  }

  public render(): any {
    return this.$scopedSlots.default({
      percent: this.percent,
      filledWidthStyle: this.dinamicSize
    });
  }
}
