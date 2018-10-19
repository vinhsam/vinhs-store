import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = styled.div`
    background: #89aeff;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    padding: 2rem;
`;

export default Header;

Header.propTypes = {
    children: PropTypes.any.isRequired,
};
