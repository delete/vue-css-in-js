import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'
import { style } from "typestyle"

import HelloWorld from './components/hello-world'

import { Colors, Align } from './styles/variables'

const appClass = style({ 
    'fontFamily': 'Avenir, Helvetica, Arial, sans-serif',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    'textAlign': Align.center,
    'color': Colors.darkGreen,
    'marginTop': '60px'
})

const logoImage = require('./assets/logo.png')


@Component({
    components: {
        HelloWorld
    }
})
export default class App extends Vue {

    render(h: CreateElement) {
        return (
            <div id="app" class={ appClass } >
                <img src={ logoImage } />
                < HelloWorld msg={"UHULLL"}/>
            </div>
        )
    }
}