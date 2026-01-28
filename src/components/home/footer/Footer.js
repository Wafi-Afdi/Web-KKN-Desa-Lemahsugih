import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Footer() {
  return (
    <footer className='w-full min-h-[174px] bg-primary p-5 
    flex md:flex-row flex-col gap-6 md:gap-0'>
      <div className='flex flex-col justify-end pt-4 md:pt-15'>
        <Image
          src="/logo/logo-majalengka.png"
          width={50}
          height={50}
          alt="Logo Kabupaten Majalengka"
        />
        <p className='font-header text-2xl font-bold text-white'>
          Desa Lemahsugih
        </p>
        <p className='font-body text-lg/6 text-white'>
          Kec. Lemahsugih,<br/>
          Kab. Majalengka, Jawa Barat
        </p>
        <p className='font-body text-lg/6 text-white'>
          Jl. Singadiwangsa No. 1 Lemahsugih
        </p>
      </div>
      <div className='md:ml-10 flex flex-col gap-2 text-white'>
        <p className='text-2xl font-bold font-header'>
          Peta Situs
        </p>
        <Link href="/" className="font-body text-lg">Beranda</Link>
        <Link href="/komoditas" className="font-body text-lg">Komoditas</Link>
        <Link href="/bisnis" className="font-body text-lg">Bisnis</Link>
        <Link href="/pemdes" className="font-body text-lg">Pemerintah Desa</Link>
      </div>
      <div className='ml-0 md:ml-auto flex flex-col justify-end md:items-end text-white'>
        <p className="font-body text-sm font-semibold mb-2">
          Dipersembahkan oleh:
        </p>
        <div className='flex flex-row md:justify-end items-center gap-2'>
          <Image
            src="/logo/logo-tim.png"
            width={50}
            height={50}
            alt="Logo Tim Papanggih Lemahsugih"
          />
          <Image
            src="/logo/logo-kkn.png"
            width={50}
            height={50}
            alt="Logo KKN PPM UGM"
          />
          <Image
            src="/logo/logo-ugm.png"
            width={50}
            height={50}
            alt="Logo UGM"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer