import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 w-[300px] md:w-[320px] p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl flex flex-col justify-between shadow-xl min-h-[250px] hover:border-rose-500/30 transition-all duration-300 relative overflow-hidden group'>
      <div className='absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-rose-500 to-red-500' />
      
      <div>
        <div className='flex justify-between items-center'>
          <span className='bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold px-2.5 py-1 rounded-lg'>
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

      <div className='mt-6'>
        <div className='w-full py-2 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-lg text-xs font-semibold text-center select-none'>
          ✗ Failed
        </div>
      </div>
    </div>
  )
}

export default FailedTask
