import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import WelcomeScreen from './BemVindo';
import YouTubeSearchScreen from './YouTubeTela';
import VimeoSearchScreen from './VimeoTela';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'YouTube') {
            iconName = focused ? 'logo-youtube' : 'logo-youtube';
          } else if (route.name === 'Vimeo') {
            iconName = focused ? 'logo-vimeo' : 'logo-vimeo';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#e91e63',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="YouTube" component={YouTubeSearchScreen} />
      <Tab.Screen name="Vimeo" component={VimeoSearchScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }} // Escondendo o header da tela de boas-vindas
        />
        <Stack.Screen
          name="Search"
          component={BottomTabs}
          options={{ headerShown: false }} // Escondendo o header do navegador de abas
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
