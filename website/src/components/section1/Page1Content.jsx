import React from 'react'
import RightContent from './RightContent'
import LeftContent from './LeftContent'

const Page1Content = () => {
  return (
    <div className='py-10 flex gap-10 items-center  h-[80vh] px-18'>
        <LeftContent/>
      <RightContent/>
    
    </div>
  )
}

export default Page1Content

