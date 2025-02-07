import SideBar from '../side-bar'
import Header from '../header'
import { Outlet } from 'react-router-dom'

const Defaultlayout = () => {
  return (
    <div className='w-full'>
      <Header />
      <SideBar />
      <div className='ml-20 p-2'>
        <Outlet />
      </div>
    </div>
  )
}

export default Defaultlayout
