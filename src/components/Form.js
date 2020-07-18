import React, {useState, useContext} from 'react';
import {ExpenseContext} from '../Context';
import Formcontent from './FormContent';

const Form = () => {
    
    const {his, amnt, itm} = useContext(ExpenseContext);
    const [history, setHistory] = his;
    const [amount, setAmount] = amnt;
    const [item, setItem] = itm;
    
    const handleAmount = (e) => {
        // if(isNaN(e.target.value)) {
        //     return ;
        // } 
        setAmount(e.target.value);
    }

    const handleItem = (e) => {
        setItem(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        setHistory(prevHis =>(
           [...prevHis, {item:item, 
            amount:amount.toString().charAt(0) === '-' ?  
            `-${amount.replace('-', '$')}` : `+$${amount}`}]
        ));
         setAmount('');
         setItem('');
    }
    
return ( 
        <>
          <Formcontent 
            handleAmount={handleAmount} 
            handleItem={handleItem}
            handleSubmit={handleSubmit}
            item={item}
            amount={amount}
          />
        </>
     );
}
 
export default Form;