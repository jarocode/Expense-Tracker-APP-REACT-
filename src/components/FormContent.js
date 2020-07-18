import React from 'react';
import styled from '@emotion/styled';

const P1 = styled.div`
       margin-bottom: 5px;
       margin-top: 13px;
    `
    
    const P2 = styled.div`
       margin-bottom: 0;
       margin-top: 14px;
    `
    
    const P3 = styled.div`
       margin-top: 0;
       font-size: 0.83em;
    `
    const Input = styled.input`
       margin-top: 13px;
       width: 100%;
       height: 3rem;
       padding-left: 5px;
    `
    const Button = styled.button`
       margin-top: 15px;
       width: 102%;
       color: #fff;
       background: #b0f;
       height: 2.5rem;
       font-size: 0.8em;
       font-weight: bold;
       margin-bottom: 30px;
       border: 1px solid #b0f;
    `
const Formcontent = ({handleAmount, handleItem, handleSubmit, item, amount}) => {
    
    return ( 
        <div>
        <form onSubmit={handleSubmit}>
            <label>
                <P1>Text</P1>
                <Input 
                    type="text" 
                    placeholder="enter text..." 
                    value={item} 
                    onChange={handleItem}
                />
            </label>
            
            <label>
                <P2>Amount</P2>
                <P3>(negative-expense, positive-income)</P3>
                <Input 
                    type="number" 
                    placeholder="amount..." 
                    value={amount} 
                    onChange={handleAmount}
                    />
            </label>
            <Button>Add transaction</Button>
        </form>
    </div>
     );
}
 
export default Formcontent;