'use client'
import React, { useEffect, useMemo, useState } from 'react'
import KomoditasCard from '@/components/komoditas/KomoditasCard/KomoditasCard'
import dataKomoditasJSON from '@/utils/data/data-komoditas.js'

function KomoditasSearchPage() {
  const [semuaKomoditas, setSemuaKomoditas] = useState(dataKomoditasJSON)
  const [searchKataKunci, setSearchKataKunci] = useState('')

  const dataTerfilter = useMemo(() => {
    if (!searchKataKunci) return semuaKomoditas;

    const lowerSearch = searchKataKunci.toLowerCase();
    
    return semuaKomoditas.filter((item) => {
      return (
        item.nama_komoditas?.toLowerCase().includes(lowerSearch) ||
        item.nama_latin?.toLowerCase().includes(lowerSearch)
      );
    });
  }, [searchKataKunci, semuaKomoditas]);

  return (
    <div className='min-h-screen'>
      <div className="relative w-full h-[40vh] md:h-[50vh]">
        <img
          src="/background/bg-kopi.png"
          alt="View"
          className="w-full h-full object-cover relative z-20"
        />
        {/* Overlay hitam */}
        <div className="absolute inset-0 bg-primary z-10" />

        {/* Search Bar */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[90%] lg:max-w-[50%] z-20">
          <div className='absolute w-full text-center
            text-lg sm:text-2xl 
            font-header text-secondary font-bold
            shadow-lg sm:shadow-2xl
            top-[-40]
          '>
            Komoditas di Desa Lemahsugih
          </div>
          <form className="flex items-stretch bg-white rounded-xl  overflow-hidden border-2 border-primary">
            <input
              type="text"
              placeholder="Cari komoditas..."
              className="flex-1 px-3 py-2 outline-none text-primary font-body text-base"
              value={searchKataKunci}
              onChange={(e) => setSearchKataKunci(e.target.value)}
            />
            <button
              type="button"
              className="bg-primary text-secondary px-4 m-1 font-body font-bold hover:bg-opacity-90 transition-colors rounded-md
                text-sm
              "
            >
              Cari
            </button>
          </form>
        </div>
      </div>
      <div className="
        my-15  mx-5 md:mx-10
        flex flex-col md:flex-wrap sm:flex-row gap-4
        items-center md:items-stretch
        justify-center
      
      ">
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5
          gap-4 mb-2
        '>
          {dataTerfilter.length > 0 ? (
            dataTerfilter.map((data, idx) => (
              <KomoditasCard 
                key={data.nama_komoditas + idx}
                namaKomoditas={data?.nama_komoditas}
                deskripsi={data?.deskripsi_singkat}
                namaLatin={data?.nama_latin}
                imgSrc={data?.cardImageCoverSrc}
                link={data?.slug}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-400 text-lg font-body">
                Tidak ada komoditas yang cocok dengan &quot;{searchKataKunci}&quot;
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default KomoditasSearchPage