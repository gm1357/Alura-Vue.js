import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';

export const routes = [
    { path: '', name: 'home', component: Home, titulo: 'Home', menu: true },
    { path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true },
    { path: '/cadastro/:id', name: 'alterar', component: Cadastro, titulo: 'Alterar', menu: false },
    { path: '*', component: Cadastro, menu: false }
]