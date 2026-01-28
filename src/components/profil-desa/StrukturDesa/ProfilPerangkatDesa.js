import React from 'react'

function ProfilPerangkatDesa({
  peran= "Kepala Desa",
  nama= "Dede Sudrajat",
  imgSrc="/placeholder/profile-plc.png"
}) {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-30 sm:w-36 md:w-42 lg:w-48 
        aspect-square overflow-hidden rounded-full border-2 border-primary'>
        <img 
          src={imgSrc}
          alt="Foto Profil" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className='mt-3 flex flex-col font-body text-primary justify-center items-center'>
        <p className='text-base lg:text-lg text-center font-bold'>{peran}</p>
        <p className='text-base lg:text-lg text-center '>{nama}</p>
      </div>
    </div>
  )
}

export default ProfilPerangkatDesa