import React, {useContext} from 'react';
import styled from '@emotion/styled';
import {ExpenseContext} from '../Context';
  

const Headerbalance = () => {
    const {inc, exsp, bal} = useContext(ExpenseContext);   
    
    const [income, setIncome] = inc;
    const[expense, setExpense] = exsp;
    const [balance, setBalance] = bal;

    setBalance(
      (parseFloat(income.replace('$', '')) 
      + parseFloat(expense.replace('$', ''))).toString()
      );
    
    
    
    const Balance = styled.h1`
      margin-top: 0;
    `
    const P = styled.p`
       margin-bottom: 0;
       margin-top: 2.5rem;
    `
    
    return ( 
        <div>
            <h3>Expense Tracker</h3>
            <P>Your Balance</P>
            <Balance>
              {
            balance.charAt(0) === '-' ? 
            `-${balance.replace('-', '$')}` : 
            `$${balance}`
            }
            </Balance>
        </div>
     );
}
 
export default Headerbalance;