import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import Button from 'components/Button';
import { FilterOptionContainer } from './components/FilterOption';

const StyledButton = styled(Button)`
    margin-top: 1rem;
    width: 100%;
`;

function FilterSelection({ title, icon, options, history, type, setFilter, ...props }) {
    const filterOptions = options.map(({ id, name }) => {
        return (
            <FilterOptionContainer key={id} id={id} type={type} history={history}>
                {name}
            </FilterOptionContainer>
        );
    });

    return (
        <div>
            <StyledButton>
                <FontAwesome name={icon} />
                &nbsp;&nbsp;
                {title}
            </StyledButton>
            {filterOptions}
        </div>
    );
}

export default FilterSelection;

FilterSelection.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.any.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
};

