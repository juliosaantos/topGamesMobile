import React, { Component } from 'react';

import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

export default class Games extends Component {
    state = {
        modalVisible: false
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible })
    }


    render() {

        const { modalVisible } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.containerImg}>
                    <TouchableOpacity style={styles.img} onPress={() => this.setModalVisible(true)}>
                        <Image style={styles.img} source={{ uri: this.props.data.thumbnail }} />
                        <Text style={styles.text}>{this.props.data.title}</Text>
                    </TouchableOpacity>
                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => this.setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>
                                    <FontAwesome name="close" size={30} color="#FF1919" />
                                </Text>
                            </Pressable>
                            
                            <Image style={styles.imgModal} source={{uri: this.props.data.thumbnail}}/>
                            <Text style={styles.titleModal}>{this.props.data.title}</Text>
                            <Text style={styles.descriptionModal}>{this.props.data.short_description.substring(0, 180)}...</Text>
                            <Text style={styles.platformModal}>Platform: {this.props.data.platform}</Text>
                    
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    containerImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        marginLeft: 20,

    },
    img: {
        width: '90%',
        height: 150,

    },
    text: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
        paddingLeft: 10,
    },

    //MODAL

    imgModal:{
        width: 300,
        height: 180,
    },

    titleModal:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        color: '#FFF'
    },

    platformModal:{
        fontSize: 16,
        marginTop: 10,
        color: '#FFF'
    },

    descriptionModal:{
        fontSize: 14,
        fontWeight: '300',
        color: '#FFF'
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: '#000',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#FFF',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10
    },
    button: {
        borderRadius:15,
        padding: 10,
        elevation: 2,
        marginLeft: 260,
        bottom: 20,
    },
    buttonClose: {
        backgroundColor: "#000",

    },
    textStyle: {
        color: '#FF1919',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center'
    }

})