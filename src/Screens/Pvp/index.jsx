import React, { Component } from 'react';

import { SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native';


import Games from '../../Components/ListGames/Games';
import api from '../../Services/api';

export default class PvP extends Component{
    constructor(props){
        super(props);
        this.state = {
            games: []
        }
    };

     async componentDidMount() {
         const response = await api.get('games?category=pvp&sort-by=popularity');
         this.setState({
             games: response.data.slice( 0 , 20 )
             
         });
     }

    render(){
        return(
            <View style={styles.container}>
                <Text>Pvp</Text>
                <FlatList 
                data={this.state.games}
                keyExtractor={item => item.id}
                renderItem={({item}) => <Games data={item}/>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    }
})