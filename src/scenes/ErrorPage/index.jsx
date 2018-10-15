import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const Error = styled.div`
    background: coral;
    border-radius: 3px;
    color: white;
    padding: 1rem;
`;

export default function ErrorPage(props) {
    return (
        <Error>
            <FontAwesome name="exclamation-circle" />
            &nbsp;&nbsp;
            {props.children}
        </Error>
    );
}
