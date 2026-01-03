import React from 'react'

const FailedTask = ({ data, refreshUserData }) => {
    const deleteTask = () => {
        const employees = JSON.parse(localStorage.getItem('employees'))
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
        
        employees.forEach(emp => {
            if (emp.email === loggedInUser.data.email) {
                emp.tasks = emp.tasks.filter(task => !(task.title === data.title && task.date === data.date))
                emp.taskCount.newTask = emp.tasks.filter(t => t.newTask).length
                emp.taskCount.active = emp.tasks.filter(t => t.active).length
                emp.taskCount.completed = emp.tasks.filter(t => t.completed).length
                emp.taskCount.failed = emp.tasks.filter(t => t.failed).length
            }
        })
        localStorage.setItem('employees', JSON.stringify(employees))
        refreshUserData()
    }

    return (

        <div className=' flex-shrink-0 h-auto w-full sm:w-[300px] p-5 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-blue-600 text-white px-3 text-sm py-1 rounded' >
                    {data.category}

                </h3>
                <h4 className='text-white text-sm'>
                    {data.date}
                </h4>
            </div>
            <h2 className='text-white mt-5 text-2xl font-semibold'>
                {data.title}
            </h2>
            <p className='text-sm text-white mt-2'>
                {data.description}
            </p>

            <div className='mt-2 flex gap-2'>
                <button className="flex-1 bg-red-600 text-white font-semibold py-2.5 rounded-xl 
hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30 
transition-all duration-300 ease-in-out active:scale-95">
                    Failed
                </button>

                <button onClick={deleteTask} className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg 
hover:bg-gray-600 transition-all duration-300 ease-in-out active:scale-95">
                    Delete
                </button>
            </div>

        </div>
    )
}

export default FailedTask