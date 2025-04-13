import { Outlet } from 'react-router-dom'
import { Header } from '../components'

const Layout = () => {
  return (
    <>
      <Header />

      <main className="w-full">
        <section className="mx-auto w-full max-w-[90rem]">
          <Outlet />
        </section>
      </main>

      <footer>Footer</footer>
    </>
  )
}

export default Layout
