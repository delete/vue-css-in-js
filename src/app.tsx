import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'
// @ts-ignore
import styled from 'vue-styled-components';

import HelloWorld from './components/hello-world'

import { Colors, Align } from './styles/variables'

const AppContainer = styled.div`
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: ${Align.center};
  color: ${Colors.darkGreen};
  margin-top: 60px;
`

const logoImage = require('./assets/logo.png')


@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {

  render(h: CreateElement) {
    return (
      <AppContainer id="app">
        <img src={logoImage} />
        < HelloWorld msg={"UHULLL"} />
      </AppContainer>
    )
  }
}