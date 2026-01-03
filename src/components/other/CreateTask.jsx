import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')


    const [task, setTask] = useState({})





    const submitHandler = (e) => {
        e.preventDefault()

        const newTask = {
            title: taskTitle,
            description: taskDescription,
            date: taskDate,
            category,
            active: false,
            newTask: true,
            completed: false,
            failed: false
        }

        setTask(newTask)



        const data = userData.employees

        console.log(data)

        data.forEach(function (elem) {
            if (assignTo == elem.name) {
                elem.tasks.push(newTask)
                elem.taskCount.newTask = elem.taskCount.newTask + 1
            }
        })

        localStorage.setItem('employees', JSON.stringify(data))

        console.log("Saved task:", newTask)
        console.log("Updated employees data:", data)

        setUserData({ ...userData, employees: data })


        setTaskTitle('')
        setCategory('')
        setAssignTo('')
        setTaskDate('')

        setTaskDescription('')


    }
    return (
        <div className="p-6 bg-[#1c1c1c] w-full mt-8 rounded-2xl shadow-lg">
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className="flex flex-wrap gap-6">


                <div className="flex flex-col gap-6 w-full md:w-1/2">

                    <div>
                        <h3 className="text-gray-300 mb-1 font-medium">Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            type="text"
                            placeholder="Make a UI design"
                            className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                    </div>


                    <div>
                        <h3 className="text-gray-300 mb-1 font-medium">Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            type="date"
                            className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                    </div>


                    <div>
                        <h3 className="text-gray-300 mb-1 font-medium">Assign To</h3>
                        <input
                            value={assignTo}
                            onChange={(e) => {
                                setAssignTo(e.target.value)
                            }}
                            type="text"
                            placeholder="Employee name"
                            className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                    </div>


                    <div>
                        <h3 className="text-gray-300 mb-1 font-medium">Category</h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            type="text"
                            placeholder="Design, Dev, etc"
                            className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                    </div>
                </div>


                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <h3 className="text-gray-300 font-medium">Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }}
                        placeholder="Enter task description..."
                        className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 outline-none resize-none min-h-[160px] sm:min-h-[300px]"
                    ></textarea>
                </div>

                <div className="w-full flex justify-end mt-4">
                    <button
                        type="submit"
                        className="px-6 py-2 rounded-xl font-semibold bg-emerald-600 hover:bg-emerald-700 transition-all duration-200"
                    >
                        Create Task
                    </button>
                </div>
            </form>

        </div>
    )
}

export default CreateTask