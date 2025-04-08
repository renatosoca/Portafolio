import { lazy } from 'react'
import { Navigate, Route } from 'react-router-dom'
import { ExamplePages, ExampleRoutes } from './domain'

const RouteWithNotFound = lazy(() => import('@/shared/components/route-with-not-found/RouteWithNotFound'))
const ExamplePage = lazy(() => import('./pages/Example'))

const ExampleModuleRoutes = () => {
  return (
    <RouteWithNotFound>
      <Route path="/" element={<Navigate to={ExamplePages.Home} />} />

      <Route path={ExampleRoutes.Home} element={<ExamplePage />} />
    </RouteWithNotFound>
  )
}

export default ExampleModuleRoutes
