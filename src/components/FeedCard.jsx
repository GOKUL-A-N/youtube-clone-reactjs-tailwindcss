import React from 'react'

const FeedCard = (props) => {
  return (
    <div className='cursor-pointer'>
        <div className='h-[100px] w-[200px] relative'>
            <img src="https://marketplace.canva.com/EAEqfS4X0Xw/1/0/1600w/canva-most-attractive-youtube-thumbnail-wK95f3XNRaM.jpg" className='w-full h-full' alt="" />
            <p className='bg-black text-white absolute bottom-1 right-2 text-[13px] rounded-sm'>{props.lengthText}</p>
        </div>
        <div className='h-[70px] w-[200px] flex flex-row pt-2'>
            <div className='w-[15%]'>
                <img className='h-[25px] w-[25px] rounded-full ' src="data:image/jpeg;base64,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" alt="" />
            </div>
            <div className='w-[85%]'>
                <h3 className='text-white text-[10px] font-semibold'>{props.title}</h3>
                <h6 className='text-gray-300 text-[9px] font-semibold'>{props.channelTitle}</h6>
                <h6 className='text-gray-300 text-[9px] font-semibold'>{props.publishedTimeText}</h6>
            </div>
        </div>
    </div>
  )
}

export default FeedCard

// 