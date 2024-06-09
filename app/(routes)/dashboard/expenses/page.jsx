'use client';
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/dbConfig';
import { Budgets, Expenses } from '@/utils/schema';
import { desc, eq } from 'drizzle-orm';
import ExpensesListTable from './_components/ExpensesListTable';

function ExpensesPage() {

    const { user } = useUser();
    const [expensesList, setExpensesList] = useState([]);

    useEffect(() => {
        if (user) {
            getAllExpenses();
        }
    }, [user]);

    const getAllExpenses = async () => {
        try {
            const result = await db.select({
                id: Expenses.id,
                name: Expenses.name,
                amount: Expenses.amount,
                createdAt: Expenses.createdAt,
            }).from(Budgets)
                .rightJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
                .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
                .orderBy(desc(Expenses.id));

            setExpensesList(result);
        } catch (error) {
            console.error('Failed to fetch expenses:', error);
        }
    }


    
  return (
    <div>

<div className="p-10">
            <ExpensesListTable expensesList={expensesList} refreshData={getAllExpenses} />
        </div>

    </div>
  )
}

export default ExpensesPage
