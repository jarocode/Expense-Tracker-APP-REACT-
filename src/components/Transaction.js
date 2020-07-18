import React from 'react';
import styled from '@emotion/styled';
import Form from './Form';

const Transaction = () => {
    
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
    
    return ( 
        <Container>
            <Head>
                <P>Add new transaction</P>
            </Head>
            <Form/>
        </Container>
     );
}
 
export default Transaction;