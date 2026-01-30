'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full flex justify-center z-100 p-4">
      <div
        className="flex items-center justify-between md:justify-start px-6 py-3 w-[90%]  lg:w-[80%] bg-primary shadow-lg text-white rounded-4xl relative"
      >
        <div className="flex items-center">
          <Image
            src="/logo/logo-tim.png"
            width={45}
            height={45}
            alt="Logo Papanggih Lemahsugih"
            className="w-auto h-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row items-center font-medium font-header gap-8 ml-8 
          text-xl lg:text-2xl"
        >
          <Link href="/" className="hover:opacity-80 transition-opacity">Beranda</Link>
          <Link href="/komoditas" className="hover:opacity-80 transition-opacity">Komoditas</Link>
          <Link href="/bisnis" className="hover:opacity-80 ransition-opacity">Bisnis</Link>
          <Link href="/pemdes" className="hover:opacity-80 transition-opacity">Pemdes</Link>
          <Link href="/peta-digital" className="hover:opacity-80 transition-opacity" onClick={closeMenu}>Peta Desa</Link>
        </div>

        {/* Burger Button for Mobile */}
        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <AiOutlineClose className="text-secondary text-3xl" />
          ) : (
            <AiOutlineMenu className="text-secondary text-3xl" />
          )}
        </button>

        {/* Mobile Dropdown Menu */}
        <div className={`
          absolute top-full left-0 w-full mt-3 p-4 bg-primary rounded-3xl shadow-2xl transition-all duration-300 md:hidden
          ${isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"}
        `}>
          <div className="flex flex-col gap-5 font-header font-medium text-xl p-4">
            <Link href="/" onClick={closeMenu}>Beranda</Link>
            <Link href="/komoditas" onClick={closeMenu}>Komoditas</Link>
            <Link href="/bisnis" onClick={closeMenu}>Bisnis</Link>
            <Link href="/pemdes" onClick={closeMenu}>Pemdes</Link>
            <Link href="/peta-digital" onClick={closeMenu}>Peta Desa</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}