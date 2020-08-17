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
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import UserList from './ui/user_list';
import Home from './ui/home';

const reference = database().ref();
// const MaterialBottomTabs = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


class App extends Component {
  createDrawer = () => (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="사용자목록" component={UserList} />
    </Drawer.Navigator>
  );

  createHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="참가자목록"
        component={UserList}
        options={{
          title: '참가자목록',
        }}
      />

      <Stack.Screen name="Bottom Tabs" children={this.createBottomTabs} />
    </Stack.Navigator>
  );

  createBottomTabs = () => {
    return (
      <MaterialBottomTabs.Navigator>
        <MaterialBottomTabs.Screen
          name="Tab 2"
          component={UserList}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: () => (
              <Icon style={[{color: 'white'}]} size={25} name={'human'} />
            ),
          }}
        />
        <MaterialBottomTabs.Screen
          name="Tab 1"
          style={{marginBottom: 16}}
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <Icon style={[{color: 'white'}]} size={25} name={'home'} />
            ),
          }}
        />
        {/* <MaterialBottomTabs.Screen
          name="Tab 3"
          component={Tab3}
          options={{
            tabBarLabel: 'Map',
            tabBarIcon: () => (
              <Icon style={[{color: 'white'}]} size={25} name={'map'} />
            ),
          }}
        /> */}
      </MaterialBottomTabs.Navigator>
    );
  };

  render() {
    // return <NavigationContainer>{this.createHomeStack()}</NavigationContainer>;
    return (
      <NavigationContainer>
       <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === '참여자목록') {
              iconName = focused ? 'list-circle' : 'list-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#517fa4',
          inactiveTintColor: 'gray',
        }}
      >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="참여자목록" component={UserList} />
        </Tab.Navigator>
      </NavigationContainer>
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
