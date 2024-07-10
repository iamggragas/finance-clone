import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const HeaderLogo = (props: Props) => {
  return (
    <Link
        href="/"
    >
        <div className='items-center hidden lg:flex'>
            <Image src="/vercel-icon-dark.svg" alt="Vercel Logo" width={28} height={28}/>
            <p className='font-semibold text-white text-2xl ml-2.5'>
                Finance
            </p>
        </div>
    </Link>
  )
}

export default HeaderLogo