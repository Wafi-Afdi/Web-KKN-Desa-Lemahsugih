import React from 'react'

function KomoditasKandunganGizi({
  takaran="Takaran (g)",
  kalori=1000,
  zat_gizi=[],
}) {
  return (
    <div className="max-w-sm mx-auto bg-white border-2 border-black p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-body mt-2">
      <h2 className="text-lg sm:text-2xl md:text-3xl font-black border-b-8 border-black pb-1">Kandungan Gizi</h2>
      <p className="text-sm font-bold py-2">Takaran Saji: {takaran}</p>
      
      <div className="border-b-4 border-black mb-2 flex justify-between items-end">
        <div>
          <p className="text-xs font-bold uppercase">Jumlah per Sajian</p>
          <p className="text-lg sm:text-2xl md:text-3xl font-black">Energi</p>
        </div>
        <p className="text-lg sm:text-2xl md:text-3xl font-black">{kalori} kkal</p>
      </div>

      <div className="text-right text-xs font-bold border-b border-black pb-1 mb-1">
        % AKG*
      </div>

      <ul className="divide-y divide-black">
        {zat_gizi.map((item, index) => (
          <li key={index} className="flex justify-between py-1 text-sm">
            <span>
              <span className="font-bold">{item.nama}</span> {item.jumlah}{item.satuan}
            </span>
            <span className="font-bold">{item.akg > 0 ? `${item.akg}%` : '-'}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 pt-2 border-t-8 border-black text-[10px] leading-tight">
        *Persen AKG berdasarkan kebutuhan energi 2150 kkal. Kebutuhan energi Anda mungkin lebih tinggi atau lebih rendah.
      </div>
    </div>
  )
}

export default KomoditasKandunganGizi