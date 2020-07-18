import React, {useContext} from 'react';
import styled from '@emotion/styled';
import Payments from './Payment';
import {ExpenseContext} from '../Context';

const History = () => {
    
    const {his} = useContext(ExpenseContext);
    const [history, setHistory] = his;
    const Container = styled.div`
       margin-top: 2.7rem;
       margin-right: 30%;
    `
    const Head = styled.div`
       border-bottom: 2px solid #ddd;
    `
    const P = styled.div`
       margin-bottom: 10px;
    `
    const handleClick = index => {
       
       const newPayment = [...history];
       newPayment.splice(index, 1);
       setHistory(newPayment);
    }
    
    
    return ( 
        <Container>
            <Head>
                <P>History</P>
            </Head>
            {history.map((item, index) => (
               <Payments 
                    item={item.item}
                    key={index}
                    index={index}
                    amount={item.amount}
                    handleClick={handleClick}
               />
            )
            )}
        </Container>
     );
}
 
export default History;