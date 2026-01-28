import BisnisLamanDetail from '@/components/bisnis/BisnisLamanDetail/BisnisLamanDetail'
import React from 'react'
import { notFound } from 'next/navigation'
import dataBisnis from '@/utils/data/data-bisnis'

export async function generateStaticParams() {
  return dataBisnis.map((item) => ({
    slug: item.slug,
  }))
}

async function page({params}) {
  const { slug } = await params
  const data = dataBisnis.find((item) => item.slug === slug)

  if (!data) {
    notFound()
  }
  return (
    <div className='
      min-h-screen
      pt-30 pb-20 
      flex  justify-center w-full
    '>
      <BisnisLamanDetail 
        deskripsiHTML={data.teks_deskripsi}
        gMapsSrc={data.gMapsEmbedSrc}
        galeri={data.galeri}
        namaBisnis={data.nama_bisnis}
        tipeBisnis={data.tipe_bisnis}
      />
    </div>
  )
}

export default page