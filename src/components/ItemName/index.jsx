import styled from 'styled-components';
import PropTypes from 'prop-types';

const ItemName = styled.div`
    font-weight: bold;
    text-decoration: none !important;
`;

export default ItemName;

ItemName.propTypes = {
    children: PropTypes.any.isRequired,
};
