import React, { FC, ReactElement } from 'react'
import Image from 'next/image'

interface Props {
  titulo: string,
  subtitulo: string,
  img: string,
  ctaButton: ReactElement
}

const Hero: FC<Props> = ({ titulo, subtitulo, img, ctaButton }) => {
  return (
    <div >
      <Image className='w-full h-96 p-4  absolute  rounded-3xl' src={img} alt="image banner " width={500} height={500} priority />
      <div className='flex flex-col justify-between w-fit z-10 h-80 p-7 relative left-0 ml-4 mt-4 '>
        <h1 className='text-3xl text-white font-bold'>{titulo}</h1>
        <h2 className='text-2xl text-white font-bold'>{subtitulo}</h2>
        {
          ctaButton
        }
      </div>
    </div>
  )
}

export default Hero