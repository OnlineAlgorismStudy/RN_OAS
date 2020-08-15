/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useState, useEffect} from 'react';
import {
  Appbar,
  TextInput,
  Button,
  Avatar,
  BottomNavigation,
} from 'react-native-paper';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import {ListItem, Icon} from 'react-native-elements';

const reference = database().ref();


class App extends Component {
  state = {
    userList: [],
    isLoaded: false,
  };

  async fetchUsers() {
    const list = [];
    const users = await firestore().collection('users').get();
    users.forEach((doc) => {
      console.log(doc.data());
      const {github, name, img} = doc.data();
      list.push({
        id: doc.id,
        github,
        name,
        img,
      });
    });
    this.setState({
      userList: list,
    });
  }
  componentDidMount() {
    this.fetchUsers().then(() => {
      this.setState({
        isLoaded: true,
      });
    });
  }
  render() {
    return (
      <>
        <Appbar>
          <Appbar.Content title={'온라인 알고리즘 스터디'} />
        </Appbar>
        {/* <StatusBar barStyle="dark-content" /> */}
        <Text
          style={
            styles.title
          }>{`${this.state.userList.length}명이 함께 참여중입니다.`}</Text>
        {this.state.isLoaded ? (
          <FlatList
            style={{flex: 1}}
            data={this.state.userList}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <ListItem
                onPress={() => {
                  console.log(item.name);
                }}
                title={item.name}
                subtitle={item.github}
                rightIcon={
                  <Icon name="sc-telegram" type="evilicon" color="#517fa4" />
                }
                leftAvatar={{
                  placeholderStyle: {
                    backgroundColor: 'grey',
                  },
                  rounded: true,
                  title: item.name[0],
                  source: {uri: item.img},
                  activeOpacity: 0.7,
                }}></ListItem>
            )}
          />
        ) : (
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" />
            <Text>Getting the Users</Text>
            {/* {errors ? <Text>{errors}</Text> : null} */}
          </View>
        )}
        
      </>
    );
  }
}

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    padding: 16,
    fontSize: 20,
  },

=======
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 10
  },
  container: {
    flex: 1,
    justifyContent: "center"
  },
  title:{
    padding: 16,
    fontSize: 20,
  },
  
>>>>>>> d63b844cf3fd004291035afcc69cece9b1a91f18
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
