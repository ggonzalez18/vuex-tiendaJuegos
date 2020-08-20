import Vue from 'vue'
import Router from 'vue-router'
// import Sales from 'component/Sales'


const Inicio = () => import('./components/Inicio')
const Search = () => import('./components/Search')
const Sales = () => import('./components/Sales')
const TotalSale = () => import('./components/TotalSale')


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
        },
        {
            path: '/ventas',
            name: 'Sales',
            component: Sales
        },
        {
            path: '/total',
            name: 'TotalSale',
            component: TotalSale
        } 
    ]
})