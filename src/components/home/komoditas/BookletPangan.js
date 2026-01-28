import React from 'react'

function BookletJenny() {
  return (
    <div className='relative z-10 flex flex-col md:flex-row justify-center items-center gap-15 md:gap-25 mt-5'>
      <div className='aspect-square w-[100px] md:w-[512px] bg-gray-400'>

      </div>
      <div className='flex flex-col justify-center items-center gap-4'>
        <h2 className='font-header font-bold text-primary text-lg md:text-2xl text-center'>
          Booklet Komoditas <br/>Desa Lemahsugih
        </h2>
        <button type='button' className='w-fit rounded-lg py-2 px-4 bg-primary text-secondary font-bold font-body text-sm md:text-lg'>
          Unduh
        </button>
      </div>
    </div>
  )
}

export default BookletJenny