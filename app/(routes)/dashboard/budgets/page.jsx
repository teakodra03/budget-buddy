import React from 'react'
import { useUser } from '@clerk/nextjs'
import BudgetList from './_components/BudgetList'

function Budget() {
  return (
    <div className = 'p-10'>
    <h2 className = 'font-bold text-3xl'>My Budget Plans</h2>

    <BudgetList/>
    </div>
  )
}

export default Budget