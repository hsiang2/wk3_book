import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Pressable } from 'native-base';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
    );
}

const MyTabs = () => {
    return(
        <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconPath;
            if (route.name === 'Home') {
              iconPath = focused 
              ? require('../../assets/icon_home_actived.png'):
              require('../../assets/icon_home.png');
            } else if (route.name === 'Wishlist') {
              iconPath = focused       
              ? require('../../assets/icon_nav_bookmark_actived.png'):
              require('../../assets/icon_nav_bookmark.png');
            } else if (route.name === 'MyBooks') {
              iconPath = focused
              ? require('../../assets/icon_mybook_actived.png'):
              require('../../assets/icon_mybook.png');
            }
            return (
              <Image
                style={{width: 24, height: 24}}
                source={iconPath}
              />
            );
          },
          headerShown: false,
        })}
        tabBarOptions={{
          activeTintColor: '#6200EE',
          inactiveTintColor: '#666666',
          labelStyle: {
            fontSize: 12,
            padding: 0,
            marginTop: 0
          }
        }}
      >
        <Tab.Screen name='Home' component={BookStack}/>
        <Tab.Screen name='Wishlist' component={BookStack}/>
        <Tab.Screen 
          name='MyBooks' 
          component={BookStack}
          options={{
            tabBarLabel: 'My Books'
          }}
        />
      </Tab.Navigator>
    );
}

const BookStack = () => {
    return(
      <Stack.Navigator
        screenOptions={{
          title: null,
          headerShadowVisible: false
        }}
      >
        <Stack.Screen
          name='Home' 
          component={HomeScreen}
          options={{
            headerLeft: () => (
              <Image 
                source={require("../../assets/icon_menu.png")}
              />
            ),
            headerRight: () => (
              <Image 
                source={require("../../assets/icon_search.png")}
              />
            )
          }}
        />
        <Stack.Screen 
          name='Detail'
          component={DetailScreen}
          options={({navigation}) => ({
            headerBackTitleVisible: false,
            headerLeft: () => (
              <Pressable
                onPress= {() => (navigation.goBack())}
              >
                <Image 
                source={require("../../assets/icon_back.png")}
                />
              </Pressable>
            ),
            // headerRight: () => (

            // )
            //   //<BookMark />
            // )
            //headerBackImageSource: "./assets/icon_back.png"
          })}
        />
      </Stack.Navigator>
    );
  }

  export default Navigation;