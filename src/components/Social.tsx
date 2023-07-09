import Link from 'next/link'
import React from 'react'
import { Facebook, Instagram, Linkedin } from 'react-feather'

const Social = () => {
  return (
    <nav className="flex items-center gap-10">
      <Link href="https://www.linkedin.com/company/thanka-digital/" target="_blank" rel="noreferrer">
        <Linkedin />
      </Link>
      <Link href="https://www.instagram.com/thanka.digital/" target="_blank" rel="noreferrer">
        <Instagram />
      </Link>
      <Link href="https://www.facebook.com/thankadigital1/" target="_blank" rel="noreferrer">
        <Facebook />
      </Link>
    </nav>
  )
}

export default Social