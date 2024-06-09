"use client"
import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useUser, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

function Header() {
  const {user,isSignedIn} = useUser();
  return (
    <div className = 'p-10 flex justify-between items-center border shadow-sm'>
      <Image src={'./logo.svg'}
      alt ='logo'
      width = {180}
      height = {120}
      />
      {isSignedIn?
    <UserButton/>  : <Link href={'/sign-in'}> <Button> Get Started </Button> 
    </Link>
    }
    </div>
  )
}

export default Header
