import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { menu } from '@/data/menu'
import img from '../../../public/photo/Logo11.png'
import Image from 'next/image'

export default function Header() {
  const [isShowMenuMobile, setIsShowMenuMobile] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    document.addEventListener('click', handleCloseMobile)
    return () => document.removeEventListener('click', handleCloseMobile)
  }, [])

  const handleCloseMobile = () => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsShowMenuMobile(false)
    }
  }

  return (
<header className="bg-red-800">
  <div className="flex justify-between mx-14 text-zinc-100 text-sm uppercase font-semibold font-PermanentMarker items-center">
    <div className="flex gap-2 items-center">
      <div>
        <Image
          width={150}
          height={66}
          src={img}
          alt=""
          className="w-full md:w-fit h-full object-cover"
        />
      </div>
    
    </div>

    <div className="sm:flex hidden justify-between">
      <div className="flex gap-8">
        {menu.map((value, index) => (
          <div key={index}>
            <Link href={value.href}>
              <a>{value.label}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>

    <div className="block sm:hidden justify-end ml-auto">
      <button onClick={() => setIsShowMenuMobile(true)} ref={menuRef}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
  </div>

  {isShowMenuMobile && (
    <div className="fixed w-full top-0 left-0 h-full bg-white text-center text-2xl z-50">
      <ul>
        {menu.map((value, index) => (
          <li key={index} className="border-b py-3">
            <Link href={value.href}>
              <a>{value.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )}
</header>
  )
}
