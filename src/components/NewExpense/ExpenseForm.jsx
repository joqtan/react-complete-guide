import React from 'react'
import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  //   const [enteredTitle, setEnteredTitle] = useState('')
  //   const [enteredAmount, setEnteredAmount] = useState(0)
  //   const [enteredDate, setEnteredDate] = useState('')

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  })

  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: e.target.value,
      }
    })
  }
  const amountChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: e.target.value,
      }
    })
  }
  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: e.target.value,
      }
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    }
    props.onSaveExpenseData(expenseData)
    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    })
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={userInput.enteredTitle}
            type="text"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={userInput.enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={userInput.enteredDate}
            type="date"
            min="2021-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
