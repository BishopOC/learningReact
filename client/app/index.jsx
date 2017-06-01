import React from 'react';
import {render} from 'react-dom';
import AwesomeComponet from './AwesomeComponent.jsx';


class App extends React.Component {
  render () {
    return (
      <div>
      <p> Hello React React!</p>
      <AwesomeComponet />
      </div>
    );
  }
}


render(<App/>, document.getElementById('app'));
