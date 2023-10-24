import './App.css';
import React from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      input: ''
    }
  }
  
  render() {
    return (
      <div className="App">
        <Navigation />
        <Rank />
        <ImageLinkForm />
        {
          // <FaceRecognition />
  
        }
        <ParticlesBg type="cobweb" bg={true} />
      </div>
  
  
    ); 
  }
}

export default App;
