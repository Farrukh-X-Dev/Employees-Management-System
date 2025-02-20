import React from 'react'

export const Accepted_task  = ({data , onComplete , onFail }) => {
  return (
<div className="h-full w-[300px] bg-orange-400 rounded-xl  px-4 py-3 shrink-0 ">
<div className="flex justify-between items-center">
  <span className="bg-purple-600 px-5 py-1 rounded-md">{data.category}</span>
  <span className="font-bold">{data.date}</span>
</div>
<h2 className="mt-5 text-2xl font-bold">{data.taskTitle}</h2>
<h4 className="text-base mt-2 font-[510]">
 {data.description}
</h4>
<div className='flex justify-between mt-6 '> 
   <button
          type="button"
          onClick={onComplete}
          className="w-[50%] text-green-700 hover:text-white border-2 border-green-700 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-semibold rounded-lg text-sm   px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500  dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
          Mark Complete
        </button>                         
        <button type="button" onClick={onFail}  className="w-[50%] text-red-700 hover:text-white border-2 border-red-700 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300  rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 font-semibold">
        Mark as Failed</button>

</div>
</div>
  )
}
