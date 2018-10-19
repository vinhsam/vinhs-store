import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FilterOption from './FilterOption';

class FilterOptionContainer extends Component {
    constructor() {
        super();
    }

    render() {
        const type = this.props.type;
        const id = this.props.id;
        const onClick = () => {
            this.props.history.push(`/filter/${type}/${id}`);
            // setFilter(type, id);
        };

        return <FilterOption onClick={onClick} { ...this.props } />;
    }
}

export default withRouter(FilterOptionContainer);
