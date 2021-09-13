import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false)

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random() }
    props.onAddExpense(expenseData)
    setShowForm(false)
  }

  const startExpenseHandler = () => {
    setShowForm(true)
  }
  const stopExpenseHandler = () => {
    setShowForm(false)
  }
  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          onCancel={stopExpenseHandler}
        />
      ) : (
        <button onClick={startExpenseHandler}>New Expense</button>
      )}
    </div>
  )
}

export default NewExpense
