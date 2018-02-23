import { Component } from 'react';
import { graphql } from 'react-apollo';

class Wrapper extends Component {
  render() {
    const { data, mutate, children } = this.props;
    return children({ data, mutate });
  }
}

const ApolloWrapper = ({ query }) => graphql(query)(Wrapper);

export default ApolloWrapper;
