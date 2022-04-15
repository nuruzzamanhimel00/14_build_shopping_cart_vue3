import HomeComponent from '../views/HomeComponent'
import AboutComponent from '../views/AboutComponent.vue'
import CartComponent from '../views/CartComponent.vue'
const routes = [
    {
      path: '/',
      name: 'HomeComponent',
      component: HomeComponent
    },
    {
        path: '/about',
        name: 'AboutComponent',
        component: AboutComponent
    },
    {
        path: '/cart',
        name: 'CartComponent',
        component: CartComponent
    },
   
  ];
export default routes;