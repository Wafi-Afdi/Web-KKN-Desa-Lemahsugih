import React from 'react'

export default function ProfilPerangkat({
  peran= "Kepala Desa",
  nama= "Dede Sudrajat",
  imgSrc="/placeholder/profile-plc.png"
}) {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-48 aspect-square overflow-hidden rounded-full border-2 border-primary'>
        <img 
          src={imgSrc}
          alt="Foto Profil" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className='mt-3 flex flex-col font-body text-primary justify-center items-center'>
        <p className='text-lg text-center font-bold'>{peran}</p>
        <p className='text-lg text-center '>{nama}</p>
      </div>
    </div>
  )
}
