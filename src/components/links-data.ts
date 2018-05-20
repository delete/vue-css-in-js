export interface Link {
    href: string
    text: string
}

export const essentialLinks: Array < Link > = [
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

export const ecosystemLinks: Array < Link > = [
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

export const pluginLinks: Array < Link > = [
    {
        href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript',
        text: 'typescript'
    }
]