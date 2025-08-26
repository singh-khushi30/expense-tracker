import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import Guest from '@/components/Guest';

const Hopmepage = async() => {
  const user = await currentUser();

  if(!user) {
    return <Guest/> 
  }
    return (
    <div>Home</div>
  )
}

export default Hopmepage