import LamanDetailKomoditas from '@/components/komoditas/LamanDetail/LamanDetailKomoditas'
import React from 'react'
import { notFound } from 'next/navigation'
import dataKomoditas from '@/utils/data/data-komoditas.js'

export const dynamicParams = false

export async function generateStaticParams() {
  return dataKomoditas.map((item) => ({
    slug: item.slug,
  }))
}

async function page({params}) {
  const { slug } = await params
  const data = dataKomoditas.find((item) => item.slug === slug)

  if (!data) {
    notFound()
  }
  return (
    <div className='min-h-screen
      pt-30 pb-20 
      flex  justify-center w-full
    '>
      <LamanDetailKomoditas 
        deskripsiHTML={data.deskripsi}
        // kandunganGizi={data.data_nutrisi}
        namaLatin={data.nama_latin}
        namaTanaman={data.nama_komoditas}
        imageArticle={data.imageArticle}
        kodeKomoditas={data.kodeGeoJSON}
      />
    </div>
  )
}

export default page