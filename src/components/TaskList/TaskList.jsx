import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data, refreshUserData }) => {

    return (
        <div id='tasklist' className='w-full py-5 gap-5 mt-10 flex flex-col items-start sm:flex-row sm:items-center sm:justify-start sm:h-[55%] sm:overflow-x-auto'>



            {data.tasks.map((elem, idx) => {

                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} refreshUserData={refreshUserData} />
                }

                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} refreshUserData={refreshUserData} />
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} refreshUserData={refreshUserData} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} refreshUserData={refreshUserData} />
                }

            })}






        </div>
    )
}

export default TaskList