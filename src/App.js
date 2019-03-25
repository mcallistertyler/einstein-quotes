import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import { images, generateQuote, logo, drawQuote } from './helpers.js';
import '../node_modules/react-image-gallery/styles/css/image-gallery.css';
import './App.css';
import { FormControl, InputGroup, Alert, Button, Modal } from 'react-bootstrap';
import LoadingOverlay from 'react-loading-overlay';
const robodog = require('@uppy/robodog');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: '',
      imageIndex: 0,
      isHidden: true,
      modalIsOpen: false,
      returnedImage: '',
      error: false,
      loading: false
    };
    this.uploadQuote = this.uploadQuote.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleOriginalQuote = this.handleOriginalQuote.bind(this);
    this.prepareQuote = this.prepareQuote.bind(this);
    this.handleHidden = this.handleHidden.bind(this);
  }

  async uploadQuote(blob) {
    let image_url = window.location.protocol + '//' + window.location.hostname + images[this.state.imageIndex].original;
    this.setState({loading: true});
    const resultPromise = robodog.upload([blob],{
      params: {
        auth: { key: process.env.REACT_APP_AUTH_KEY },
        "steps": {
          ":original": {
            "robot": "/upload/handle"
         },
          "imported": {
            "robot": "/http/import",
            "url": image_url
          },
          "quote": {
            "robot": "/image/resize",
            "imagemagick_stack": "v1.0.0",
            "watermark_size": "60%",
            "watermark_position": "bottom-left",
            "result": false,
            "watermark_x_offset": 10,
            "watermark_y_offset": -15,
            "use": {
              "steps": [
                { "name": "imported", "as": "base" },
                { "name": ":original", "as": "watermark" }
              ]
            }
          },
          "watermarked": {
            "robot": "/image/resize",
            "use": [
              "quote"
            ],
            "result": true,
            "imagemagick_stack": "v1.0.0",
            "height": 600,
            "width": 600,
            "resize_strategy": "fit",
            "text": [
              {
                "text": "by fake einstein quote generator\nfrom transloadit.com/blog/einstein",
                "size": 12,
                "font": "Ubuntu",
                "color": "white",
                "valign": "bottom",
                "align": "right",
                "x_offset": 5,
                "y_offset": -15
              }
            ]
        },
        "export": {
          "use": [
            "watermarked"
          ],
          "robot": "/google/store",
          "credentials": "einstein_firebase",
          "path": "subfolder/${file.id}.${file.ext}"
        }
      }
      },
    waitForEncoding: true
    })
    resultPromise.then((bundle) =>{
      if(bundle.failed.length === 0){
        this.setState({
          modalIsOpen: true,
          loading: false,
          message: '',
          returnedImage: bundle.results[0].ssl_url.replace('/gs:/','/')
        });
      } else {
        this.setState({
          loading: false,
          modalIsOpen: false,
          message: '',
          error: true
        });
      }
    }) 
  }
  
  async prepareQuote(quote){
    let ctx = this.refs.canvas.getContext('2d');
    ctx.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
    ctx = drawQuote(ctx, quote);
    this.refs.canvas.toBlob((blob) =>{
      this.uploadQuote(blob);
    });
  }
  
  handleSelect(e){
    e.preventDefault();
    let key = e.target.name;
    let value = e.target.value;
    this.setState({[key]: value});
  }

  handleHidden(){
    this.setState({isHidden: !this.state.isHidden});
  }

  handleOriginalQuote(){
    this.prepareQuote(this.state.message)
    this.setState({isHidden: true});
  }

  handleImage(e){
    this.setState({imageIndex: e});
  }

  handleModal(){
    this.setState({modalIsOpen:false});
  }

  handleInput(e){
    this.setState({message: e.target.value})
  }

  render() {
    return (
      <LoadingOverlay
      active={this.state.loading}
      spinner
      text="Generating quote..."
      >
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="header-title">
              "Definitely the best webpage ever made." - Albert Einstein
            </div>
          </header>
          <div className="App-page">
            Generate your own Einstein quote! (Quotes possibly not said by Einstein)
          </div>
          <div className="App-gallery">
          <Modal id="modal-size" centered={true} show={this.state.modalIsOpen} onHide={this.handleModal}>
            <Modal.Body>
              <img 
                src={this.state.returnedImage}
                alt="generated-einstein"
                />
            </Modal.Body>
          </Modal>
          <ImageGallery disableArrowKeys={true} onSlide={(e)=>this.handleImage(e)} items={images} showThumbnails={false} showFullscreenButton={false} showPlayButton={false}/>
          </div>
          <div className="App-form">
          <Button disabled={this.state.loading} onClick={() => this.prepareQuote(generateQuote())} variant="outline-primary" >Generate a random quote!</Button>
          <div className="divider"/>
          <Button disabled={this.state.loading} onClick={() => this.handleHidden()} variant="outline-primary" >Make your own quote!</Button>
          {!this.state.isHidden &&
          <div className="App-userinput">
          <InputGroup className="mb-3" onInput={(e)=>this.handleInput(e)}>
              <FormControl
                placeholder="Your quote"
                aria-label="Your quote"
                aria-describedby="basic-addon1"
                maxLength="50"
                disabled={this.state.loading}
              />
              <InputGroup.Append>
                <Button disabled={this.state.loading} onClick={()=>this.handleOriginalQuote()} variant="outline-primary">Submit</Button>
              </InputGroup.Append>
          </InputGroup>
          </div>
          }
          </div>
          <Alert variant="danger" show={this.state.error}>
            <Alert.Heading>It's not a bug...it's a feature</Alert.Heading>
            <p>Seems like an unexpected error occurred, contact the owner (https://github.com/mcallistertyler95/) of this site and let them know about it!</p>
          </Alert>
          <canvas id="canvas" ref="canvas" width={500} height={200}/>
          <footer className="App-footer">
            Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a>
          </footer>
        </div>
      </LoadingOverlay>
    )
  }
}

export default App;