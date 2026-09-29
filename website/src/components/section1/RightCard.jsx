import React from 'react'

const RightCard = () => {
  return (
    <div className='h-full w-40  overflow-hidden relative rounded-2xl'>
      <img  className = 'h-full w-full object-cover' src="https://images.unsplash.com/photo-1789432897952-c1684720878a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

      <div className='absolute left-0 top-0 h-full w-full   p-6 flex flex-col justify-between'>
      <h1 className='bg-white h-10 w-10 rounded-full flex justify-center items-center text-2xl font-semibold'>1</h1>
      <div>
        <p className=' text-white md-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, ipsam!</p>
        <div className='flex justify-between'><button className='bg-blue-600 text-white font-medium  px-4 py-2 rounded-full'>satisfied</button>
        <button className='bg-blue-600 text-white font-medium  px-3 py-2 rounded-full'> <i className="ri-arrow-right-line"></i></button>
        </div>
      </div>

      </div>

    </div>
  )
}

export default RightCard
