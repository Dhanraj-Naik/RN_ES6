import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

import LearnTopic from './screens/LearnTopic';
import ImportAndExport from './screens/ImportAndExport/ImportAndExport';
import Scopes from './screens/Scopes/Scopes';
import ArrowFunctions from './screens/ArrowFunctions';
import TemplateLiterals from './screens/TemplateLiterals/TemplateLiterals';
import ArrayDestructuring from './screens/Destructuring/ArrayDestructuring';
import ObjectDestructuring from './screens/Destructuring/ObjectDestructuring';
import ClassesScene from './screens/ClassesScene/ClassesScene';
import MapType from './screens/MapType/MapType';
import Generators from './screens/Generators/Generators';
import Spread from './screens/Destructuring/Spread';
import Rest from './screens/Destructuring/Rest';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ArrayStack = createStackNavigator();
const ObjectStack = createStackNavigator();



const ArrayStackScreen = () => {
  return (
    <ArrayStack.Navigator >
      <Tab.Screen
        component={ArrayDestructuring}
        name={'arrayDestructuring'}
        options={{
          title: 'TAB 1',
          // showLabel: true,
          // tabBarVisible: false,
          // tabBarIcon: // function that returns React node,
          // tabBarLabel: <Text>{'Nagin'}</Text>
          tabBarBadge: 1,
          tabBarBadgeStyle: { color: 'white', backgroundColor: 'red' },
          // tabBarButton: //

          //Header
          headerTitleStyle: {
            fontWeight: '900',
          },
          headerTintColor: 'red',
          headerStyle: {
            backgroundColor: 'pink',
          },
        }}
      />
      <ArrayStack.Screen
        name={'spread'}
        component={Spread}
      />
    </ArrayStack.Navigator>
  );
};

const ObjectStackScreen = () => {
  return (
    <ArrayStack.Navigator>
      <Tab.Screen
        component={ObjectDestructuring}
        name={'objectDestructuring'}
      />
      {/* <ArrayStack.Screen
        name={'rest'}
        component={Rest}
      /> */}
    </ArrayStack.Navigator>
  );
};

const DestructuringStack = () => {

  // const tabBarHeight = useBottomTabBarHeight();

  return (
    <Tab.Navigator
      // initialRouteName={'objectDestructuring'}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'arrayDestructuring') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          } else {
            iconName = focused ? 'cellular-outline' : 'car';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })

      }
      tabBarOptions={{
        activeBackgroundColor: 'green',
        activeTintColor: 'white',
        inactiveBackgroundColor: 'grey',
        inactiveTintColor: 'white',
        // tabStyle: { paddingVertical: 10 },
        showLabel: true,
        labelStyle: { fontSize: 14 },
        labelPosition: 'beside-icon', //'below-icon'
        // allowFontScaling: false,
        // keyboardHidesTabBar: false,
        safeAreaInsets: {
          // bottom: 0,
          // left: 0,
          // right: 0,
          // top: 0,
        },
        style: {
          position: 'absolute',
        },
      }}
      backBehavior={'initialRoute'}
      lazy={true} //if false, all the tabs are rendered immediately
      sceneContainerStyle={{ backgroundColor: 'red', paddingBottom: 20 }}
    // tabBar={} // to pass custom tab bar component using react elements
    >

      <Tab.Screen
        name={'arrayStackScreen'}
        component={ArrayStackScreen}
      />
      <Tab.Screen
        // name={'objectStackScreen'}
        // component={ObjectStackScreen}
        // screenOptions={{
        //   backgroundColor: 'red',
        // }}

        component={ObjectDestructuring}
        name={'objectDestructuring'}
      />
    </Tab.Navigator>
  );
};

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'learnTopic'}
      >

        <Stack.Screen
          name={'learnTopic'}
          component={LearnTopic}
          options={{
            title: 'ES6 Topics',
          }}
        />
        <Stack.Screen
          name={'scopes'}
          component={Scopes}
        />
        <Stack.Screen
          name={'importAndExport'}
          component={ImportAndExport}
        />
        <Stack.Screen
          name={'arrowFunctions'}
          component={ArrowFunctions}
        />

        <Stack.Screen
          name={'templateLiterals'}
          component={TemplateLiterals}
        />
        <Stack.Screen
          name={'destructuringStack'}
          component={DestructuringStack}
        />
        <Stack.Screen
          name={'classesScene'}
          component={ClassesScene}
        />
        <Stack.Screen
          name={'mapType'}
          component={MapType}
        />
        <Stack.Screen
          name={'generators'}
          component={Generators}
        />

        <ArrayStack.Screen
          name={'rest'}
          component={Rest}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );

};

export default App;
