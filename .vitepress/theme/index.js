import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Home from './layouts/Home.vue'
import Layout from './layouts/Layout.vue'
import Site from './layouts/Site.vue'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Home', Home)
    app.component('site', Site)
  },
}
