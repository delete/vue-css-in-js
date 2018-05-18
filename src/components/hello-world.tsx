import Vue, {CreateElement} from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { style } from "typestyle"

import { essentialLinks, ecosystemLinks, Links } from './links'

const title = style({ 'margin': '40px 0 0' })
const link = style({ 'color': '#42b983' })
const list = style({ 'listStyleType': 'none', 'padding': 0 })
const list__item = style({ 'display': 'inline-block', 'margin': '0 10px' })


@Component({})
export default class HelloWorld extends Vue {
  @Prop({ default: 'default value' }) msg!: string

  render(h: CreateElement) {
    const renderLinkItems = (linkItem: Links) =>
      <li class={list__item}><a class={link} href={linkItem.href} target="_blank">{linkItem.text}</a></li>
    
    return (
      <div class="hello">
        { this.msg }
        <p>
          For guide and recipes on how to configure / customize this project,<br/>
            check out the
          <a class={ link } href="https://github.com/vuejs/vue-cli/tree/dev/docs" target="_blank">vue-cli documentation</a>.
        </p>
        <h3 class={ title }>Installed CLI Plugins</h3>
        <ul class={ list }>
          <li class={ list__item }><a class={ link } href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank">typescript</a></li>
        </ul>
        
        <h3>Essential Links</h3>
        <ul class={ list }>
          { essentialLinks.map(renderLinkItems) }
        </ul>
        
        <h3>Ecosystem</h3>
        <ul class={ list }>
          { ecosystemLinks.map(renderLinkItems) }
        </ul>
      </div>
    )
  }
}