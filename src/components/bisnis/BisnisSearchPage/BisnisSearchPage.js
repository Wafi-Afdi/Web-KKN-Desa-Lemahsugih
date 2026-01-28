'use client'
import React, { useEffect, useMemo, useState } from 'react'
import BisnisCard from '../card/BisnisCard'
import bisnisData from '@/utils/data/data-bisnis'
function BisnisSearchPage() {
  const [semuaBisnis, setSemuaBisnis] = useState([])
  const [searchKataKunci, setSearchKataKunci] = useState('')

  useEffect(() => {
    setSemuaBisnis(bisnisData)
  }, [])

  const dataTerfilter = useMemo(() => {
    if (!searchKataKunci) return semuaBisnis;

    const lowerSearch = searchKataKunci.toLowerCase();

    return semuaBisnis.filter((item) => {
      return (
        item.nama_bisnis?.toLowerCase().includes(lowerSearch) ||
        item.tipe_bisnis?.toLowerCase().includes(lowerSearch) ||
        item.tags.includes(lowerSearch)
      );
    });
  }, [searchKataKunci, semuaBisnis]);

  return (
    <div className='min-h-screen'>
      <div className="relative w-full h-[40vh] md:h-[50vh]">
        <img
          src="/galeri-desa/marlina-bg.jpg"
          alt="View"
          className="w-full h-full object-cover object-[25%_55%]"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[90%] lg:max-w-[50%] z-20">
          <div className='absolute w-full text-center
            text-lg sm:text-2xl font-header text-secondary font-bold
            shadow-lg sm:shadow-2xl
            top-[-40]
          '>
            Bisnis & UMKM di Desa Lemahsugih
          </div>
          <form className="flex items-stretch bg-white rounded-xl  overflow-hidden border-2 border-primary">
            <input
              type="text"
              placeholder="Cari bisnis..."
              className="flex-1 px-3 py-2 outline-none text-primary font-body text-base"
              value={searchKataKunci}
              onChange={(e) => setSearchKataKunci(e.target.value)}
            />
            <button
              type="submit"
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
              <BisnisCard 
                key={data.nama_bisnis + idx}
                namaBisnis={data?.nama_bisnis}
                deskripsi={data?.deskripsi_singkat}
                tipeBisnis={data?.tipe_bisnis}
                imgSrc={data?.imageSrc}
                slug={data?.slug}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-400 text-lg font-body">
                Tidak ada bisnis yang cocok dengan "{searchKataKunci}"
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BisnisSearchPage