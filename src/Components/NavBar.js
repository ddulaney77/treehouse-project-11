import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import SearchForm from './SearchForm';



class NavBar extends Component {
  handleRoute = (query) => {
    this.props.history.push(`/search/${query}`);
  }
  render() {
    return (
      <header>
        <SearchForm onSearch={this.handleRoute} />
        <ul className="main-nav">
          <li><NavLink to="/search/cats">Cats</NavLink></li>
          <li><NavLink to="/search/dogs">Dogs</NavLink></li>
          <li><NavLink to="/search/beaches">Beaches</NavLink></li>
        </ul>

      </header>
    );
  }

};

export default withRouter(NavBar);




