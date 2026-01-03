import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className="w-full p-6 sm:p-7 bg-[#0f0f0f] text-white min-h-screen">
            <Header changeUser={props.changeUser} />

            <div className="flex flex-col gap-6 mt-6">
                <CreateTask />
                <AllTask />
            </div>

        </div>
    )
} 

export default AdminDashboard