import React from 'react'
import Image from 'next/image'
import PemdesPetaWrapper from '@/components/profil-desa/peta-desa/PemdesPetaWrapper'
import StrukturDesa from '@/components/profil-desa/StrukturDesa/StrukturDesa'
import GaleriDesa from '@/components/profil-desa/galeri-desa/GaleriDesa'
import PemdesPetaBalaiDesaWrapper from '@/components/profil-desa/peta-desa/PemdesPetaBalaiDesaWrapper'
import PoinMisi from '@/components/profil-desa/StrukturDesa/PoinMisi'

function page() {
  return (
    <div className='min-h-screen bg-[#E7EFC7] pt-30 pb-20 
      flex  justify-center w-full

    '>
      <div className='flex flex-col w-[90%] sm:w-[80%] md:w-[75%] lg:w-[60%]'>
        <div>
          <h2 className='
            font-header font-bold text-primary
            text-3xl
          '>
            Sejarah Desa
          </h2>
          <p 
            className='
              font-body text-primary
              text-lg text-justify
            '
          >
            Desa Lemahsugih terbentuk dari hasil pemekaran Desa Lemahputih pada tahun 2012. Desa Lemahsugih terbentuk oleh 4 Dusun,
            yaitu Cikupa, Panggilingan Kaler, Panggilingan Kidul, dan Babakan Randu. Berdasarkan data BPS tahun 2023, total populasi Desa Lemahsugih ada 2.929 jiwa. 
            Seluruh total area Desa Lemahsugih sebesar 5,47 km<sup>2</sup>.
          </p>
          <div className='flex justify-center items-center'>

            <Image 
              src='/peta/pemekaran.jpg'
              alt='Peta Pemekaran'
              width={1233}
              height={694}
              style={{
                width: 'full',
                marginTop: '20px'
              }}
            />
          </div>
          <PemdesPetaWrapper />
          <h2 className='
            mt-8
            font-header font-bold text-primary
            text-3xl
          '>
            Balai Desa Lemahsugih
          </h2>
          <p 
            className='
              font-body text-primary
              text-lg
            '
          >
            Jl. Singadiwangsa No. 1 Lemahsugih
          </p>
          <GaleriDesa 
            images={[
              '/balai-desa/balai01.webp',
              '/balai-desa/balai02.webp',
              '/balai-desa/balai03.webp',
              '/balai-desa/balai04.webp',
              '/balai-desa/balai05.webp',
              '/balai-desa/balai06.webp',
              '/balai-desa/balai07.webp',
              '/balai-desa/balai08.webp',
              '/balai-desa/balai09.webp',
              '/balai-desa/balai10.webp',

            ]}
          />

          <h2 className='
            mt-8
            font-header font-bold text-primary
            text-3xl
          '>
            Visi
          </h2>
          <p 
            className='
              font-body text-primary
              text-lg
            '
          >
            Menetapkan Desa Lemahsugih Sebagai Desa Maju, Mandiri, dan Sejahtera
          </p>

          <h2 className='
            mt-4
            font-header font-bold text-primary
            text-3xl
          '>
            Misi
          </h2>
          <div className='flex flex-col gap-4'>
            <PoinMisi 
              numbering='1'
              teks='Peningkatan Kualitas Sumber Daya Manusia'
            />
            <PoinMisi 
              numbering='2'
              teks='Menciptakan pembangunan Ekonomi yang berdaya saing'
            />
            <PoinMisi 
              numbering='3'
              teks='Mewujudkan Pembangunan Infrastruktur'
            />
            <PoinMisi 
              numbering='4'
              teks='Meningkatkan kualitas lingkungan hidup'
            />
          </div>

          <h2 className='
            mt-8
            font-header font-bold text-primary
            text-3xl
          '>
            Struktur Desa
          </h2>
          <StrukturDesa />

          <h2 className='
            mt-8
            font-header font-bold text-primary
            text-3xl
          '>
            Galeri Desa
          </h2>
          <GaleriDesa 
            images={[
              '/galeri-desa/lemahsugih01.jpg',
              '/galeri-desa/lemahsugih02.jpg',
              '/galeri-desa/lemahsugih03.jpg',
              '/galeri-desa/lemahsugih04.jpg',
              '/galeri-desa/lemahsugih06.jpg',
              '/galeri-desa/lemahsugih07.jpg',
              '/galeri-desa/lemahsugih08.jpg',
              '/galeri-desa/lemahsugih09.jpg',
              '/galeri-desa/lemahsugih10.jpg',
              '/galeri-desa/lemahsugih11.jpg',
              '/galeri-desa/lemahsugih12.jpg',
              '/galeri-desa/lemahsugih13.jpg',
              '/galeri-desa/lemahsugih14.jpg',
              '/galeri-desa/lemahsugih15.jpg',
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default page