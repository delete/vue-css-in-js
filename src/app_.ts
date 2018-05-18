import vue from 'vue'
import { style } from "typestyle"

import HelloWorld from './components/HelloWorld.vue'

const app = style({ 
    'fontFamily': 'Avenir, Helvetica, Arial, sans-serif',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    'textAlign': 'center',
    'color': '#2c3e50',
    'marginTop': '60px'
})

const logoImage = require('./assets/logo.png')

export default vue.extend({
    name: 'app',

    /*
    render(h) {
        return (
            <div id="app" className={ app } >
                <img src={ logoImage } />
                < HelloWorld />
            </div>
        )
    }
    */

    render(h) {
        const children = [
            h('img', {
                attrs: { src: logoImage }
            }),
            h(HelloWorld)
        ]
        
        return h('div', {
            attrs: { 'id': 'app' },
            'class': app
        },
        children)
    }
})