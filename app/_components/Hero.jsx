'use client'
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

function Hero() {

  const { isSignedIn } = useUser();
  const router = useRouter();

  const handleGetStarted = () => {
    if (isSignedIn) {
      router.push('/dashboard');
    } else {
      router.push('/sign-in');
    }
  };
  return (
    <section className="bg-gray-50 flex items-center flex-col">
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl text-secondary font-extrabold sm:text-5xl">
          Budget Buddy.
          <strong className="font-extrabold text-primary sm:block"> Your Personal Finance Assistant.</strong>
        </h1>
  
        <p className="mt-4 sm:text-xl/relaxed">
        BudgetBuddy is a user-friendly web app designed to help you track your expenses, manage your budget, and achieve your financial goals effortlessly.
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-800 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
            onClick={handleGetStarted}
          >
            Get Started
          </Button>

        </div>
      </div>
    </div>
    <Image src={'/dashboard.PNG'}
alt='dashboard'
width={1000}
height={700}
classname = 'mt-9 rounded-xl border-2'
/>
  </section>
  )
}

export default Hero
