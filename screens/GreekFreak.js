import React from 'react';
import { Button, View, Text, Image } from 'react-native';


export class GreekFreak extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EEE1C6' }}>
        <Text style={ {fontSize: 30, paddingBottom: 20} } >Giannis Antetokounmpo</Text>
        <Text style={ {fontSize: 15, paddingBottom: 20} } >'The Greek Freek'</Text>
        <Image style={{ height: 300, width: 300, paddingBottom: 20} } source={ {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Giannis_Antetokounmpo_crop.jpg/275px-Giannis_Antetokounmpo_crop.jpg'} } />
        <Image style={{ height: 100, width: 100} } source={ {url: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Milwaukee_Bucks_logo.svg/200px-Milwaukee_Bucks_logo.svg.png'} } />
        <Button title="Details" onPress={() => this.props.navigation.navigate('Details')} />
        <Button title="Home" onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    )
  }
}

