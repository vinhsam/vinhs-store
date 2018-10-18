import styled from 'styled-components';
import PropTypes from 'prop-types';

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


Button.propTypes = {
    children: PropTypes.any.isRequired,
};
