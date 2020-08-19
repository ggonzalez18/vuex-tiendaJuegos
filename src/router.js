import Vue from 'vue'
import Router from 'vue-router'
// import Home from 'component/inicio'


const Inicio = () => import('./components/Inicio')
const Search = () => import('./components/Search')

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Inicio
        },  
        {
            path: '/search',
            name: 'Search',
            component: Search
        }  
    ]
})