import Vue from 'vue';
import VueRadioToggleButtons from 'vue-radio-toggle-buttons'
import 'vue-radio-toggle-buttons/dist/vue-radio-toggle-buttons.css'
import 'c-swipe/dist/swipe.css';
import { Swipe, SwipeItem } from 'c-swipe'
import VueTilt from 'vue-tilt.js'
import VueTypedJs from 'vue-typed-js'
import VueScrollmagic from 'vue-scrollmagic'
import vueSmoothScroll from 'vue-smooth-scroll'

Vue.use(VueScrollmagic, {
    vertical: true,
    globalSceneOption: {},
    loglevel: 2,
    refreshInterval: 100
})
Vue.use(VueTypedJs)
Vue.use(VueRadioToggleButtons)
Vue.use(VueTilt)
Vue.component('swipe', Swipe)
Vue.component('swipe-item', SwipeItem)
Vue.use(vueSmoothScroll)

