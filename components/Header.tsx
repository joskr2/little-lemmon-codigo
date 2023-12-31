import React, { FC, ReactElement } from 'react'

interface Props {
  title: ReactElement,
  derSection: ReactElement,
  izqSection: ReactElement
}

const Header: FC<Props> = ({ title, derSection, izqSection }) => {
  return (
    <header className='sticky top-0 z-50'>
      <nav className='flex justify-between p-3 mb-2 w-full bg-white'>
        <div>
          {
            izqSection
          }
        </div>
        <div>
          {
            title
          }
        </div>
        <div>
          {
            derSection
          }
        </div>
      </nav>
    </header>
  )
}

export default Header