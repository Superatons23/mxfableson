import React from 'react';
import './css/App.css';
import Navbar from "./components/Navbar";

import About1 from "./components/About1";
import About2 from "./components/About2";

import    Jumbotron  from './components/Jumbotron'
import  Jumbotron2  from './components/Jumbotron2'
import  Jumbotron3  from './components/Jumbotron3'
import JumbotronFin  from './components/JumbotronFin'

import ReactHintFactory from 'react-hint'
import 'react-hint/css/index.css';
import Scenathon from './pages/Scenathon';


import { ACTIONS, EVENTS, STATUS } from 'react-joyride';



const ReactHint = ReactHintFactory(React)

export class App extends React.Component {

  constructor() {
    super();
    // this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      hidden: false,
      run: false,
      steps: [
        {
          target: '.About',
          content: 'Esto es el Joyride'
        },
        {
          target: '.Nav',
          content: 'Esto es el Joyride parte 2'
        }
      ],
      stepIndex: 0,
    }
    this.references = {
      fable: React.createRef(),
      scenathon2020: React.createRef(),
      scenathon: React.createRef(),
      home: React.createRef()
    }
  };


  handleJoyrideCallback = data => {
    const { action, index, status, type } = data;

    if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
      // Update state to advance the tour
      this.setState({ stepIndex: index + (action === ACTIONS.PREV ? -1 : 1) });
    }
    else if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      // Need to set our running state to false, so we can restart if we click start again.
      this.setState({ run: false });
    }

    console.groupCollapsed(type);
    console.log(data); //eslint-disable-line no-console
    console.groupEnd();
  };


  render() {

    return (
      <React.Fragment>
        {/*<div>
          <Tour/>
        </div>*/}

        <div className="Nav">
          <Navbar references={this.references} />
        </div>

        <div className="imagen">
          <Jumbotron jumboReference={this.references.home} />
        </div>

        <div>
          <About1 aboutRef={this.references.fable} />
        </div>
        <div id="Jumbotron_2" data-rh="" data-rh-at="top">
          <Jumbotron2/>
        </div>



        <Scenathon fableRef={this.references.scenathon2020} />
        <div>
          <About2 aboutReference={this.references.scenathon} />
        </div>
        <div>
          <Jumbotron3 />
        </div>




        <div className="app">

          <ReactHint autoPosition events delay={{ show: 100, hide: 1000 }} />
          <ReactHint persist
            attribute="data-custom"
            className="custom-hint"
            events={{ click: true }}
            onRenderContent={this.onRenderContent}
            ref={(ref) => this.instance = ref} />
        </div>

        <div>
        </div>






        <div id="Jumbotron_fin" data-rh="Copyright" data-rh-at="top" id="final">
          <JumbotronFin/>
        </div>




      </React.Fragment>
    )
  }
};
export default App;

