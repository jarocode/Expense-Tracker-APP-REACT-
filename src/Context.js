import React, {useState, createContext} from 'react';

export const ExpenseContext = createContext();

export const ExpenseProvider = (props) => {

    const [hisValue, setHisvalue] = useState([]);
    
    const [income, setIncome] = useState('');
    const [expense, setExpense] = useState('');
    const [balance, setBalance] = useState('');
    const [amount, setAmount] = useState('');
    const [item, setItem] = useState('');
    
    return (
        <ExpenseContext.Provider value={{
            his : [hisValue, setHisvalue],
            inc : [income, setIncome],
            exsp : [expense, setExpense],
            bal : [balance, setBalance],
            amnt :[amount, setAmount],
            itm: [item, setItem]
            }}>
            {props.children}
        </ExpenseContext.Provider>
    );

}

