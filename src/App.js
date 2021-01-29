import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LearnTopic from './screens/LearnTopic';
import ImportAndExport from './screens/ImportAndExport/ImportAndExport';
import BlockScopedDeclarations from './BlockScopedDeclarations/BlockScopedDeclarations';


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
          name={'importAndExport'}
          component={ImportAndExport}
        />
        <Stack.Screen
          name={'blockScopedDeclarations'}
          component={BlockScopedDeclarations}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
