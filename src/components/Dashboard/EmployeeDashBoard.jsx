import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashBoard = (props) => {

    // console.log("EmployeeDashboard data:", props.data);


    return (
        <div>
            <div className='p-6 sm:p-10 bg-[#1C1C1C] min-h-screen '>
                <Header changeUser={props.changeUser} data={props.data} />
                <TaskListNumbers data={props.data} />
                <TaskList data={props.data} refreshUserData={props.refreshUserData} />
            </div>
        </div>
    )
}

export default EmployeeDashBoard