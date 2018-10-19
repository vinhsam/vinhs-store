import styled from 'styled-components';

const FilterOption = styled.div`
    border-radius: 3px;
    color: #444;
    margin: 0.25rem 0;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
    transition: background 0.25s;

    &:hover {
        background: white;
    }
`;

export default FilterOption;
