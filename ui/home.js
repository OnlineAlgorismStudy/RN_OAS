import React, {Component, useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';

class Home extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Appbar style={{backgroundColor:'#517fa4'}}>
          <Appbar.Content title={'온라인 알고리즘 스터디'} />
        </Appbar>
        <Text style={{flex: 1}}>{'Home'}</Text>
      </View>
    );
  }
}

export default Home;
