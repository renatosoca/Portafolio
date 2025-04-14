import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LoadingBar } from './shared/components'
import { meta } from './meta.ts'
import { AppProvider } from './store'
import './index.css'

const App = lazy(() => import('./App'))

const container = document.getElementById('root') as HTMLElement

createRoot(container).render(
  <StrictMode>
    <BrowserRouter basename={meta.env.VITE_APP_BASENAME}>
      <Suspense fallback={<LoadingBar />}>
        <AppProvider>
          <App />
        </AppProvider>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
)
