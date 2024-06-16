import Link from 'next/link'
import React from 'react'

function BudgetItem({budget}) {

  const CalculateProgress=()=>{
   // (spend/total)*100
    const perc = (budget.totalSpend/budget.amount)*100;
    return perc.toFixed(2);
  }

  return (
    
    <Link href={'/dashboard/expenses/'+budget?.id}>
      <div className = "p-5 border rounded-md hover:shadow-md cursor-pointer h-[160px]">
      
      <div className= "flex gap-2 items-center justify-between">
       <div className = "flex gap-2 items-center">
        <h2 className = "text-2xl p-3 px-4 bg-slate-100 rounded-full"> {budget?.icon}
        </h2>
        <div>        <h2 className = 'font-medium'> {budget?.name} </h2>
          <h2 className = 'font-medium text-sm text-slate-600'> {budget?.totalItem} Items </h2>
          </div>  
        </div>
        
        <h2 className = " font-semibold text-primary text-lg">ALL{budget?.amount}</h2>
        </div>

        <div className = "mt-5">

          <div className = "flex items-center justify-between">

            <h2 className = "text-xs text-slate-400 mb-2">ALL{budget?.totalSpend?budget.totalSpend:0} Spent</h2>
            <h2 className = "text-xs text-slate-400">ALL{budget?.amount-budget?.totalSpend} Remaining</h2>
          
          </div>


          <div className = "w-full bg-slate-300 h-2 rounded-full"> 
          <div className = " bg-secondary h-2 rounded-full"
          style={{
            width:`${CalculateProgress()}%`
          }}>

          </div>


          </div>
        </div>
        </div>
    </Link>
    
  )
}

export default BudgetItem