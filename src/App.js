import './App.css';
import React from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg'
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignInForm from './components/SignInForm/SignInForm';
import Register from './components/Register/Register';

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends React.Component{
  constructor(){
    super();
    this.state = initialState;
  }

loadUser = (data) => {
  this.setState( { user: {
    id: data.id,
    name: data.name,
    email: data.email,
    entries: data.entries,
    joined: data.joined
  }
  })
}



calculateFacePosition = (data) => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
  const image = document.getElementById('inputImage')
  const width = Number(image.width)
  const height = Number(image.height)
  
  return{
    top: height * clarifaiFace.top_row,
    right: width - (width*clarifaiFace.right_col),
    bottom: height - (height*clarifaiFace.bottom_row),
    left: width * clarifaiFace.left_col
  }
}

displayFaceBox = (box) => {
  
  this.setState({box: box})
}

requestAPIData = () => {
  fetch("http://localhost:3000/imageurl", {
      method: 'post',
          headers: { 
              'content-type': 'application/json'
          },
          body: JSON.stringify({
            url: this.state.input
          })
    })
  .then(response => response.json())
  .then( data => {
    if (data){
      fetch("http://localhost:3000/image", {
        method: 'put',
            headers: { 
                'content-type': 'application/json'
            },
            body: JSON.stringify({
              id: this.state.user.id
            })
      })
      .then(response => response.json())
      .then(count => {
        this.setState(Object.assign(this.state.user,{entries: count}))
      })
      .catch(err => console.log("Could not get user's entries"))
      console.log(data.outputs[0].data.regions[0].region_info.bounding_box)
      this.displayFaceBox(this.calculateFacePosition(data))
    }
  })
  .catch(err => "Unable to work with API")
    
}
/*
  async requestAPIData(){
///////////////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, user and app ID, model details, and the URL
    // of the image we want as an input. Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////////////////////////////

    // Your PAT (Personal Access Token) can be found in the portal under Authentification
    const PAT = '3e8671c1f32241b2ab4825737dc063b5';
    // Specify the correct user_id/app_id pairings
    // Since you're making inferences outside your app's scope
    const USER_ID = 'clarifai';       
    const APP_ID = 'main';
    // Change these to whatever model and image URL you want to use
    const MODEL_ID = 'face-detection';
    const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';    
    const IMAGE_URL = this.state.input;

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": IMAGE_URL
                    }
                }
            }
        ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };

    // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the laimageUrl version_id

    const response = await fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
    const data = await response.json()
    if (data){
      fetch("http://localhost:3000/image", {
        method: 'put',
            headers: { 
                'content-type': 'application/json'
            },
            body: JSON.stringify({
              id: this.state.user.id
            })
      })
      .then(response => response.json())
      .then(count => {
        this.setState(Object.assign(this.state.user,{entries: count}))
      })
      .catch(err => console.log("Could not get user's entries"))
      this.displayFaceBox(this.calculateFacePosition(data))
    }
  }
  */

  onInputChange = (event) => {
    this.setState({ input: event.target.value}) 
    
  }

  
  onSubmit = () => {
    this.setState({imageUrl: this.state.input})
    this.requestAPIData()
  }

  onRouteChange = (route) => {
    if (route === 'signout'){
      this.setState(initialState);
    } else if (route === 'home'){
      this.setState({isSignedIn: true})
    } 
    this.setState({ route: route})

  }

  render() {
     const {isSignedIn, imageUrl, route, box} = this.state;
     
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
        { 
        route === 'home'
         ? (<div>
            <Rank user={this.state.user.name} entries={this.state.user.entries}/>
            <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
            <FaceRecognition faceBox={box} imageInput={imageUrl}/>      
          </div>) 
         : (
           
          route === 'signin'
           ? <SignInForm onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
           : <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
         )
         }
        <ParticlesBg type="cobweb" bg={true} />
      </div>
  
  
    ); 
  }
}

export default App;
