import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './app/screens/HomeScreen';
import BlogScreen from './app/screens/BlogScreen';
import MenuScreen from './app/screens/MenuScreen';
import FavScreen from './app/screens/FavScreen';
import QuizScreen from './app/screens/QuizScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'Blog') {
              iconName = focused ? 'md-document' : 'md-copy';
            } else if (route.name === 'Menu') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Faviourites') {
              iconName = focused ? 'ios-heart' : 'ios-heart-empty';
            } else if (route.name === 'Quiz') {
              iconName = focused ? 'ios-school' : 'ios-school';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#0000FF',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Blog" component={BlogScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
        <Tab.Screen name="Faviourites" component={FavScreen} />
        <Tab.Screen name="Quiz" component={QuizScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
