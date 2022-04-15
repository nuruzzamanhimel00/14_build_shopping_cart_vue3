import HomeComponent from '../views/HomeComponent'
import AboutComponent from '../views/AboutComponent.vue'
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
   
  ];
export default routes;