//import libraries to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create component
const App = () => {
    return(
    <View style={{ flex:0 }}>
        <Header headerText={'BuyMusic'} />
        <AlbumList />
    </View>);
}

export default App;

//render it to device 
//AppRegistry.registerComponent('albums', () => App);
