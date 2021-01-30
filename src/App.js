import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LearnTopic from './screens/LearnTopic';
import ImportAndExport from './screens/ImportAndExport/ImportAndExport';
import Scopes from './screens/Scopes/Scopes';
import ArrowFunctions from './screens/ArrowFunctions';
import TemplateLiterals from './screens/TemplateLiterals/TemplateLiterals';


const Stack = createStackNavigator();

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
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
