import React, { Component } from 'react';

export default class Search extends Component {

  state = {
    query: ''
  }

  // Listens to the search input field for when the user enters query
  onSearchChange = e => {
    this.setState({ query: e.target.value });
  }


  handleSubmit = e => {
    e.preventDefault();
    if (this.query.value === '') {
      return;
    } else {
      this.props.onSearch(this.state.query);
      e.currentTarget.reset();
    }
  }

  render() {
    return (
      <div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <label className="is-hidden" htmlFor="search" > Search </label>
          <input type="search"
            className="photo-search"
            onChange={this.onSearchChange}
            name="search"
            ref={input => this.query = input}
            placeholder="Search..."
            autoComplete='off' />
          <button type="submit" id="submit" className="search-button"><i className="fas fa-search fa-2x"></i></button>
        </form>
      </div>
    );
  }
}
