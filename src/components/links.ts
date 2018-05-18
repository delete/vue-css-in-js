export interface Links {
    href: string
    text: string
}

export const essentialLinks: Array < Links > = [
    {
        href: 'https://vuejs.org',
        text: 'Core Docs'
    },
    {
        href: 'https://forum.vuejs.org',
        text: 'Forum'
    },
    {
        href: 'https://chat.vuejs.org',
        text: 'Community Chat'
    }, {
        href: 'https://twitter.com/vuejs',
        text: 'Twitter'
    }
]

export const ecosystemLinks: Array < Links > =[
    {
        href: 'https://router.vuejs.org/en/essentials/getting-started.html',
        text: 'vue-router'
    },
    {
        href: 'https://vuex.vuejs.org/en/intro.html',
        text: 'vuex'
    },
    {
        href: 'https://github.com/vuejs/vue-devtools#vue-devtools',
        text: 'vue-devtools'
    }, {
        href: 'https://vue-loader.vuejs.org',
        text: 'vue-loader'
    }, {
        href: 'https://github.com/vuejs/awesome-vue',
        text: 'awesome-vue'
    }
]