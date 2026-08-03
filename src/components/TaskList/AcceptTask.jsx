import React from 'react'

const AcceptTask = ({data, employeeId, updateTaskStatus}) => {
  return (
    <div className='w-full p-5 sm:p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl flex flex-col justify-between shadow-xl min-h-[220px] md:min-h-[250px] hover:border-amber-500/30 transition-all duration-300 relative overflow-hidden group'>
      <div className='absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-amber-500 to-orange-500' />
      
      <div>
        <div className='flex justify-between items-center'>
          <span className='bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold px-2.5 py-1 rounded-lg'>
            {data.category}
          </span>
          <span className='text-xs font-medium text-gray-400'>
            {data.taskDate}
          </span>
        </div>
        
        <h2 className='mt-4 text-xl font-bold text-white line-clamp-1'>
          {data.taskTitle}
        </h2>
        
        <p className='text-sm text-gray-400 mt-2 line-clamp-3 leading-relaxed'>
          {data.taskDescription}
        </p>
      </div>

      <div className='flex flex-wrap gap-2.5 mt-6'>
        <button 
          onClick={() => updateTaskStatus(employeeId, data.taskTitle, 'completed')}
          className='flex-1 min-w-[125px] py-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/40 rounded-lg text-xs font-semibold transition-all duration-200 active:scale-[0.98] cursor-pointer'
        >
          Mark Completed
        </button>
        <button 
          onClick={() => updateTaskStatus(employeeId, data.taskTitle, 'failed')}
          className='flex-1 min-w-[125px] py-2 bg-rose-600/20 hover:bg-rose-600/30 text-rose-400 border border-rose-500/20 hover:border-rose-500/40 rounded-lg text-xs font-semibold transition-all duration-200 active:scale-[0.98] cursor-pointer'
        >
          Mark Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask

   
