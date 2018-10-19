import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSidebar = styled.div`
    padding: 0 1rem;
    width: 200px;
`;

export default class Sidebar extends Component {
    constructor() {
        super();
    }

    render() {
        return <StyledSidebar>{this.props.children}</StyledSidebar>;
    }
}
