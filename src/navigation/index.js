import React from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Divider, Image, Pressable, Text, VStack } from 'native-base';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import BookMark from '../components/BookMark';
import WishlistScreen from "../screens/WishlistScreen"
import MybooksScreen from "../screens/MyBooksScreen"
import AccountScreen from "../screens/AccountScreen"
import SettingScreen from "../screens/SettingScreen"

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
                alt='avatar'
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
            screenOptions={() => ({
                drawerActiveBackgroundColor: "#fff",
                drawerActiveTintColor: "#6200EE",
                drawerInactiveTintColor: "#666666",
                drawerStyle: { width: 300},
                drawerLabelStyle: {fontSize: 14},
            })}
            drawerContent={props => <CustomDrawerContent {...props}/>}
        >
            <Drawer.Screen
              name='Home'
              component={MyTabs}
              options={{
                  headerShown: false,
                  drawerIcon: ({focused}) => {
                    let iconPath;
                    iconPath = focused
                    ? "https://compai.pub/v1/png/28488a6fe591a80b86dc001423703bf2b1a234598ac37c6984d9c7cc0ef0de20"
                    :"https://compai.pub/v1/png/c83efda7c57a9676a43c26ecdddb08a1b36d89cfc4e1f6223972efa29966c9e7";
                    return <Image source={{uri: iconPath}} h={6} w={6} alt='home icon'/>
                  }
              }}
            />
            <Drawer.Screen
              name='Wishlist'
              component={WishlistScreen}
              options={{
                headerShown: false,
                drawerIcon: ({focused}) => {
                    let iconPath;
                    iconPath = focused
                    ? "https://compai.pub/v1/png/b48f4a0a4b8efb36a35d38032a24de70cf41ed943c82ad88769e50ff2b5d09b7"
                    :"https://compai.pub/v1/png/28f355d18057a6a51f71d3f3e40d5c50d7806fa1aca7ef7662ce30b39e2c4f3b";
                    return <Image source={{uri: iconPath}} h={6} w={6} alt='wishlist icon'/>
                  }
            }}
            />
            <Drawer.Screen
              name='MyBooks'
              component={MybooksScreen}
              options={{
                headerShown: false,
                drawerLabel: "My Books",
                drawerIcon: ({focused}) => {
                    let iconPath;
                    iconPath = focused
                    ? "https://compai.pub/v1/png/d476747c3368711c6e8084ccb23131bdf90a975161a8c81bbedb6bc43ce71c24"
                    :"https://compai.pub/v1/png/0dc105be1854d801722ef02cea0b3d579fb463c6ac235f52e0bb840f58db2207";
                    return <Image source={{uri: iconPath}} h={6} w={6} alt='my books icon'/>
                  }
            }}
            />
            <Drawer.Screen
              name='Account'
              component={AccountScreen}
              options={{
                headerShown: false,
                drawerIcon: ({focused}) => {
                    let iconPath;
                    iconPath = focused
                    ? "https://compai.pub/v1/png/300a3b29b23054bf1070b6b20082f547788ed6f4676f2083edd74e4235b6308a"
                    :"https://compai.pub/v1/png/68ac0c4fd8d8bf06dceb9044cf27d29c1745b921e20f8811865011973dba2d23";
                    return <Image source={{uri: iconPath}} h={6} w={6} alt='account icon'/>
                  }
            }}
            />
            <Drawer.Screen
              name='Setting'
              component={SettingScreen}
              options={{
                headerShown: false,
                drawerIcon: ({focused}) => {
                    let iconPath;
                    iconPath = focused
                    ? "https://compai.pub/v1/png/04fb419afa118531ca48f4a09da8dd4553b51eea3bfbc578a6b0a3719f72f0a2"
                    :"https://compai.pub/v1/png/39e9a547d621cb91168976603ab5957cf432d00811f4ef9ce7cf0d6107fa5c92";
                    return <Image source={{uri: iconPath}} h={6} w={6} alt='setting icon'/>
                  }
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
                alt='icon'
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
        <Tab.Screen name='Wishlist' component={WishlistScreen}/>
        <Tab.Screen 
          name='MyBooks' 
          component={MybooksScreen}
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
                      alt='menu icon'
                    />
                </Pressable>
            ),
            headerRight: () => (
              <Image 
                source={require("../../assets/icon_search.png")}
                alt='search icon'
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
                  alt='back icon'
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