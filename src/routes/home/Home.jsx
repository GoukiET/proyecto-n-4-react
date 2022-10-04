import { Banner } from '../../components/banner/Banner'
import { Outlet } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <Banner />
        
        <Outlet />
    </div>
  )
}