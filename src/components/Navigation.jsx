import React from 'react'
import { Navbar, Button } from 'flowbite-react'

export default function NavigationBar() {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className='font-fig'
    >
      <Navbar.Brand href='https://flowbite.com/'>
        <img
          src='https://flowbite.com/docs/images/logo.svg'
          className='mr-3 h-6 sm:h-9'
          alt='Flowbite Logo'
        />
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          Lawang Bato Computer Laboratory Inventory System
        </span>
      </Navbar.Brand> 
    </Navbar>
  )
}
