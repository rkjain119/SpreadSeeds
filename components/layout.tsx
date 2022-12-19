// components/layout.js
import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Slder from './slideover'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='bg-offwhite-10 text-brown-900 dark:bg-tangora-10 dark:text-offwhite-10'>
        <Navbar />
        <Slder />
        <main> {children}</main>
        <Footer />
      </div>
    </>
  )
}
