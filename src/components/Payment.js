import React from 'react';
import styled from '@emotion/styled';

const Payments = ({item, amount, handleClick, index}) => {
    
    let bg = amount.charAt(0) === '-' ? '#f00' : '#0f0';
    
    const Container = styled.div`
       margin-top: 15px;
       display: flex;
    `
    
    const Div = styled.div`
       display: flex;
       border: 1px solid #ddd;
       justify-content: space-between;
       width: 100%;
       background: #fff;
       box-shadow: 0.5px 1.8px 3px #ddd;
    `

    const Border = styled.div`
        height: 3.4rem;
        background: ${bg};
        width: 5px;
    `
    const P1 = styled.p`
        margin-left: 10px;
    `
    const P2 = styled.p`
        margin-right: 10px;
    `
    const Remove = styled.button`
        position: absolute;
        height: 1.2rem;
        padding-bottom: 10px;
        background: #f00;
        color: #fff;
        left: 10.5rem;
        border: 1px solid #f00;
        margin-top: 15px;
        padding-bottom: 4px;
        border-radius: 50%;
        opacity: 0;
        transition :  opacity 0.3s ease;
        &:hover {
            opacity: 1; 
        }
    `
    
    return ( 
        <Container>
            <Div>
                <P1>{item}</P1>
                <P2>{amount}</P2>
                <Remove onClick ={() => handleClick(index)}>x</Remove>
            </Div>
            <Border></Border>
        </Container>
     );
}
 
export default Payments;