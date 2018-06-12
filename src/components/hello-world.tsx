import Vue, {CreateElement} from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { style } from "typestyle"

import styled, { styleIt } from './styled-component';

import { essentialLinks, ecosystemLinks, pluginLinks } from './links-data'
import LinksList from './links-list'
import LinkItem from './links-item';
import Link from './a';
import TextField from './text-field';
import FetchData from './fetch-data';

const StyledLink = styleIt(Link, { 'fontSize': '18px' });

const H3 = styled.h3({ 'margin': '40px 0 10px 0' })

@Component({})
export default class HelloWorld extends Vue {
  @Prop({ default: 'default value' }) public msg!: string

  public textValue: string = '';

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

    const renderResponse = ({ response }: any) => 
      <ul>{response.map((d: any) => <li>{d.full_name}</li>)}</ul>;

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

        <H3>Custom input</H3>
        <TextField
          placeholder='Write here'
          value={ this.textValue }
          onInput={({ target }: Event) => ( this.textValue = (target as HTMLInputElement).value) }
        />

        <p>{ this. textValue }</p>

        <H3>Vue repos</H3>
        <FetchData
          url='https://api.github.com/orgs/vuejs/repos'
          scopedSlots={{ response: renderResponse }}>
          <p slot='loading'>Loading repos...</p>
        </FetchData>  
      </div>
    )
  }
}