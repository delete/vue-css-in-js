import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import axios from 'axios';

@Component({})
export default class FetchData extends Vue {

  @Prop()
  private url: string;

  public response: any;
  public loaded: boolean = false;

  public created() {
    axios.get(this.url)
      .then((response: any) => {
        this.response = response
        this.loaded = true
      });
  }

  public render(h: CreateElement) {
    if (!this.loaded) {
      return this.$slots.loading && this.$slots.loading[0];
    }

    return this.$scopedSlots.response && this.$scopedSlots.response({
      response: this.response.data,
    }) || '';
  }
}