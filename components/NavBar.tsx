import React from 'react'
import { checkUser } from '@/lib/checkUser'

const NavBar = () => {
    const user = checkUser();
  return (
    <div>NavBar</div>
  )
}

export default NavBar