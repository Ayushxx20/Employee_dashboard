import React from 'react'

const NewTask = ({ data, refreshUserData }) => {
    const acceptTask = () => {
        const employees = JSON.parse(localStorage.getItem('employees'))
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

        employees.forEach(emp => {
            if (emp.email === loggedInUser.data.email) {
                emp.tasks.forEach(task => {
                    if (task.title === data.title && task.date === data.date) {
                        task.active = true
                        task.newTask = false
                        task.completed = false
                        task.failed = false
                    }
                })
                emp.taskCount.newTask = emp.tasks.filter(t => t.newTask).length
                emp.taskCount.active = emp.tasks.filter(t => t.active).length
                emp.taskCount.completed = emp.tasks.filter(t => t.completed).length
                emp.taskCount.failed = emp.tasks.filter(t => t.failed).length
            }
        })
        localStorage.setItem('employees', JSON.stringify(employees))
        refreshUserData()
    }

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
        <div className='flex-shrink-0 h-auto w-full sm:w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-green-600 text-white px-3 text-sm py-1 rounded'>{data.category}</h3>
                <h4 className='text-white text-sm'>{data.date}</h4>
            </div>
            <h2 className='text-white mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm text-white mt-2'>{data.description}</p>

            <div className='flex justify-between mt-4'>
                <div className="flex gap-2">
                    <button onClick={acceptTask} className="text-white text-sm font-medium py-1.5 px-4 rounded-lg 
bg-green-500/80 backdrop-blur-sm border border-white/10 
hover:bg-green-600/90 hover:border-green-400/30 
transition-all duration-300 ease-in-out shadow-sm hover:shadow-green-400/20">
                        Accept Task
                    </button>

                    <button onClick={deleteTask} className="bg-gray-500 text-white text-sm font-medium py-1.5 px-4 rounded-lg 
hover:bg-gray-600 transition-all duration-300 ease-in-out active:scale-95 shadow-md hover:shadow-gray-400/30">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewTask