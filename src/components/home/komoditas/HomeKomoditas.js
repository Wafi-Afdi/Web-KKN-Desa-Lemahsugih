'use client'
import dynamic from "next/dynamic";

import React, { useState, useEffect, useMemo } from 'react'
import KomoditasHomeCard from './KomoditasHomeCard'
import Link from 'next/link'
import BookletPangan from './BookletPangan'
import dataKomoditasJSON from '@/utils/data/data-komoditas.js'

const PetaKomoditasNoSSR = dynamic(() => import("./PetaKomoditas"), { ssr:false })


function HomeKomoditas() {
  const dataKomoditas = useMemo(() => {
    return dataKomoditasJSON.slice(0, 3);
  }, []);
  return (
    <div className='min-h-screen bg-secondary px-5 py-8 relative overflow-x-hidden'>
      
      <img 
        alt={`img bg petani`}
        src='/background/mask-petani.webp' 
        className='
        right-[-25%] top-[50%]
        sm:top-[50] sm:right-[-10%]
        md:right-[-50] md:top-[0] 
        z-0
        absolute
        w-[400px] md:w-[750px] h-auto 
        object-cover object-right'
      />
      <h2 className='relative text-primary font-header text-3xl md:text-4xl lg:text-6xl font-bold z-50'>
        Komoditas Lemahsugih
      </h2>
      <p className='relative font-body font-medium text-md md:text-xl lg:max-w-[70%] text-primary  text-shadow-xl z-50'>
        Di “Tanah Kaya” yang berada pada posisi 982 MDPL ini terdapat 
        berbagai jenis tanaman cabai, tomat, kopi, sayur, dan lain - lain.
      </p>
      <div className='relative flex md:flex-wrap lg:flex-nowrap flex-col md:flex-row gap-4 md:gap-3 mt-8 z-50
        justify-center items-center lg:justify-start md:items-stretch
      '>
        {
          dataKomoditas.map((data, idx) => (
            
            <KomoditasHomeCard 
              key={data.nama_komoditas + idx}
              namaKomoditas={data?.nama_komoditas}
              deskripsi={data?.deskripsi_singkat}
              namaLatin={data?.nama_latin}
              imgSrc={data?.cardImageCoverSrc}
              link={data?.slug}
            />
          ))
        }
      </div>
      <div className='relative w-full flex flex-col justify-center items-center mt-8'>
        <Link href='/komoditas' className='w-fit rounded-lg py-2 px-4 bg-primary text-secondary font-bold font-body'>
          Lebih Lengkap
        </Link>
        <p className='relative font-body font-medium text-primary mt-4'> Atau </p>
      </div>
      <BookletPangan />
      <PetaKomoditasNoSSR />
    </div>
  )
}

export default HomeKomoditas