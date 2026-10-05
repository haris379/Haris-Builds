import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Intro from '../ui/Intro'

export default function Layout() {
  return (
    <>
      <Intro />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
