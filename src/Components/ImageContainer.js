import React, { Component } from "react";
import axios from "axios";
import apiKey from "../config";

import PhotoList from "./PhotoList";

class ImageContainer extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }
  componentDidMount() {
    this.performSearch(this.props.match.params.query);
    this.props.history.listen(location => this.performSearch(location.pathname.slice(8)));
  }

  performSearch = (query = "cats") => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=12&sort=relevance&content_type=1&format=json&nojsoncallback=1`)

      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };

  render() {
    return (
      <div className="App">
        <div className="inner">
          <h1 className="main-title">Flickr Photo Search</h1>
        </div>
        <div className="Main-content">
          {this.state.loading ? (<h4> Loading... </h4>) : (<PhotoList data={this.state.photos} />)}
        </div>
      </div>
    );
  }
}

export default ImageContainer;
