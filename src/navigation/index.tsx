import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Header} from '../components';
import {CardList, RecordList} from '../screens';

const Tab = createBottomTabNavigator();

const HeaderTitle = () => <Header name="Game Junction" />;

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Tab.Navigator
          screenOptions={{
            headerTitle: HeaderTitle,
            headerStyle: {
              backgroundColor: '#87CEEB',
            },
            headerTitleAlign: 'center',
          }}>
          <Tab.Screen
            name="CardsScreen"
            component={CardList}
            options={{
              title: 'All games',
            }}
          />
          <Tab.Screen
            name="RecordsScreen"
            component={RecordList}
            options={{title: 'Records'}}
          />
        </Tab.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default RootNavigation;
