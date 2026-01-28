import Link from 'next/link'
import React from 'react'

function BisnisCard({
  imgSrc='/placeholder/marlina-plc.jpg',
  namaBisnis='Nama Bisnis',
  tipeBisnis='Jenis Bisnis',
  deskripsi='Deskripsi Singkat Mengenai Bisnis Ini.',
  slug=''
}) {
  return (
    <Link className='hover:cursor-pointer rounded-xl flex flex-col bg-[#E7EFC7] overflow-hidden border-2 border-black
      w-full sm:max-w-[200px] md:max-w-[200px] lg:max-w-[250px] min-h-max
    '
      href={`/bisnis/${slug}`}
    >
      <img
        src={imgSrc}
        alt={namaBisnis}
        className='
          md:aspect-4/3 md:w-auto
          max-sm:max-h-[200px] object-cover object-center
        '
      />
      <div className='p-4 text-primary flex-1'>
        <p className='font-header font-bold  text-lg md:text-xl lg:text-2xl/7 line-clamp-1 text-ellipsis'>
          {namaBisnis}
        </p>
        <p className='font-body font-light  text-sm md:text-sm lg:text-sm/5 line-clamp-1 text-ellipsis'>
          {tipeBisnis}
        </p>
        <p className='font-body font-medium  text-sm md:text-sm lg:text-sm/5 line-clamp-3 text-ellipsis'>
          {deskripsi}
        </p>
      </div>
    </Link>
  )
}

export default BisnisCard