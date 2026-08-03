import React from 'react'

const TaskListNumbers = ({data}) => {
  if (!data || !data.taskCounts || !data.tasks) return null;

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-10'>
      {/* New Task */}
      <div className='relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1 group'>
        <div className='absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-cyan-500' />
        <h2 className='text-4xl font-extrabold text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.3)]'>{data.taskCounts.newTask}</h2>
        <h3 className='text-gray-300 font-semibold text-base mt-2'>New Tasks</h3>
        <p className='text-xs text-gray-500 mt-1'>Awaiting attention</p>
      </div>
      
      {/* Accepted Task */}
      <div className='relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-1 group'>
        <div className='absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-amber-500 to-orange-500' />
        <h2 className='text-4xl font-extrabold text-amber-400 drop-shadow-[0_0_12px_rgba(245,158,11,0.3)]'>{data.taskCounts.active}</h2>
        <h3 className='text-gray-300 font-semibold text-base mt-2'>Accepted Tasks</h3>
        <p className='text-xs text-gray-500 mt-1'>Currently active</p>
      </div>

      {/* Completed Task */}
      <div className='relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-1 group'>
        <div className='absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-emerald-500 to-teal-500' />
        <h2 className='text-4xl font-extrabold text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.3)]'>{data.taskCounts.completed}</h2>
        <h3 className='text-gray-300 font-semibold text-base mt-2'>Completed Tasks</h3>
        <p className='text-xs text-gray-500 mt-1'>Finished tasks</p>
      </div>

      {/* Failed Task */}
      <div className='relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl transition-all duration-300 hover:border-rose-500/40 hover:-translate-y-1 group'>
        <div className='absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-rose-500 to-red-500' />
        <h2 className='text-4xl font-extrabold text-rose-400 drop-shadow-[0_0_12px_rgba(244,63,94,0.3)]'>{data.taskCounts.failed}</h2>
        <h3 className='text-gray-300 font-semibold text-base mt-2'>Failed Tasks</h3>
        <p className='text-xs text-gray-500 mt-1'>Need reviews</p>
      </div>
    </div>
  )
}

export default TaskListNumbers
