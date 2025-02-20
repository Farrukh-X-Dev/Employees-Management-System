import React from 'react'

export const New_task  = ({data , onAccept}) => {
  
  return (
    <div className="h-full w-[300px]  bg-blue-400 rounded-xl  px-4 py-3 shrink-0 ">
    <div className="flex justify-between items-center">
      <span className="bg-purple-600 px-5 py-1 rounded-md"> {data.category}</span>
      <span className="font-bold"> {data.date}</span>
    </div>
    <h2 className="mt-5 text-2xl font-bold"> {data.taskTitle}</h2>
    <h4 className="text-base mt-2 font-[510]"> {data.description}
    </h4>
    <div className='flex justify-center mt-4'>
    <button type="button" onClick={onAccept} className="w-[80%] text-blue-700 hover:text-white border-2 border-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900">Accept Task</button>

    </div>
    </div>
  )
}