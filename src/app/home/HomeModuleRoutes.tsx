import { lazy } from 'react'
import { Route } from 'react-router-dom'
import { HomeRoutes } from './domain'

const RouteWithNotFound = lazy(() => import('@/shared/components/route-with-not-found/RouteWithNotFound'))
const ExamplePage = lazy(() => import('./pages/Home'))

const HomeModuleRoutes = () => {
  return (
    <RouteWithNotFound>
      <Route path={HomeRoutes.Home} element={<ExamplePage />} />
    </RouteWithNotFound>
  )
}

export default HomeModuleRoutes
