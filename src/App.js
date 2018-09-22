import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Widget from './container/Widget'

const URL = "https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init"

class App extends Component {

  state = {
    images : []
  }

  componentDidMount(){
    this.fetchImages()
  }

  fetchImages = () => {
    fetch(URL).then(resp => resp.json()).then(resp => {
      this.setState({
        images: resp.list
      })
      }
    )
  }

  render() {
    
    return (
      <div className="App">
        <Widget images={this.state.images}/>
      </div>
    );
  }
}

export default App;
