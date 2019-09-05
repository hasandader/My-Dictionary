import React, { Component } from "react";
import { View, Text, TouchableOpacity, ImageBackground, Dimensions, StyleSheet } from "react-native";
import Emoji from 'react-native-emoji';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from "react-native-vector-icons/MaterialIcons";

import CradList from "../../components/CardList/CardList";
import Icon3 from "react-native-vector-icons/Ionicons";

import shape from "../../assets/IOS/shapeCroped2.jpg";
import pageEnd from "../../assets/IOS/roundedRectangle2_3x.png";

class Dictionary extends Component {

    state = {
        viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
        delete: false,
        dictionaryWords: []
    }

    static navigatorButtons = {
        leftButtons: [{
            id: 'backBtn',
            title: ''
        }],
        rightButtons: [

        ],
    };

    constructor(props) {
        super(props);
        Dimensions.addEventListener("change", this.updateStyles);
    }

    wordListHandler = () => {
        this.props.navigator.push({
            screen: "dictionary.HomeScreen"
        });
    };

    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.updateStyles);
    }

    updateStyles = dims => {
        this.setState({
            viewMode: dims.window.height > 500 ? "portrait" : "landscape"
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.dictionaryWords !== prevState.checkForUpdates) {
            this.getItems();
        }
    }

    componentDidMount() {
        this.getItems();
    }

    onDeleteWord = async (key) => {
        try {
            let list = this.state.dictionaryWords;
            for(var i = 0; i < list.length; i++){
                if(list[i].key === key){
                    list.splice(i, 1);
                }
            }
            
            AsyncStorage.setItem('dictionary', JSON.stringify(list));
            this.getItems();
        }

        catch (err) {
            alert(err);
        }
    }

    addWordScreen = () => {
        this.props.navigator.push({
            screen: "dictionary.HomeScreen"
        });
    };

    getItems = async () => {
        try {
            let words = await AsyncStorage.getItem('dictionary')
            if(words === null){this.setState({
                dictionaryWords: []
            });} else{
                words = JSON.parse(words);
                this.setState({
                    dictionaryWords: words
                });
            }
            //alert(words);
        }

        catch (err) {
            alert(err);
        }
    };

    render() {
        let header;
        let content;

        if ( (this.state.dictionaryWords.length !== 0)) {
            content = (
                <CradList words={this.state.dictionaryWords} onWordDeleted={this.onDeleteWord} dims={this.state.viewMode} />
            );
        } else {
            content = (
                <View style={styles.startContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.contentText}>Your list still empty</Text>
                        <Text style={styles.contentText}>Start learning and fill it now <Emoji name="nerd_face" style={{ fontSize: 20 }} /></Text>
                    </View>
                    <Button
                        icon={
                            <Icon
                                name="note-add"
                                size={25}
                                color="white"
                            />
                        }
                        title="Add New Word"
                        onPress={() => this.wordListHandler()}
                        buttonStyle={{ borderRadius: 6, backgroundColor: '#bb6aff', height: 40}}
                    />
                </View>
            );
        }

        if (this.state.viewMode === 'portrait') {
            header = (
                <ImageBackground source={shape} style={styles.image} >
                    <Text style={styles.headerText}>My List</Text>
                </ImageBackground>
            );
        };

        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    {header}
                    {content}
                    <ImageBackground source={pageEnd} style={styles.pageEnd} >
                        <TouchableOpacity style={styles.buttom} onPress={() => this.wordListHandler()} >
                            <Icon3
                                name="ios-add-circle-outline"
                                size={20}
                                color="white"
                            />
                            <Text style={{ color: 'white', marginLeft: 5 }}>Add word</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    startContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 80
    },
    textContainer: {
        alignItems: 'center',
        marginBottom: 40
    },
    contentText: {
        lineHeight: 30,
        color: "#575757"
    },
    delete: {
        marginTop: 8,
        marginBottom: 5,
        alignSelf: 'flex-end',
        marginRight: 25
    },
    text: {
        color: 'blue',
        fontSize: 15
    },
    image: {
        width: "100%",
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25
    },
    headerText: {
        fontSize: 24,
        color: "#575757"
    },
    pageEnd: {
        flexDirection: 'row',
        width: "100%",
        height: 33,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    buttom: {
        flexDirection: 'row'
    }
});

export default Dictionary;