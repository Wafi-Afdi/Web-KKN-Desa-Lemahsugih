import React from 'react'

function HeroSection() {
  return (
    <div className="w-full min-h-screen pt-30 px-5 pb-5 flex flex-col 
      bg-[linear-gradient(to_top,rgba(0,0,0,0.8),rgba(0,0,0,0.3)),url('/background/bg-ciremai-1.jpg')] bg-cover bg-center
    ">
      <div className='relative overflow-hidden flex-1 flex flex-col justify-end'>
        {/* <img 
          src='/decor/spinner-1.png'
          alt='spinner'
          className='absolute 
            top-[-25%] right-[-40%] 
            md:top-[-25%] md:right-[-40%] 
            animate-[spin_20s_linear_infinite]'
        /> */}
        {/* Karousel  */}
        <div className='relative aspect-video w-full max-w-[600px]'>
          {/* 2. Added 'absolute inset-0' and removed hardcoded width/height */}
          <iframe
            src="https://drive.google.com/file/d/1aQOIHdmiFsN7R42FIsYfiaNJyM6CnNaq/preview"
            className="absolute top-0 left-0 w-full h-full border-0"
          ></iframe>
        </div>
        {/* <p
          className="font-body text-lg md:text-xl/10 font-light lg:max-w-[50%] text-white  text-shadow-xl"
        >
          KKN-PPM UGM Periode IV 2025
        </p> */}
        <h1
          className="font-header mt-4 text-5xl md:text-6xl/13 font-bold lg:max-w-[50%] text-white  text-shadow-xl"
        >
          Desa Lemahsugih
        </h1>
        <p
          className="font-body text-lg md:text-xl font-light lg:max-w-[50%] text-white  text-shadow-xl"
        >
          Kab. Majalengka, Kec. Lemahsugih, Jawa Barat
        </p>
        <p
          className="font-body text-xl md:text-2xl lg:max-w-[50%] mt-1 text-white text-shadow-xl"
        >
          <span className='font-bold'>“Lemahsugih”</span> berasal dari dua kata sunda, yaitu
          “Lemah” artinya  tanah dan “Sugih” artinya kaya.
          Jadinya, Desa Lemahsugih secara harfiah artinya <span className='font-bold'>“Tanah Kaya”</span>.
        </p>
      </div>
    </div>
  )
}

export default HeroSection