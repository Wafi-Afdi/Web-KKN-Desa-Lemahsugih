import Link from 'next/link'
import React from 'react'

function KomoditasCard({
  imgSrc='/placeholder/jagung-plc.jpg',
  namaKomoditas='Nama Komoditas',
  namaLatin='Nama Latin',
  deskripsi='Deskripsi Singkat Mengenai Tanaman Ini.',
  link="/unknown"
}) {
  return (
    <Link className='hover:cursor-pointer rounded-xl flex flex-col bg-primary overflow-hidden border-2 border-black
      w-full sm:max-w-[200px] md:max-w-[200px] lg:max-w-[250px] min-h-max
    '
      href={`komoditas/${link}`}
    >
      <img
        src={imgSrc}
        alt={namaKomoditas}
        className='
          md:aspect-4/3 md:w-auto
          max-sm:max-h-[200px] object-cover object-center
        '
      />
      <div className='p-4 text-secondary flex-1'>
        <p className='font-header font-bold text-lg md:text-xl lg:text-2xl/7 line-clamp-1 text-ellipsis'>
          {namaKomoditas}
        </p>
        <p className='font-body font-light text-sm md:text-sm lg:text-base/7 line-clamp-1 text-ellipsis'>
          {namaLatin}
        </p>
        <p className='font-body font-medium text-sm md:text-sm lg:text-sm/5 line-clamp-3 text-ellipsis'>
          {deskripsi}
        </p>
      </div>
    </Link>
  )
}

export default KomoditasCard