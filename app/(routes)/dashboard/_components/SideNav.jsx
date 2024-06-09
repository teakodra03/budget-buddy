import { useState } from 'react';
import { Menu, MenuIcon } from 'lucide-react'; // Importing the Menu icon for the toggle button
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

function SideNav() {
    const menuList = [
        {
            id:1,
            name:'Dashboard',
            icon:'LayoutGrid', // Using string instead of component for icon
            path:'/dashboard'
        },
        {
            id:2, 
            name:'Budgets',
            icon:'PiggyBankIcon',
            path:'/dashboard/budgets'
        },
        {
            id:3,
            name:'Expenses',
            icon:'ReceiptIcon',
            path:'/dashboard/expenses'
        },
    ];

    const path = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="relative">
            {/* Sidebar Toggle Button */}
            <Button onClick={toggleSidebar} className="block md:hidden absolute top-4 left-4 z-50">
                <MenuIcon className="w-6 h-6" />
            </Button>

            {/* Sidebar */}
            <div className={`h-screen md:w-64 bg-gray-200 fixed top-0 left-0 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-4">
                    <Image src="/logo.svg" alt="logo" width="180" height="120" />
                </div>
                <div>
                    {menuList.map((menu, index) => (
                        <Link href={menu.path} key={index}>
                            <h2 className={`flex gap-2 items-center text-gray-600 font-medium p-5 cursor-pointer rounded-md hover:text-primary hover:bg-red-100 ${path == menu.path && 'text-primary bg-red-100'}`}>
                                {/* Render icon dynamically */}
                                {menu.icon && React.createElement(menu.icon)}
                                {menu.name}
                            </h2>
                        </Link>
                    ))}
                </div>
                <div className="absolute bottom-8 left-4">
                    <UserButton />
                    <span className="ml-2">Profile</span>
                </div>
            </div>
        </div>
    );
}

export default SideNav;
