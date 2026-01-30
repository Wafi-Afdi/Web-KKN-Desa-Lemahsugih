import BookletPeta from '@/components/peta-digital/BookletPeta/BookletPeta'
import GaleriPeta from '@/components/peta-digital/GaleriPeta/GaleriPeta'
import GaleriDesa from '@/components/profil-desa/galeri-desa/GaleriDesa'
import { FaCloudDownloadAlt } from "react-icons/fa";
import React from 'react'

function page() {
  return (
    <div
      className='min-h-screen
        bg-[#E7EFC7] pt-30 pb-20 
        flex  justify-center w-full
      '
    >
      <div className='flex flex-col w-[90%] sm:w-[80%] md:w-[75%] lg:w-[60%]'>
        <h1
          className='
            font-header font-bold text-primary
            text-3xl
          '
        >
          Peta Digital Desa
        </h1>
        <p
          className='
              font-body text-primary
              text-lg text-justify
            '
        >
          Arsip Peta Hasil KKN-PPN UGM Periode IV 2025 dari Tim Papanggih Lemahsugih.
        </p>
        {/* <GaleriPeta 
          images={[
            '/bisnis/marlina-kopi/marlinakopi01.jpg'
          ]}
        /> */}
        <GaleriDesa
          images={[
            '/galeri-peta/peta-batas.png',
            '/galeri-peta/peta-dasar.png',
            '/galeri-peta/peta-imap.png',
            '/galeri-peta/peta-kemiringan-lereng.png',
            '/galeri-peta/peta-komoditas.png',
            '/galeri-peta/peta-kontur.png',
          ]}
        />
        <div
          className='mt-4
            flex flex-col items-center
          '
        >

          <h3
            className='text-xl font-header text-center  font-bold text-primary'
          >
            Scan QR Untuk Akses Seluruh Peta
          </h3>
          <div
            className='flex flex-col md:flex-row gap-8 items-center'
          >
            <div
              className='rounded-xl p-4 bg-primary w-fit mt-3 flex-none'
            >

              <img
                className='
                max-w-[120px] md:max-w-[150px] lg:max-w-[200px]
              '
                src='/galeri-peta/qr-code-peta.png'
              />
            </div>
            <div className='flex flex-col items-center gap-2'>
              <p className='font-body text-lg lg:text-xl font-medium'>
                Tidak bisa scan QR?
              </p>
              <a
                href="https://drive.google.com/drive/folders/1y0gjA4krY2xK5hbU6goBULX_m7hn0UHK?usp=drive_link"
                target="_blank" rel="noopener noreferrer"
                className='
                            w-fit rounded-lg py-2 px-4 bg-primary text-secondary font-bold font-body text-sm md:text-base lg:text-lg
                            flex flex-row items-center gap-2
                          '
              >
                <p>
                  Klik Disini
                </p>
              </a>
            </div>
          </div>
        </div>

        <h2
          className='
            font-header font-bold text-primary
            text-3xl mt-4
          '
        >
          Buku Panduan Peta
        </h2>
        <BookletPeta />
      </div>
    </div>
  )
}

export default page