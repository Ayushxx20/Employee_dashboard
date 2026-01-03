import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { deleteEmployee } from '../../utils/LocalStorage'

const AllTask = () => {
    const [userData, setUserData] = useContext(AuthContext)

    const handleDeleteEmployee = (employeeId, employeeName) => {
        if (window.confirm(`Are you sure you want to delete ${employeeName}? This action cannot be undone.`)) {
            const updatedData = deleteEmployee(employeeId)
            setUserData(updatedData)
        }
    }

    if (!userData || userData.length === 0) {
        return (
            <div className="text-center text-gray-400 p-10">
                Loading employee data...
            </div>
        )
    }

    return (
        <div className="bg-[#121212] p-6 rounded-xl mt-6 shadow-lg border border-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-4 tracking-wide">
                All Employee Tasks
            </h2>

            <div className="bg-[#1f1f1f] rounded-lg overflow-hidden">
                <div className="hidden sm:flex bg-gradient-to-r from-indigo-600 to-purple-600 py-3 px-4 justify-between text-white font-semibold sticky top-0">
                    <h2 className="w-1/6 text-left">Employee Name</h2>
                    <h3 className="w-1/6 text-center">New Task</h3>
                    <h5 className="w-1/6 text-center">Active</h5>
                    <h5 className="w-1/6 text-center">Completed</h5>
                    <h5 className="w-1/6 text-center">Failed</h5>
                    <h5 className="w-1/6 text-center">Actions</h5>
                </div>

                <div className="max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
                    {userData.employees.map((elem, index) => (
                        <div
                            key={index}
                            className={`flex flex-col sm:flex-row items-start sm:items-center justify-between py-3 px-4 text-gray-200 transition-all duration-200 ${index % 2 === 0 ? 'bg-[#2b2b2b]' : 'bg-[#232323]'
                                } hover:bg-[#383838] hover:scale-[1.01]`}
                        >

                            {/* Small screen card view */}
                            <div className="w-full sm:hidden mb-3">
                                <div className="flex items-center justify-between mb-2">
                                    <h2 className="font-medium text-left">{elem.name}</h2>
                                    <div>
                                        <button
                                            onClick={() => handleDeleteEmployee(elem.id, elem.name)}
                                            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors duration-200"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-3 text-center text-sm">
                                    <div className="p-2 rounded bg-[#141414]"><div className="text-blue-400 font-semibold">{elem.taskCount.newTask}</div><div className="text-gray-400">New</div></div>
                                    <div className="p-2 rounded bg-[#141414]"><div className="text-yellow-400 font-semibold">{elem.taskCount.active}</div><div className="text-gray-400">Active</div></div>
                                    <div className="p-2 rounded bg-[#141414]"><div className="text-green-400 font-semibold">{elem.taskCount.completed}</div><div className="text-gray-400">Completed</div></div>
                                    <div className="p-2 rounded bg-[#141414] col-span-3 mt-2"><div className="text-red-400 font-semibold inline-block mr-2">{elem.taskCount.failed}</div><div className="text-gray-400 inline-block">Failed</div></div>
                                </div>
                            </div>

                            {/* Large screen row view */}
                            <div className="hidden sm:flex w-full items-center">
                                <h2 className="sm:w-1/6 font-medium text-left">{elem.name}</h2>
                                <h3 className="sm:w-1/6 text-blue-400 text-center">{elem.taskCount.newTask}</h3>
                                <h5 className="sm:w-1/6 text-yellow-400 text-center">{elem.taskCount.active}</h5>
                                <h5 className="sm:w-1/6 text-green-400 text-center">{elem.taskCount.completed}</h5>
                                <h5 className="sm:w-1/6 text-red-400 text-center">{elem.taskCount.failed}</h5>
                                <div className="sm:w-1/6 text-center">
                                    <button
                                        onClick={() => handleDeleteEmployee(elem.id, elem.name)}
                                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors duration-200"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllTask
