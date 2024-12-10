import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-[#D3C5E5] rounded-xl '>
        <div className='flex justify-between items-center'>
            <h3 className='bg-[#735DA5]  text-white px-3 py-1 rounded text-sm'>
                {data.category}
            </h3>
            <h4 className=' text-black text-sm'>
                {data.taskDate}
            </h4>
        </div>
        <h2 className=' text-black mt-5 text-3xl font-semibold'> 
            {data.taskTitle}
        </h2>
        <p className=' text-black text-lg mt-2'>
            {data.taskDescription}
        </p>
        <div className='mt-2'>
            <button className='w-full bg-green-600'>Completed</button>
        </div>
    </div>
  )
}

export default CompleteTask