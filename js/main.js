import { router } from './router.js'
import appHeader from './cmps/app-header.cmp.js'
import appFooter from './cmps/app-footer.cmp.js'


const options = {
    template: `
        <section>
            <app-header></app-header>
            <!-- <book-app/> -->
            <router-view></router-view>
            <app-footer></app-footer>
        </section>
    `,
    components: {
        // bookApp,
        appHeader,
        appFooter
    }
}

const app = Vue.createApp(options)
app.use(router)
app.mount('#app');