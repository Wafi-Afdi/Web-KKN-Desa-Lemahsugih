import React from 'react'

function PoinMisi({
  numbering = '1',
  teks = "Isi Poin",
}) {
  return (
    <div className='flex flex-row items-center gap-4'>
      <div className='bg-primary text-secondary font-bold font-body aspect-square rounded-full 
                flex justify-center items-center
                text-base md:text-xl w-[25px] md:w-[40px] text-center align-middle
                flex-none 
              '>
        {numbering}
      </div>
      <p
        className='
                  font-body text-primary font-medium
                  text-base md:text-lg
                '
      >
        {teks}
      </p>
    </div>
  )
}

export default PoinMisi