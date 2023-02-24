import ezQueryTemplate from './src/index.vue'
import { App } from 'vue'
export default function (app: App) {
    app.component(ezQueryTemplate.name, ezQueryTemplate)
}