import Sidebar from '../../layouts/Navigation/Home/Sidebar'
import HomeBody from '../../layouts/body/Home/HomeBody'
import React from 'react'

const Home = () => {
  return (
    <div className='flex gap-44 bg-gradient-to-t from-white via-gray-50 to-blue-50'>
      <Sidebar />
      <div className='flex flex-col gap-44 md:pl-48 pl-14 pt-28 '>
        <HomeBody />
        hhhhhhhhhhhhhhhhhhhhh
      </div>
    </div>
  )
}

export default Home