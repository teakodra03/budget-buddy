import React from 'react'
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function BarChartDashboard({budgetList}) {
  return (
    
    <div className='border rounded-lg p-5'>
      <h2 className='font-bold text-lg mt-1'>Activity</h2>
      <ResponsiveContainer width={'80%'} height={300}> 
      <BarChart 
      data={budgetList}
      margin={{top:6, right:5,
        left:5,
        bottom:5,
      }}>

        <XAxis dataKey='name'/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Bar dataKey='totalSpend' stackId='a' fill='#FF535F'/>
        <Bar dataKey='amount' stackId='a' fill='#FFBDC1'/>
      </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChartDashboard
