import DefaultLayout from '~/layouts/Default.vue'
import 'prismjs/themes/prism-twilight.css'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Flamenco:300|Text+Me+One&display=swap'
  });
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Heebo:100|Kanit:100|Lato:100|Roboto:300&display=swap'
  });
}