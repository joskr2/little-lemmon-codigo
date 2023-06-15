import React from 'react'
import Header from './components/Header';
import Link from 'next/link';

const IzqSection = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </>
  )
}

const DerSection = () => {
  return (
    <div className='flex w-fit  '>
      <Link className='mr-1 text-green-700' href={'/login'}>Entrar</Link>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    </div>
  )
}

const Title = () => {
  return (
    <>
      <h1 className='text-2xl text-yellow-300 font-bold'>Little <span className='text-green-700 font-bold'>Lemmon</span></h1>
    </>
  )
}


const Home = () => {
  return (
    <>
      <Header title={Title()} izqSection={IzqSection()} derSection={DerSection()} />
    </>
  )
}

export default Home