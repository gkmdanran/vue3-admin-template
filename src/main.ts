
import '@/assets/index.less'
import App from "./App.vue"
import router from './router'
import baseUI from './baseUI'

import { createApp } from "vue"
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn
})
app.use(router)
app.use(baseUI)
app.mount('#app')

