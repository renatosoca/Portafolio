import { lazy } from 'react'
import { Route } from 'react-router-dom'
import { ModulePathRoutes } from './domain'

const RouteWithNotFound = lazy(() => import('@/shared/components/route-with-not-found/RouteWithNotFound'))
const Layout = lazy(() => import('@/shared/layouts/Layout'))
const HomeModuleRoutes = lazy(() => import('@/app/home/HomeModuleRoutes'))

function App() {
  return (
    <RouteWithNotFound>
      <Route element={<Layout />}>
        <Route path={`${ModulePathRoutes.Home}*`} element={<HomeModuleRoutes />} />
        <Route path={`${ModulePathRoutes.Projects}/*`} element={<HomeModuleRoutes />} />
        <Route path={`${ModulePathRoutes.SocialMedia}/*`} element={<HomeModuleRoutes />} />
      </Route>
    </RouteWithNotFound>
  )
}

export default App
