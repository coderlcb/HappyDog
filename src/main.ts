import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue'
// 额外引入图标库
import ArcoVueIcon from '@arco-design/web-vue/es/icon'

import '@arco-design/web-vue/dist/arco.css'
import router from './router'
const app = createApp(App)

app.use(router).use(ArcoVue).use(ArcoVueIcon).mount('#app')
