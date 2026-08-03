import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {

    const [userData,setUserData]=useContext(AuthContext)

  return (
    <div className='backdrop-blur-xl bg-[#111827]/40 border border-gray-800/80 p-5 sm:p-6 md:p-8 rounded-2xl shadow-xl mt-8'>
      <h2 className='text-xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent'>
        Employee Task Status
      </h2>
      
      <div className='w-full overflow-x-auto'>
        <div className='min-w-[600px] md:min-w-0'>
          {/* Table Header */}
          <div className='grid grid-cols-5 text-center font-semibold text-xs uppercase tracking-wider text-gray-400 border-b border-gray-800/60 pb-3 mb-4'>
            <h2 className='text-left pl-2'>Employee</h2>
            <h3>New Tasks</h3>
            <h3>Active</h3>
            <h3>Completed</h3>
            <h3>Failed</h3>
          </div>

          {/* Table Body */}
          <div className='max-h-[300px] overflow-y-auto space-y-1 pr-1'>
            {userData.map(function(elem, idx) {
              return (
                <div 
                  key={idx} 
                  className='grid grid-cols-5 text-center items-center py-3.5 border-b border-gray-800/30 last:border-0 hover:bg-white/[0.02] transition-all duration-200 rounded-lg px-2'
                >
                  <h2 className='text-sm font-semibold text-white text-left'>{elem.firstName}</h2>
                  <h3 className='text-sm font-bold text-blue-400 drop-shadow-[0_0_6px_rgba(59,130,246,0.2)]'>{elem.taskCounts.newTask}</h3>
                  <h5 className='text-sm font-bold text-amber-400 drop-shadow-[0_0_6px_rgba(245,158,11,0.2)]'>{elem.taskCounts.active}</h5>
                  <h5 className='text-sm font-bold text-emerald-400 drop-shadow-[0_0_6px_rgba(16,185,129,0.2)]'>{elem.taskCounts.completed}</h5>
                  <h5 className='text-sm font-bold text-rose-400 drop-shadow-[0_0_6px_rgba(244,63,94,0.2)]'>{elem.taskCounts.failed}</h5>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllTask
