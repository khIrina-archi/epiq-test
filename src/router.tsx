import {
  createRouter,
  RouterProvider,
  Route,
  RootRoute
} from '@tanstack/react-router'

import { Layout } from './components/Layout/index'
import { ConfigPage, DataTablePage, AdminPage } from './pages/index'

const rootRoute = new RootRoute({
  component: Layout
})

const configRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: ConfigPage
})

const tableRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/table',
  component: DataTablePage
})

const adminRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: AdminPage
})

const routeTree = rootRoute.addChildren([configRoute, tableRoute, adminRoute])

export const router = createRouter({ routeTree })
