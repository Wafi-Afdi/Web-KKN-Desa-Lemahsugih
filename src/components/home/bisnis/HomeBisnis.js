'use client'
import React, { useState, useEffect } from 'react'
import BisnisHomeCard from './BisnisHomeCard'
import bisnisData from '@/utils/data/data-bisnis'
import Link from 'next/link'

export default function HomeBisnis() {
  const [dataBisnis, setBisnis] = useState([])
  useEffect(() => {
    const dataLength = bisnisData.length >= 3 ? 3 : bisnisData.length
    const showcaseData = []
    for (let i = 0; i < dataLength; i++) {
      showcaseData.push(bisnisData[i])
    }
    setBisnis(showcaseData)
  }, [])

  return (
    <div className='relative min-h-screen md:min-h-fit bg-[#483700] px-5 py-8 overflow-hidden'>
      <div className="absolute w-full lg:w-[800px] h-full bg-cover bg-center top-0 right-0
            bg-[url('/background/mesin_kopi.png')]
            lg:mask-[linear-gradient(to_left,black_0%,transparent_60%,transparent_70%)]
            mask-[linear-gradient(to_left,black_0%,transparent_60%,transparent_20%)]">
      </div>
      <h2 className='relative z-10 text-secondary font-header text-3xl md:text-4xl lg:text-6xl font-bold'>
        Bisnis & UMKM
      </h2>
      <p className='relative z-10 font-body font-medium text-md md:text-xl lg:max-w-[70%] text-secondary    text-shadow-xl'>
        Menikmati senja dengan pemandangan sawah & kabut ditemani seseduh Kopi Americano dari biji yang tumbuh di "Tanah Kaya" ini.
      </p>
      <div className=' relative flex md:flex-wrap lg:flex-nowrap flex-col md:flex-row gap-4 md:gap-3 mt-8
      justify-center items-center lg:justify-start md:items-stretch z-10
      '>
        {
          dataBisnis.map((data, idx) => (
            <BisnisHomeCard
              key={idx}
              imgSrc={data.imageSrc}
              namaBisnis={data.nama_bisnis}
              tipeBisnis={data.tipe_bisnis}
              deskripsi={data.deskripsi_singkat}
              slug={data?.slug}
            />
          ))
        }
      </div>
      <div className='w-full flex flex-col justify-center items-center mt-8 relative z-10'>
        <Link href='/bisnis' className='w-fit rounded-lg py-2 px-4 bg-secondary text-primary font-bold font-body'>
          Lebih Lengkap
        </Link>
      </div>
    </div>
  )
}
