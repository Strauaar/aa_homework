import React from 'react';
import { Provider } from 'react-redux';

import GiphysSearchContainer from './giphys_search_container';

class Root extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Provider store={this.props.thastore}>
        <GiphysSearchContainer />
      </Provider>
    )
  }
}

export default Root;
