import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'

const CreateTask = () => {

const[userData,setUserData]=useContext(AuthContext)

// const[title,setTitle]=useState("")
// const[date,setDate]=useState("")
// const[assignTo,setAssignTo]=useState("")
// const[category,setCategory]=useState("")
// const[description,setDescription]=useState("")

  const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')




const [newTask,setNewTask]=useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        const taskObject = { 
            taskTitle, 
            taskDescription, 
            taskDate, 
            category, 
            active: false, 
            newTask: true, 
            failed: false, 
            completed: false 
        }

        const data = [...userData]

        let assigned = false;
        data.forEach(function(elem) {
            if (asignTo.toLowerCase() === elem.firstName.toLowerCase()) {
                elem.tasks.push(taskObject)
                elem.taskCounts.newTask += 1
                assigned = true;
            }
        })

        if (!assigned) {
            alert(`Employee "${asignTo}" not found. Task was not assigned.`);
            return;
        }

        setUserData(data)
        localStorage.setItem('employees', JSON.stringify(data))

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')
    }
    return (
        <div className='backdrop-blur-xl bg-[#111827]/40 border border-gray-800/80 p-6 md:p-8 rounded-2xl shadow-xl mt-8'>
            <h2 className='text-xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent'>
                Create New Task
            </h2>
            <form onSubmit={submitHandler} className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
                {/* Left Column */}
                <div className='space-y-4'>
                    <div>
                        <label className='text-xs font-semibold text-gray-300 tracking-wider uppercase block mb-1.5'>
                            Task Title
                        </label>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            required
                            className='w-full px-4 py-2.5 bg-[#1f2937]/30 border border-gray-700/60 rounded-xl outline-none text-white placeholder-gray-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200'
                            type="text"
                            placeholder='Make a UI design'
                        />
                    </div>
                    <div>
                        <label className='text-xs font-semibold text-gray-300 tracking-wider uppercase block mb-1.5'>
                            Date
                        </label>
                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            required
                            className='w-full px-4 py-2.5 bg-[#1f2937]/30 border border-gray-700/60 rounded-xl outline-none text-white placeholder-gray-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200'
                            type="date"
                        />
                    </div>
                    <div>
                        <label className='text-xs font-semibold text-gray-300 tracking-wider uppercase block mb-1.5'>
                            Assign to
                        </label>
                        <input
                            value={asignTo}
                            onChange={(e) => setAsignTo(e.target.value)}
                            required
                            className='w-full px-4 py-2.5 bg-[#1f2937]/30 border border-gray-700/60 rounded-xl outline-none text-white placeholder-gray-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200'
                            type="text"
                            placeholder='employee name'
                        />
                    </div>
                    <div>
                        <label className='text-xs font-semibold text-gray-300 tracking-wider uppercase block mb-1.5'>
                            Category
                        </label>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                            className='w-full px-4 py-2.5 bg-[#1f2937]/30 border border-gray-700/60 rounded-xl outline-none text-white placeholder-gray-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200'
                            type="text"
                            placeholder='design, dev, etc'
                        />
                    </div>
                </div>

                {/* Right Column */}
                <div className='flex flex-col h-full justify-between'>
                    <div className='flex-grow flex flex-col mb-4'>
                        <label className='text-xs font-semibold text-gray-300 tracking-wider uppercase block mb-1.5'>
                            Description
                        </label>
                        <textarea
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                            required
                            className='w-full flex-grow min-h-[150px] md:min-h-0 px-4 py-3 bg-[#1f2937]/30 border border-gray-700/60 rounded-xl outline-none text-white placeholder-gray-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200 resize-none'
                            placeholder='Detailed description of the task...'
                        />
                    </div>
                    <button
                        type="submit"
                        className='w-full py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 active:scale-[0.98] text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 transition-all duration-200 cursor-pointer'
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    )
}


export default CreateTask



