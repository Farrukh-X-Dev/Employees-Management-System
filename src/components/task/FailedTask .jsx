import React from 'react'

export const FailedTask  = ({data}) => {
  return (
    
    <div className="h-full w-[300px] bg-red-400 rounded-xl  px-4 py-3 shrink-0 ">
    <div className="flex justify-between items-center">
      <span className="bg-purple-600 px-5 py-1 rounded-md"> {data.category}</span>
      <span className="font-bold"> {data.date}</span>
    </div>
    <h2 className="mt-5 text-2xl font-bold"> {data.taskTitle}</h2>
    <h4 className="text-base mt-2 font-[510]"> {data.description}
    </h4>
    <div className='mt-4 flex justify-center'>
    <span  className="w-full text-red-700 hover:rounded-md hover:text-white border-2 border-t-0 border-l-0 border-r-0 border-red-700 hover:bg-red-600 focus:ring-4  text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 font-semibold">Failed</span>

    </div>
  </div>
  )
}
