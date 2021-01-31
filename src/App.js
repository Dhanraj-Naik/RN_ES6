import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DestructuringStack = () => {
  return (
    <Tab.Navigator
      initialRouteName={'objectDestructuring'}
    >
      <Tab.Screen
        component={ArrayDestructuring}
        name={'arrayDestructuring'}
      />
      <Tab.Screen
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

      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
