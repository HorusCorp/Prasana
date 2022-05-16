import React from 'react'
import  Link  from 'next/link'

function ContactButton() {
  return (
    <div className='fixed__contact_btn'><Link href="/contact">Nous Contactez</Link></div>
  )
}

export default ContactButton