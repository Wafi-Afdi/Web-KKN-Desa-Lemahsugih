import GaleriDesa from '@/components/profil-desa/galeri-desa/GaleriDesa'
import React from 'react'

function BisnisLamanDetail({
  galeri = [],
  namaBisnis = "Nama Bisnis",
  tipeBisnis = "Tipe Bisnis",
  deskripsiHTML = "",
  gMapsSrc = null,
}) {
  return (
    <div className='flex flex-col w-[90%] sm:w-[80%] md:w-[75%] lg:w-[55%]'>
      <h1
        className='font-header text-3xl font-bold'
      >
        { namaBisnis }
      </h1>
      <p
        className='text-lg font-body font-light'
      >
        { tipeBisnis }
      </p>
      {
        galeri.length > 0 &&
        <GaleriDesa
          images={galeri}
        />
      }

      <p className='text-base font-body text-justify mt-2' dangerouslySetInnerHTML={{__html: deskripsiHTML}}>
      </p>

      <h2
        className='font-header text-2xl font-bold mt-8'
      >
        Lokasi
      </h2>
      {
        gMapsSrc &&
        <div style={{ width: '100%' }}><iframe width="100%" height="400" src={gMapsSrc}></iframe></div>
      }
    </div>
  )
}

export default BisnisLamanDetail