import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class Bananas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: {
        uri:
          'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
      },
    };
  }

  render() {
    const { title } = this.props;
    const { pic } = this.state;
    return (
      <View>
        <Image source={pic} style={{ width: 193, height: 110 }} />
        <Text>{title}</Text>
      </View>
    );
  }
}

Bananas.propTypes = {
  title: PropTypes.string,
};
Bananas.defaultProps = {
  title: '',
};
