import Link from 'next/link'
import React from 'react'
import { Facebook, Instagram, Linkedin } from 'react-feather'

const Social = () => {
  return (
    <nav className="flex items-center gap-10">
      <Link href="https://www.linkedin.com/company/thanka-digital/" aria-label="linkedin link to thanka digital" target="_blank" rel="noreferrer" as="https://www.linkedin.com/company/thanka-digital/">
        <Linkedin className="text-blue-500" />
      </Link>
      <Link href="https://www.instagram.com/thanka.digital/" aria-label="instagram link to thanka digital" target="_blank" rel="noreferrer" as="https://www.instagram.com/thanka.digital/">
        <Instagram className="text-orange-500" />
      </Link>
      <Link href="https://www.facebook.com/thankadigital1/" aria-label="facebook link to thanka digital" target="_blank" rel="noreferrer" as="https://www.facebook.com/thankadigital1/">
        <Facebook className="text-blue-500" />
      </Link>
    </nav>
  )
}

export default Social