import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { withRouter } from 'react-router-dom';

import Button from 'components/Button';

const StyledSearchBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    border-bottom: 1px solid rgba(0, 0, 0, .05);
    margin: 0 1rem;
    padding: 1rem 0;
`;

const Input = styled.input`
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 3px;
    font-size: 1.5rem;
    padding: 0.5rem;
    margin: 0 1rem;
`;

const InputWithRouter = withRouter(Input);

class SearchBar extends Component {
    constructor() {
        super();

        this.setFilter = this.setFilter.bind(this);
    }

    setFilter(event) {
        const query = event.currentTarget.value;
        if (query !== '') {
            this.props.history.push(`/filter/query/${query}`);
        }
        else {
            this.props.history.push(`/items`);
        }
    }

    render() {
        return (
            <StyledSearchBar>
                <InputWithRouter placeholder="Search..." onBlur={this.setFilter} />
                <Button>
                    <FontAwesome name="shopping-basket" />
                    &nbsp;&nbsp;
                    0
                </Button>
            </StyledSearchBar>
        );
    }
}

export default withRouter(SearchBar);
