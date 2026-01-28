import Link from 'next/link'
import React from 'react'

function KomoditasHomeCard({
  imgSrc='/placeholder/jagung-plc.jpg',
  namaKomoditas='Nama Komoditas',
  namaLatin='Nama Latin',
  deskripsi='Deskripsi Singkat Mengenai Tanaman Ini.',
  link="/unknown"
}) {
  return (
    <Link 
      href={`komoditas/${link}`}
      className='hover:cursor-pointer rounded-xl flex flex-col bg-primary overflow-hidden border-2 border-black
      w-full max-w-[400px] md:max-w-[300px] min-h-max
    '>
      <img
        src={imgSrc}
        alt={namaKomoditas}
        className='
          aspect-4/3 w-auto
          max-sm:max-h-[200px] object-cover object-center
        '
      />
      <div className='p-4 text-secondary flex-1'>
        <p className='font-header font-bold text-lg md:text-xl lg:text-2xl/7 line-clamp-1 text-ellipsis'>
          {namaKomoditas}
        </p>
        <p className='font-body font-light text-sm md:text-sm lg:text-lg/7 line-clamp-1 text-ellipsis'>
          {namaLatin}
        </p>
        <p className='font-body font-medium text-sm md:text-sm lg:text-lg/5 line-clamp-3 text-ellipsis'>
          {deskripsi}
        </p>
      </div>
    </Link>
  )
}

export default KomoditasHomeCard