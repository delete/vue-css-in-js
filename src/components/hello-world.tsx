import Vue, {CreateElement} from 'vue'
import { Component, Prop } from 'vue-property-decorator'
// @ts-ignore
import styled from 'vue-styled-components';

import { essentialLinks, ecosystemLinks, pluginLinks } from './links-data'
import LinksList from './links-list'
import LinkItem from './links-item';
import Link from './a';
import FetchData from './fetch-data';
import ProgressBar from './progress-bar';

const StyledLink = styled(Link)`
  font-size: 18px;
`;

const H3 = styled.h3`
  margin: 40px 0 10px 0;
`;

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

        <p>{ this. textValue }</p>

        <ProgressBar current={20} total={100}/>

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