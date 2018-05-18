import Vue, { CreateElement } from 'vue';
import { Component } from 'vue-property-decorator';
import { style } from "typestyle"

import HelloWorld from './components/hello-world'

const app = style({ 
    'fontFamily': 'Avenir, Helvetica, Arial, sans-serif',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    'textAlign': 'center',
    'color': '#2c3e50',
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
            <div id="app" class={ app } >
                <img src={ logoImage } />
                < HelloWorld msg={"UHULLL"}/>
            </div>
        )
    }
}