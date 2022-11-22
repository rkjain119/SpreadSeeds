// pages/index.js
import React from 'react'
import Hero from '../components/hero'
import Categories from '../components/categories'
import Cta from '../components/cta'
import Features from '../components/features'

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Cta />
      <h1 className='text-3xl font-bold underline'>Hello world frm index!</h1>
      <Features />
    </>
  )
}
