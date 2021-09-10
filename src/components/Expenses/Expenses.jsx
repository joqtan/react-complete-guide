import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import { useState } from 'react'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const expenses = props.expenses

  const filteredExpensesHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filteredExpensesHandler}
      />
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </Card>
  )
}
export default Expenses
