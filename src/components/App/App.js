import React, { Component } from 'react';
import './App.css';
import { getUrls, postData } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    getUrls()
      .then(data => this.setState({ urls: data.urls }))
      .catch((error) => console.log(error))
  }

  postUrl = (url, title ) => {
    postData(url, title)
      .then(response => this.setState({urls: [...this.state.urls, response]}))
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm postUrl={this.postUrl} />
        </header>
        <UrlContainer urls={this.state.urls} />
      </main>
    );
  }
}

export default App;
