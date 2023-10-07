// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'

import Auth from '../components/Auth.vue'

import './style.css'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      // 'home-features-after': () => h(HomeWhoAreUse),
      // 'not-found': () => h(NotFound)
      'nav-bar-content-after': () => h(Auth)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
