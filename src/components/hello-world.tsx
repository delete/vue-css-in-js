import Vue, {CreateElement} from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { style } from "typestyle"

import { essentialLinks, ecosystemLinks, pluginLinks } from './links-data'
import Links, { linkClass } from './links'

const titleClass = style({ 'margin': '40px 0 0' })

@Component({})
export default class HelloWorld extends Vue {
  @Prop({ default: 'default value' }) msg!: string

  render(h: CreateElement) {
    return (
      <div class="hello">
        { this.msg }
        <p>
          For guide and recipes on how to configure / customize this project,<br/>
            check out the
          <a class={ linkClass } href="https://github.com/vuejs/vue-cli/tree/dev/docs" target="_blank">vue-cli documentation</a>.
        </p>
        
        <h3 class={ titleClass }>Installed CLI Plugins</h3>
        <Links links={pluginLinks} />
        
        <h3>Essential Links</h3>
        <Links links={ essentialLinks }/>
        
        <h3>Ecosystem</h3>
        <Links links={ecosystemLinks} />
      </div>
    )
  }
}