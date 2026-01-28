'use client'
import React from 'react'
import KomoditasKandunganGizi from '../KomoditasKandunganGizi/KomoditasKandunganGizi'
import dynamic from 'next/dynamic'

const PetaKomoditasSingleNoSSR = dynamic(() => import("../PetaKomoditas/PetaKomoditasSingle"), { ssr: false })

function LamanDetailKomoditas({
  namaTanaman = "Nama Tanaman",
  namaLatin = "Nama Latin Tanaman",
  deskripsiHTML = "",
  kandunganGizi = null,
  imageArticle = null,
  kodeKomoditas = null,

}) {
  return (
    <div className='flex flex-col w-[90%] sm:w-[80%] md:w-[75%] lg:w-[55%]'>
      {
        imageArticle &&
        <img
          src={imageArticle}
          className='w-full object-cover h-[200px] rounded-xl'
        />
      }
      <h1
        className='font-header text-3xl font-bold mt-4'
      >
        {namaTanaman}
      </h1>
      <p
        className='text-lg font-body font-light italic'

      >
        {namaLatin}
      </p>

      <p className='text-base font-body text-justify mt-2' dangerouslySetInnerHTML={{ __html: deskripsiHTML }}>
      </p>

      {/* {
        kandunganGizi &&
        <>
          <h2
            className='font-header text-2xl font-bold mt-4'
          >
            Kandungan Gizi
          </h2>
          <KomoditasKandunganGizi 
            kalori={kandunganGizi.takaran_saji ?? "0 g"}
            takaran={kandunganGizi.kalori ?? 0}
            zat_gizi={kandunganGizi.zat_gizi ?? []}
          />
        </>
      } */}


      {
        kodeKomoditas &&
        <>

          <h2
            className='font-header text-2xl font-bold mt-8'
          >
            Peta Komoditas
          </h2>
          <PetaKomoditasSingleNoSSR
            kodeKomoditas={kodeKomoditas}
          />
        </>
      }
    </div>
  )
}

export default LamanDetailKomoditas