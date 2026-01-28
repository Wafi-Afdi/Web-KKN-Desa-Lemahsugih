'use client'
import React, { useEffect, useState} from 'react'
import ProfilPerangkat from './ProfilPerangkat'
import Link from 'next/link'

export default function PemdesHome() {
  const [kuwuDesa, SetKuwuDesa] = useState({
    peran: "Kepala Desa",
    nama: "Nama Kepala Desa"
  })
  const [kaurKeuangan, SetKaurKeuangan] = useState({
    peran: "Kaur Keuangan",
    nama: "Nama Kaur Keuangan"
  })
  const [sekdesa, SetSekdesa] = useState({
    peran: "Sekdes",
    nama: "Nama Sekdes"
  })


  useEffect(() => {
      fetch('/data/perangkat-desa.json') 
        .then((res) => res.json())
        .then((data) => {
          const dataKuwu = data.find(p => p.peran === "Kepala Desa");
          const dataSekdes = data.find(p => p.peran === "Sekretaris Desa");
          const dataKaurKeuangan = data.find(p => p.peran === "Kaur Keuangan");

          if (dataKuwu) {
            SetKuwuDesa(dataKuwu)
          }
          if (dataSekdes) {
            SetSekdesa(dataSekdes)
          }
          if (dataKaurKeuangan) {
            SetKaurKeuangan(dataKaurKeuangan)
          }
        })
        .catch((err) => console.error("Gagal loading data struktur perangkat:", err));

      
    }, []);
  return (
    <div className='min-h-screen md:min-h-fit lg:min-h-screen bg-[#E7EFC7] px-5 py-8'>
      <h2 className='text-primary font-header text-3xl md:text-4xl lg:text-6xl font-bold'>
        Perangkat Desa
      </h2>
      <div className='flex flex-col md:flex-row justify-center gap-10 md:gap-15 lg:gap-30
        mt-10
      '>
        <div className='block md:hidden'>
          <ProfilPerangkat 
            nama={kuwuDesa.nama}
            peran={kuwuDesa.peran}
          />
        </div>
        <div className='md:pt-30'>
          <ProfilPerangkat
            nama={kaurKeuangan.nama}
            peran={kaurKeuangan.peran}
          />
        </div>
        <div className='hidden md:block'>
          <ProfilPerangkat 
            nama={kuwuDesa.nama}
            peran={kuwuDesa.peran}
          />
        </div>
        <div className='md:pt-30'>
          <ProfilPerangkat
            nama={sekdesa.nama}
            peran={sekdesa.peran}
          />
        </div>
      </div>
      <div className='relative w-full flex flex-col justify-center items-center mt-10'>
        <Link href='/pemdes' className='w-fit rounded-lg py-2 px-4 bg-primary text-secondary font-bold font-body'>
          Lebih Lengkap
        </Link>
      </div>
    </div>
  )
}
