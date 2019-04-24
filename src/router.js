import Home from './components/Home.vue'
import Listing from './components/Listing.vue'
import Update from './components/Update.vue'
import Create from './components/Create.vue'
import Orem from './components/Cities/Orem.vue'
import Vineyard from './components/Cities/Vineyard.vue'
import Provo from './components/Cities/Provo.vue'
import Washington from './components/Cities/Washington.vue'
import StGeorge from './components/Cities/StGeorge.vue'

export const routes = [
  {
    path: '/create',
    component: Create
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/orem',
    component: Orem
  },
  {
    path: '/vineyard',
    component: Vineyard
  },
  {
    path: '/provo',
    component: Provo
  },
  {
    path: '/washington',
    component: Washington
  },
  {
    path: '/st-george',
    component: StGeorge
  },

  {
    path: '/:id',
    component: Listing
  },
  {
    path: '/:id/update',
    component: Update
  },
  {
    path: '/:id/update',
    component: Update
  },
  {
    path: '/:id/update',
    component: Update
  },
  {
    path: '*',
    redirect: '/'
  },
]