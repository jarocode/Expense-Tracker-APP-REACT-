import React, {useState, useContext} from 'react';
import styled from '@emotion/styled';
import {ExpenseContext} from '../Context';

const Incomeexpense = () => {
    
    const {his, inc, exsp} = useContext(ExpenseContext);
    const [history, setHistory] = his;
    const [incomeValue, setIncomevalue] = inc;
    const [expenseValue, setExpenseValue] = exsp;
    
    
    const spent = ( history.filter(
        his => his.amount.charAt(0) === '-'
        ).map(
            his => parseFloat(his.amount.replace('$', ''))
            ).reduce((total, his) => (total + his), 0)).toString()

    setExpenseValue('-$'+ spent.replace('-', ''));
    console.log(typeof(spent));
    

    
    
    const gained = ( history.filter(
        his => his.amount.charAt(0) === '+'
        ).map(
            his => parseFloat(his.amount.replace('$', ''))
            ).reduce((total, his) => (total + his), 0)).toString()

    
    setIncomevalue(`$${gained}`);
    console.log(typeof(gained))
    
    
    const Container = styled.div`
        margin-top: 0.3rem;
        border: 1px solid #ddd;
        display: flex;
        justify-content: space-around;
        margin-right: 30%;
        box-shadow: 0.5px 1.8px 3px #ddd;
        background: #fff;
`
    
    const P1 =  styled.p`
        margin-bottom: 0.3rem;
    `  
    const P2 =  styled.p`
        margin-top: 0.3rem;
        color: #0f0;
        font-size: 1.2em;
    `  
    const P3 =  styled.p`
        margin-top: 0.3rem;
        color: #f00;
        font-size: 1.2em;
    ` 
    
    const Border = styled.div`
        width: 1px;
        height: 2.5rem;
        background: #ddd;
        margin: 1.5rem;
    `

return ( 
        <Container>
            <div className='income'>
                <P1>INCOME</P1>
                <P2>{incomeValue}</P2>
            </div>
            
            <Border></Border>
            
            <div className='expense'>
                <P1>EXPENSE</P1>
                <P3>{expenseValue}</P3>
            </div>
        </Container>
     );
}
 
export default Incomeexpense;