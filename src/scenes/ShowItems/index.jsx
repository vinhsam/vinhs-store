import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ItemList from 'components/ItemList';

import { getFilterNameFromId } from 'services/Filters';
import { getItemsToShow } from 'services/Items';
import { setFilter } from 'services/Filters/actions';

function mapStateToProps(state) {
    const title = getFilterNameFromId(state.filterId);
    const items = getItemsToShow(state.items.byId);
    return { title, items };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setFilter }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
