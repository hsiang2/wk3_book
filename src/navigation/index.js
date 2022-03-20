import React from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Divider, Image, Pressable, Text, VStack } from 'native-base';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import BookMark from '../components/BookMark';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
          <MyDrawer />
        </NavigationContainer>
    );
}

const CustomDrawerContent = (props) => {
    return(
        <DrawerContentScrollView {...props}>
            <VStack ml={4} mb={2} mt={10} space={4}>
              <Image 
                h={12} w={12}
                source={{uri: "https://compai.pub/v1/png/0d9659ae48bd8d4150d393f13accf457c31eedf64736150133f9166837b46c6b"}}
              />
              <Text fontSize={24} color={"#131313"}>May</Text>
            </VStack>
            <Divider my={2}/>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    );
}

const MyDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                drawerActiveBackgroundColor: "#fff",
                drawerActiveTintColor: "#666666",
                drawerInactiveTintColor: "#666666",
                drawerStyle: { width: 300},
                drawerLabelStyle: {fontSize: 14}
            }}
            drawerContent={props => <CustomDrawerContent {...props}/>}
        >
            <Drawer.Screen
              name='Home'
              component={MyTabs}
              options={{
                  headerShown: false,
                  drawerIcon: () => <Image source={require("../../assets/icon_home.png")}/>
              }}
            />
            <Drawer.Screen
              name='Wishlist'
              component={MyTabs}
              options={{
                headerShown: false,
                drawerIcon: () => <Image source={require("../../assets/icon_nav_bookmark.png")}/>
            }}
            />
            <Drawer.Screen
              name='MyBooks'
              component={MyTabs}
              options={{
                headerShown: false,
                drawerLabel: "My Books",
                drawerIcon: () => <Image source={require("../../assets/icon_mybook.png")}/>
            }}
            />
            <Drawer.Screen
              name='Account'
              component={MyTabs}
              options={{
                headerShown: false,
                drawerIcon: () => <Image source={require("../../assets/icon_account.png")}/>
            }}
            />
            <Drawer.Screen
              name='Setting'
              component={MyTabs}
              options={{
                headerShown: false,
                drawerIcon: () => <Image source={require("../../assets/icon_settings.png")}/>
            }}
            />
        </Drawer.Navigator>
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

const BookStack = ({navigation}) => {
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
                <Pressable
                  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                >
                    <Image 
                      source={require("../../assets/icon_menu.png")}
                    />
                </Pressable>
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
            headerRight: () => (
                <BookMark />
            )
          })}
        />
      </Stack.Navigator>
    );
  }

  export default Navigation;