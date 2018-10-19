import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { compose, bindActionCreators } from 'redux';

import FilterSelection from 'components/FilterSelection';

// import { setFilter } from 'services/Filters/actions';

class FilterSelectionContainer extends Component {
    constructor() {
        super();
    }

    render() {
        return <FilterSelection {...this.props} />;
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ setFilter }, dispatch);
// }

// export default compose(
//     withRouter,
//     connect(null, mapDispatchToProps)
// )(FilterSelectionContainer);

export default FilterSelectionContainer;
