import React from 'react'
import styled from 'styled-components'

const CardContainer  = styled.div`
    width: 100%;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
    border: 1px solid #dee2e6;
    padding: 1rem;
`;

const Card = ({ children }) => {
    return (
        <CardContainer>
            {children}
        </CardContainer>
    )
}

export default Card;
