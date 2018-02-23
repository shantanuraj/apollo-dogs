import React, { Component } from 'react';
import { gql } from 'apollo-boost';

import ApolloWrapper from './ApolloWrapper';
import Dogs from './Dogs';

const GET_DOGS = gql`{
  dogs {
    id
    breed
    subbreeds
    displayImage
  }
}`;

const GetDogs = ApolloWrapper({query: GET_DOGS});

class App extends Component {
  render() {
    return (
      <GetDogs>
        { ({ data }) => <Dogs {...data} /> }
      </GetDogs>
    );
  }
}

export default App;
