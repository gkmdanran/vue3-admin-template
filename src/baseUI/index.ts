import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/dist/index.css'


import ezIcon from "./ezIcon/src/index.vue"
import ezTable from "./ezTable/src/index.vue"
import ezButton from "./ezButton/src/index.vue"
import ezMenu from "./ezMenu/src/index.vue"
import ezCollapseText from "./ezCollapseText/src/index.vue"
import ezCollapseList from "./ezCollapseList/src/index.vue"
import ezContainer from "./ezContainer/src/index.vue"
import ezSearch from "./ezSearch/src/index.vue"
import ezRadioGroup from "./ezRadioGroup/src/index.vue"
import ezQueryTemplate from "./ezQueryTemplate/src/index.vue"
import { App } from 'vue'
const components = [
    ezIcon,
    ezTable,
    ezButton,
    ezCollapseText,
    ezCollapseList,
    ezContainer,
    ezMenu,
    ezSearch,
    ezRadioGroup,
    ezQueryTemplate
]
export default function (app: App) {
    app.use(ElementPlus, {
        locale
    })
    components.forEach(component => {
        app.component(component.name, component)
    })
}
