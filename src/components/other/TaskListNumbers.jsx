import React from 'react'

const TaskListNumbers = ({ data }) => {

    return (
        <div className='flex flex-col sm:flex-row sm:flex-wrap gap-5 mt-10'>
            <div className='p-6 w-full sm:w-[45%] lg:w-1/4 bg-red-400 rounded-xl py-6 px-6 sm:px-9'>
                <h2 className=' text-white text-2xl sm:text-3xl font-semibold'>{data.taskCount.newTask} </h2>
                <h3 className=' text-white text-base sm:text-xl font-medium'>New Task</h3>

            </div>
            <div className='p-6 w-full sm:w-[45%] lg:w-1/4 bg-blue-400 rounded-xl py-6 px-6 sm:px-9'>
                <h2 className=' text-white text-2xl sm:text-3xl font-semibold'>{data.taskCount.completed}</h2>
                <h3 className=' text-white text-base sm:text-xl font-medium'>Completed Task</h3>

            </div>
            <div className='p-6 w-full sm:w-[45%] lg:w-1/4 bg-green-400 rounded-xl py-6 px-6 sm:px-9'>
                <h2 className=' text-white text-2xl sm:text-3xl font-semibold'>{data.taskCount.failed}</h2>
                <h3 className=' text-white text-base sm:text-xl font-medium'>Failed Task</h3>

            </div>
            <div className='p-6 w-full sm:w-[45%] lg:w-1/4 bg-yellow-400 rounded-xl py-6 px-6 sm:px-9'>
                <h2 className=' text-white text-2xl sm:text-3xl font-semibold'>{data.taskCount.active}</h2>
                <h3 className=' text-white text-base sm:text-xl font-medium'>accepted Task</h3>

            </div>


        </div>
    )
}

export default TaskListNumbers