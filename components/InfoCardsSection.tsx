import React from 'react'
import InfoCard from './InfoCard'


const cardsContent = [
  {
    url: '/cupcake.jpg',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    url: '/cupcake.jpg',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    url: '/cupcake.jpg',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
]

const InfoCardsSection = () => {
  return (
    <div className='flex flex-col md:flex-row m-4 justify-between'>
      {
        cardsContent.map(({ url, descripcion }, index) => (
          <InfoCard key={index} url={url} descripcion={descripcion} />
        ))
      }
    </div>
  )
}

export default InfoCardsSection