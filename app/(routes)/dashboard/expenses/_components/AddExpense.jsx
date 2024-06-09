import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { db } from '@/utils/dbConfig';
import { Budgets, Expenses } from '@/utils/schema';
import { Loader } from 'lucide-react';
import moment from 'moment';
import React, { useState } from 'react'
import { toast } from 'sonner';

function AddExpense({budgetId,user,refreshData}) {

    const [name,setName]=useState();
    const [amount,setAmount] = useState();
    const [loading,setLoading]= useState(false);

/**add new expense */
    const addNewExpense=async()=>{
        setLoading(true);
        const result = await db.insert(Expenses).values({
            name:name,
            amount:amount,
            budgetId:budgetId,
            createdAt:moment().format('DD/MM/yyyy')

        }).returning({insertedId:Budgets.id});


        setAmount('');
        setName('');

        console.log(result);
        if(result){
            setLoading(false);
            refreshData()
            toast('Expense Added!')
        }
        setLoading(false);

    }

  return (
    <div className = "border p-5 rounded-lg">
        <h2 className = "font-bold text-lg"> Add New Expense</h2>
            <div className = 'mt-2'>
                <h2 className = 'text-black font-medium my-1'> Expense Name </h2>
                <Input placeholder = "Groceries"
                value={name}
                onChange = {(e) => setName(e.target.value)}/>
                </div>
                 <div className = 'mt-2'>
                <h2 className = 'text-black font-medium my-1'> Amount </h2>
                <Input placeholder = "40"
                value={amount}
                onChange = {(e) => setAmount(e.target.value)}/>

    </div>
    <Button disabled={!(name&&amount)||loading} 
    onClick = {()=>addNewExpense()}
    className = 'mt-3 w-full'>
    {loading? 
        <Loader className='animate:spin'/>:"Add Expense"} Add Expense </Button>
   


</div>

  )
}

export default AddExpense
