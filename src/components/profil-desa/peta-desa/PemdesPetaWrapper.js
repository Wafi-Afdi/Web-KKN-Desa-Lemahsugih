'use client'
import React from 'react'

import dynamic from "next/dynamic";

const PemdesPetaDesaNoSSR = dynamic(() => import("./PemdesPetaDesa"), { ssr: false })

export default function PemdesPetaWrapper() {
  return (
    <div className='relative z-10 mt-6'>
      <PemdesPetaDesaNoSSR />
    </div>
  )
}
