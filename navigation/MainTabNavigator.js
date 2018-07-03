import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Colors from '../constants/Colors';
import Schedule from '../screens/Schedule';
import Devo from '../screens/Devo';
import Home from '../screens/Home';
import Leaders from '../screens/Leaders';
import AdvancedDeck from '../screens/AdvancedDeck';

export default TabNavigator(
  {
    Home: {
      screen: Home,
    },
    Devo: {
      screen: Devo,
    },
    Schedule: {
      screen: Schedule,
    },
    Leaders: {
      screen: Leaders,
    },
    AdvancedDeck: {
      screen: AdvancedDeck,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Schedule':
            iconName =
              Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-information-circle';
            break;
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
