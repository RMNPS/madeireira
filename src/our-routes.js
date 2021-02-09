const Home = () => import(/* webpackChunkName: "home" */ "./components/Home.vue")
const Produto = () => import(/* webpackChunkName: "produto" */ "./components/Produto.vue")

export default [
    {path: '/', component: Home, name: "home"},
    {name: "DECKS", path: '/decks', component: Produto, meta: {produto: "/decks"}},
    {name: "QUIOSQUES", path: '/quiosques', component: Produto, meta: {produto: "/quiosques"}},
    {name: "PLAYGROUNDS", path: '/playgrounds', component: Produto, meta: {produto: "/playgrounds"}},
    {name: "PERGOLADOS", path: '/pergolados', component: Produto, meta: {produto: "/pergolados"}},
    {name: "CASAS", path: '/casas', component: Produto, meta: {produto: "/casas"}},
    {name: "EUCALIPTO TRATADO", path: '/eucalipto', component: Produto, meta: {produto: "/eucalipto"}},
    {name: "PINUS TRATADO", path: '/pinus', component: Produto, meta: {produto: "/pinus"}},
    {path: "*", template: 'Not Found'}
]