import React, { FC } from 'react'
import Image from 'next/image'

interface Props {
  url: string,
  descripcion: string,
}
const InfoCard: FC<Props> = (props) => {

  const { url, descripcion } = props

  return (
    <>
      <div className='flex   bg-white rounded-xl  border-black  border-solid border-2  m-4 h-fit p-4'>
        <Image src={url} alt={"image banner "} width={80} height={40} priority />
        <p className='p-6 text-gray-400 justify-center m-auto'>
          {descripcion}
        </p>
      </div>
    </>
  )
}

export default InfoCard