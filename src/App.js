import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import './App.css';

import store, { history } from 'store';

import Layout from 'scenes/Layout';
import Home from 'scenes/Home';
import ShowItems from 'scenes/ShowItems';
// import FilteredItems from 'scenes/FilteredItems';
import FullItem from 'scenes/FullItem';
import Button from 'components/Button';

const Nav = styled.div`
    padding-bottom: 2rem;

    & > * {
        padding-right: 1rem;
    }
`;

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Layout>
                        <div style={{ padding: '2rem' }}>
                            <Nav>
                                <Link to="/">
                                    <Button>Home</Button>
                                </Link>
                                <Link to="/items">
                                    <Button>Items</Button>
                                </Link>
                            </Nav>

                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/items" component={ShowItems} />
                                <Route exact path="/filter/:type/:filterId" component={ShowItems} />
                                <Route exact path="/item/:id" component={FullItem} />
                            </Switch>
                        </div>
                    </Layout>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
