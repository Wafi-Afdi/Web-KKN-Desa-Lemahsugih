import React from 'react'
import { FaCloudDownloadAlt } from "react-icons/fa";


function BookletJenny() {
  return (
    <div className='relative z-10 flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-8 md:gap-25 mt-5'>
      <div className='
        max-w-[200px] md:max-w-[300px] lg:w-full
        '

      >
        {/* <img 
          src='/placeholder/bukan_nabi_boy.jpeg' 
        /> */}
        <img 
          src='/placeholder/foto-cover.jpg' 
        />
      </div>
      <div className='flex flex-col justify-center items-center gap-4'>
        <h2 className='font-header font-bold text-primary text-lg md:text-2xl text-center'>
          Booklet Komoditas <br/> Perkebunan dan Hortikultura Unggul <br/>Desa Lemahsugih
        </h2>
        <a 
          href='/data/booklet-komoditas-perkebunan-dan-hortikultura-unggulan-desa-lemahsugih.pdf'
          target="_blank" rel="noopener noreferrer"
          className='
            w-fit rounded-lg py-2 px-4 bg-primary text-secondary font-bold font-body text-sm md:text-lg
            flex flex-row items-center gap-2
          '
        >
          <FaCloudDownloadAlt 
            className='text-2xl'
          />
          <p>
            2.73 MB
          </p>
        </a>
      </div>
    </div>
  )
}

export default BookletJenny