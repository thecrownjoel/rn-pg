import React from 'react';
import { Button, View, Text, Image } from 'react-native';

export class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'tomato' }}>
          <Text style={{ fontSize: 30} }>Home Screen</Text>
          <Button title="Details" onPress={() => this.props.navigation.navigate('Details')} />
          <Button title="Giannis" onPress={() => this.props.navigation.navigate('Giannis')} />
        </View>
      );
    }
  }