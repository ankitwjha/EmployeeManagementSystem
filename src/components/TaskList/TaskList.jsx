import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data, updateTaskStatus}) => {
     if (!data || !data.tasks) return null; // ✅ Prevents crash if data is missing
  return (
    <div id='tasklist' className='flex flex-col md:flex-row md:flex-nowrap md:overflow-x-auto items-stretch justify-start gap-5 w-full py-5 mt-5 md:mt-10'>
{data.tasks.map((elem,idx)=>{
      if(elem.active){
    return <AcceptTask key={idx} data={elem} employeeId={data.id} updateTaskStatus={updateTaskStatus}/>
  }
  if(elem.newTask){
    return<NewTask key={idx} data={elem} employeeId={data.id} updateTaskStatus={updateTaskStatus}/>
  }
  if(elem.completed){
    return<CompleteTask key={idx} data={elem} employeeId={data.id} updateTaskStatus={updateTaskStatus}/>
  }
  if(elem.failed){
    return <FailedTask key={idx} data={elem} employeeId={data.id} updateTaskStatus={updateTaskStatus}/>
  }
})}
    </div>
  )
}

export default TaskList

// import React from 'react';
// import AcceptTask from './AcceptTask';
// import NewTask from './NewTask';
// import CompleteTask from './CompleteTask';
// import FailedTask from './FailedTask';

// const TaskList = ({ data }) => {
//   if (!data || !data.tasks) return null; // ✅ Prevents crash if data is missing

//   return (
//     <div
//       id='tasklist'
//       className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'
//     >
//       {data.tasks.map((elem, idx) => {
//         if (elem.active) return <AcceptTask key={idx} data={elem} />;
//         if (elem.newTask) return <NewTask key={idx} data={elem} />;
//         if (elem.completed) return <CompleteTask key={idx} data={elem} />;
//         if (elem.failed) return <FailedTask key={idx} data={elem} />;
//         return null;
//       })}
//     </div>
//   );
// };

// export default TaskList;
