import { lazy, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { ModulePathRoutes } from './domain'
import { useAppStateContext } from './store'

const RouteWithNotFound = lazy(() => import('@/shared/components/route-with-not-found/RouteWithNotFound'))
const Layout = lazy(() => import('@/shared/layouts/Layout'))
const HomeModuleRoutes = lazy(() => import('@/app/home/HomeModuleRoutes'))

function App() {
  const { theme } = useAppStateContext()

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

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
