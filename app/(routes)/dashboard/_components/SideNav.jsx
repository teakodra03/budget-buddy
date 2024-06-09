'use client'
import { UserButton } from '@clerk/nextjs'
import { Crown, Layout, LayoutGrid, PiggyBankIcon, ReceiptIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

function SideNav() {
    const menuList = [
        {
            id:1,
            name:'Dashboard',
            icon:LayoutGrid,
            path:'/dashboard'

        },
        {
            id:2, 
            name:'Budgets',
            icon:PiggyBankIcon,
            path:'/dashboard/budgets'

        },
        {
            id:3,
            name:'Expenses',
            icon:ReceiptIcon,
            path:'/dashboard/expenses'

        },
    ]

    const path = usePathname();

    useEffect(()=>{ 
        console.log(path)

    },[]
    )

  return (
   
    <div className = 'h-screen p-4 border shadow-sm'>
      <Image src = {'/logo.svg'}
      alt = 'logo'
      width = '180'
      height = '120'
      ></Image>
      <div className = 'mt-5'>
        {menuList.map((menu,index) => (
            <Link href = {menu.path}>
            <h2 className = {`flex gap-2 items-center text-gray-600 font-medium p-5 cursor-pointer rounded-md hover:text-primary hover:bg-red-100'
            ${path==menu.path&&'text-primary bg-red-100'}
            `} >
                <menu.icon/>
                {menu.name}
            </h2>
            </Link>
        ))}
         </div>

         <div className = 'fixed bottom-8 p-5 flex gap-2 items-center'>
            <UserButton/>
            Profile
            </div>    
         
         </div>
  )
}

export default SideNav
