import Link from 'next/link'
import React,{FC} from 'react'
import "../styles/ctabutton.module.css"

interface Props {
  text: string
}

const CTAButton:FC<Props> = ({text}) => {
  return (
    <Link className='bg-green-700 text-white  text-2xl font-bold px-4 py-2 rounded-full  md:w-24 responsiveButton' href={'/'}>{text}</Link>
  )
}

export default CTAButton