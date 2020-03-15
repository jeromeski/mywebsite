/* global $*/

import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    $('.blast-root').blast({delimiter: 'character', tag: 'span'})
  }

  render() {
    return (
      <div>
        <div className="blast-root">
          <h1>Hello World</h1>
        </div>
      </div>
    );
  }
}

export default App;
