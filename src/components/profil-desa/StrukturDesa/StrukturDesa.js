'use client'
import React, { useEffect, useState } from 'react'
import ProfilPerangkatDesa from './ProfilPerangkatDesa'

function StrukturDesa() {
  const [perangkatData, setPerangkatData] = useState([]);

  useEffect(() => {
    fetch('/data/perangkat-desa.json') 
      .then((res) => res.json())
      .then((data) => setPerangkatData(data))
      .catch((err) => console.error("Gagal loading data struktur perangkat:", err));
  }, []);

  const kepalaDesa = perangkatData.find(p => p.peran === "Kepala Desa");
  const staffLainnya = perangkatData.filter(p => p.peran !== "Kepala Desa");
  return (
    <div>
      <div className='flex justify-center items-center mt-4 mb-4'>
        <ProfilPerangkatDesa 
          nama={kepalaDesa?.nama}
          peran={kepalaDesa?.peran}
          imgSrc={kepalaDesa?.imageSrc}
        />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        {
          staffLainnya.map((data, idx) => (

            <ProfilPerangkatDesa 
              nama={data?.nama}
              key={idx}
              peran={data?.peran}
              imgSrc={data?.imageSrc}
            />
          ))
        }
      </div>
    </div>
  )
}

export default StrukturDesa