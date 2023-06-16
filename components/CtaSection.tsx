import React from 'react'
import CTAButton from './CtaButton'

const CtaSection = () => {
  return (
    <div className='flex justify-around w-fill p-4 m-6 mt-10'>
      <CTAButton text='Veg' />
      <CTAButton text='Meat' />
      <CTAButton text='Asian' />
    </div>
  )
}

export default CtaSection