'use client'
import React from 'react'

import dynamic from "next/dynamic";

const PemdesPetaBalaiDesaNoSSR = dynamic(() => import("./PemdesPetaBalaiDesa"), { ssr: false })

function PemdesPetaBalaiDesaWrapper() {
  return (
    <div className='relative z-10 mt-4'>
      <PemdesPetaBalaiDesaNoSSR />
    </div>
  )
}

export default PemdesPetaBalaiDesaWrapper