import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Home from 'scenes/Home';
import AllItems from 'scenes/AllItems';
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
      <Router>
        <div style={{ padding: '2rem' }}>
          <Nav>
            <Link to="/">
              <Button>Home</Button>
            </Link>
            <Link to="/items">
              <Button>Items</Button>
            </Link>
          </Nav>

          <Route exact path="/" component={Home} />
          <Route path="/items" component={AllItems} />
          <Route path="/item/:id" component={FullItem} />
        </div>
      </Router>
    );
  }
}

export default App;
