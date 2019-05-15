import React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

/// screens
import { HomeScreen } from './screens/Home';
import { GreekFreak } from './screens/GreekFreak';



class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button title="Home" onPress={() => this.props.navigation.navigate('Home')} />
        <Button title="Giannis" onPress={() => this.props.navigation.navigate('Giannis')} />
      </View>
    );
  }
}



const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Giannis: GreekFreak,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
