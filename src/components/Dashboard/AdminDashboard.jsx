import React from 'react'
import Header from '../../other/Header'
import CreateTask from '../../other/CreateTask'
import AllTask from '../../other/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='min-h-screen w-full bg-[#070a13] text-[#f3f4f6] px-6 py-8 md:px-12 md:py-10 overflow-y-auto relative'>
      {/* Ambient background glows */}
      <div className='absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-violet-600/5 blur-[150px] pointer-events-none z-0' />
      <div className='absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-600/5 blur-[150px] pointer-events-none z-0' />

      <div className='max-w-7xl mx-auto relative z-10 space-y-8'>
        <Header changeUser={props.changeUser}/>
        <CreateTask/>
        <AllTask/>
      </div>
    </div>
  )
}

export default AdminDashboard
