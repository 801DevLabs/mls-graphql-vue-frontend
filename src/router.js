import Home from './components/Home.vue'
import Listing from './components/Listing.vue'
import Update from './components/Update.vue'
import Create from './components/Create.vue'
import Orem from './components/Cities/Orem.vue'
import Vineyard from './components/Cities/Vineyard.vue'
import Provo from './components/Cities/Provo.vue'
import Washington from './components/Cities/Washington.vue'
import StGeorge from './components/Cities/StGeorge.vue'

import GraphQLHome from './components/GraphQL/Home.vue'
import GraphQLListing from './components/GraphQL/Listing.vue'
import GraphQLUpdate from './components/GraphQL/Update.vue'
import GraphQLCreate from './components/GraphQL/Create.vue'
import GraphQLOrem from './components/GraphQL/Cities/Orem.vue'
import GraphQLVineyard from './components/GraphQL/Cities/Vineyard.vue'
import GraphQLProvo from './components/GraphQL/Cities/Provo.vue'
import GraphQLWashington from './components/GraphQL/Cities/Washington.vue'
import GraphQLStGeorge from './components/GraphQL/Cities/StGeorge.vue'

export const routes = [
  {
    path: '/graphql/create',
    component: GraphQLCreate
  },
  {
    path: '/graphql/',
    component: GraphQLHome
  },
  {
    path: '/graphql/orem',
    component: GraphQLOrem
  },
  {
    path: '/graphql/vineyard',
    component: GraphQLVineyard
  },
  {
    path: '/graphql/provo',
    component: GraphQLProvo
  },
  {
    path: '/graphql/washington',
    component: GraphQLWashington
  },
  {
    path: '/graphql/st-george',
    component: GraphQLStGeorge
  },

  {
    path: '/graphql/:id',
    component: GraphQLListing
  },
  {
    path: '/graphql/:id/update',
    component: GraphQLUpdate
  },
  {
    path: '/rest/create',
    component: Create
  },
  {
    path: '/rest/',
    component: Home
  },
  {
    path: '/rest/orem',
    component: Orem
  },
  {
    path: '/rest/vineyard',
    component: Vineyard
  },
  {
    path: '/rest/provo',
    component: Provo
  },
  {
    path: '/rest/washington',
    component: Washington
  },
  {
    path: '/rest/st-george',
    component: StGeorge
  },

  {
    path: '/rest/:id',
    component: Listing
  },
  {
    path: '/rest/:id/update',
    component: Update
  },
]