import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import { FilterSelectionContainer } from 'components/FilterSelection';
import TopBar from 'scenes/Layout/TopBar';
import Sidebar from 'scenes/Layout/Sidebar';

import { getCategoryFilters, getPriceFilters } from 'services/Filters';

const OuterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;
`;

const ContentContainer = styled.div`
    width: 100%;
`;

export default function Layout(props) {
    return (
        <OuterWrapper>
            <StyledLink to="/">
                <Header>Savvy&nbsp;&nbsp;<FontAwesome name="warehouse" />&nbsp;&nbsp;Shop</Header>
            </StyledLink>
            <InnerWrapper>
                <Sidebar>
                    <FilterSelectionContainer
                        icon="folder"
                        title="Categories"
                        type="category"
                        options={getCategoryFilters()}
                    />
                    <FilterSelectionContainer
                        icon="filter"
                        title="Filters"
                        type="price"
                        options={getPriceFilters()}
                    />
                </Sidebar>
                <ContentContainer>
                    <TopBar />
                    {props.children}
                </ContentContainer>
            </InnerWrapper>
        </OuterWrapper>
    );
}
