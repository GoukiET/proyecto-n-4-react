import { Banner } from '../../components/banner/Banner'
import { Outlet } from 'react-router-dom'
import { Somos } from '../../components/somos/Somos'

export const Home = () => {
  return (
    <div>      
        <Banner />
        <Somos />
        <Outlet />
    </div>
  )
}