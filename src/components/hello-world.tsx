import Vue, {CreateElement} from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { style } from "typestyle"

import styled, { styleIt } from './styled-component';

import { essentialLinks, ecosystemLinks, pluginLinks } from './links-data'
import LinksList from './links-list'
import LinkItem from './links-item';
import Link from './a';

const StyledLink = styleIt(Link, { 'fontSize': '18px' });

const H3 = styled.h3({ 'margin': '40px 0 10px 0' })

@Component({})
export default class HelloWorld extends Vue {
  @Prop({ default: 'default value' }) msg!: string

  render(h: CreateElement) {


    const renderItem = ({ linkItem }: any) =>
      <LinkItem>
        <StyledLink
          onClick={() => console.log('aeee')}
          target='_blank'
          title='Click here'>
          {linkItem.text}
        </StyledLink>
      </LinkItem>

    return (
      <div class="hello">
        { this.msg }
        <p>
          For guide and recipes on how to configure / customize this project,<br/>
            check out the
            <Link 
                href="https://github.com/vuejs/vue-cli/tree/dev/docs"
                target="_blank">
              vue-cli documentation
            </Link>
        </p>
        
        <H3>Installed CLI Plugins</H3>
        <LinksList items={pluginLinks} scopedSlots={{ item: renderItem }} />
        
        <H3>Essential Links</H3>
        <LinksList items={essentialLinks} scopedSlots={{ item: renderItem }} />
        
        <H3>Ecosystem</H3>
        <LinksList items={ecosystemLinks} scopedSlots={{ item: renderItem }} />
      </div>
    )
  }
}