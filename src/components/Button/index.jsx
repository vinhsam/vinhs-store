import styled from 'styled-components';

const Button = styled.button`
    background: orange;
    border: 0;
    border-radius: 3px;
    color: white;
    padding: 5px 10px;
    transition: background 0.25s;

    &:hover {
        background: darkorange;
    }
`;

export default Button;
