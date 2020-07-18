import React from 'react';
import './App.css';
import Headerbalance from './components/HeaderBalance';
import Incomeexpense from './components/IncomeExpense';
import History from './components/History';
import Transaction from './components/Transaction';
import {ExpenseProvider} from './Context';

function App() {
  return (
    <ExpenseProvider>
      <div className="App">
        <Headerbalance/>
        <Incomeexpense/>
        <History/>
        <Transaction/>
      </div>
    </ExpenseProvider>
    
  );
}

export default App;
