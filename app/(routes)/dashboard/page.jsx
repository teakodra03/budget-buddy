'use client'
import { UserButton, useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import CardInfo from './_components/CardInfo';
import { db } from '@/utils/dbConfig';
import { desc, eq, getTableColumns, sql } from 'drizzle-orm';
import { Budgets, Expenses } from '@/utils/schema';
import BarChartDashboard from './_components/BarChartDashboard';
import BudgetItem from './budgets/_components/BudgetItem';
import ExpensesListTable from './expenses/_components/ExpensesListTable';

function Dashboard() {


  const [budgetList, setBudgetList] = useState([]);
  const { user } = useUser();
  const [expensesList,setexpensesList]=useState([]);


  useEffect(() =>{
    user&&getBudgetList(); /** only executed when we have info about the user */



  },[user])


  /** joining the two tables */
  const getBudgetList=async()=> {

    const result=await db.select({
      ...getTableColumns(Budgets),


      totalSpend: sql`SUM(CAST(${Expenses.amount} AS numeric))`.mapWith(Number),
      totalItem: sql `COUNT(${Expenses.id})`.mapWith(Number)
    }).from(Budgets)
    .leftJoin(Expenses,eq(Budgets.id,Expenses.budgetId))
    .where(eq(Budgets.createdBy,user?.primaryEmailAddress?.emailAddress))
    .groupBy(Budgets.id)
    .orderBy(desc(Budgets.id))

    setBudgetList(result)
    ;
    getAllExpenses();
  }

  const getAllExpenses=async()=> {
    const result = await db.select({
      id:Expenses.id,
      name:Expenses.name,
      amount:Expenses.amount,
      createdAt:Expenses.createdAt,

    }).from(Budgets)
    .rightJoin(Expenses,eq(Budgets.id,Expenses.budgetId))
    .where(eq(Budgets.createdBy,user?.primaryEmailAddress.emailAddress))
    .orderBy(desc(Expenses.id))

    setexpensesList(result);

    console.log(result);

  }

  return (
    <div className='p-8'>
      <h2 className='font-bold text-3xl'>Hello, {user?.fullName}! </h2>
      <p className='text-gray-500 mt-1'> Here's a summary of your finances! </p>

      <CardInfo budgetList={budgetList}/>

      <div className='grid grid-cols-1 md:grid-cols-3 mt-6 gap-5'>
        <div className='md:col-span-2'>
          
          <BarChartDashboard 
          budgetList = {budgetList}
          />

          <ExpensesListTable
          expensesList={expensesList}
          refreshData={getBudgetList()}/>

        </div>
        <div className='grid gap-4'>
          <h2 className='font-bold text-lg'> Latest Budgets </h2>
            {budgetList.map((budget,index)=>
            <BudgetItem budget={budget} key={index}/>

            )}

        </div>


      </div>
    </div>
  )
}

export default Dashboard


