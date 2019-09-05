import React, { Component } from "react";
import { View, Text, TextInput, ScrollView, ImageBackground, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/FontAwesome";

import shape from "../../assets/IOS/shapeCroped.jpg";
import pageEnd from "../../assets/IOS/roundedRectangle2_3x.png";

class Home extends Component {

    state = {
        word: "",
        meaning: "",
        explanation: "",
        viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
    }

    static navigatorButtons = {
        leftButtons: [
            {
                id: 'backBtn',
                title: ''
            }
        ],
        rightButtons: [],
    };

    constructor(props) {
        super(props);
        Dimensions.addEventListener("change", this.updateStyles);
    }

    updateStyles = dims => {
        this.setState({
            viewMode: dims.window.height > 500 ? "portrait" : "landscape"
        });
    };

    wordListHandler = () => {
        this.props.navigator.pop();
    };

    updateDictionary = async () => {
        try {
            let newWords = [this.state.word, this.state.meaning, this.state.explanation];
            let words = [];
            let priorWords = await AsyncStorage.getItem('dictionary');
            if (priorWords === null) { words = []; }
            let parsedPriorWords = JSON.parse(priorWords);
            const dictionaryWords = {
                key:  '_' + Math.random().toString(36).substr(2, 9),
                word: newWords[0],
                meaning: newWords[1],
                explanation: newWords[2]
            };
            words = [...parsedPriorWords, dictionaryWords];
            this.setState({
                wordList: words
            })
            AsyncStorage.setItem('dictionary', JSON.stringify(words));

            //alert(words);
        } catch (error) {
            //alert(error);
            let newWords = [this.state.word, this.state.meaning, this.state.explanation];
            let words = [];
            const dictionaryWords = {
                key:  '_' + Math.random().toString(36).substr(2, 9),
                word: newWords[0],
                meaning: newWords[1],
                explanation: newWords[2]
            };
            words = [dictionaryWords];
            this.setState({
                wordList: words
            })
            AsyncStorage.setItem('dictionary', JSON.stringify(words));
        }
    }

    render() {
        let content;

        if (this.state.viewMode === 'portrait') {
            content = (
                <ImageBackground source={shape} style={styles.image} >
                    <Text style={styles.text}>Word Input</Text>
                </ImageBackground>
            );
        };

        return (
            <View style={styles.container}>
                {content}
                <View style={this.state.viewMode === 'portrait' ? styles.portraitWordInput : styles.landscapeWordInput}>
                    <TextInput
                        placeholder="The Word"
                        placeholderTextColor="#7d7d7d"
                        value={this.state.word}
                        onChangeText={word => this.setState({ word })}
                        style={this.state.viewMode === 'portrait' ? styles.inputView : styles.landscapeInputView}
                        autoCapitalize="none"
                    />
                    <TextInput
                        placeholder="The Meaning "
                        placeholderTextColor="#7d7d7d"
                        value={this.state.meaning}
                        onChangeText={meaning => this.setState({ meaning })}
                        style={this.state.viewMode === 'portrait' ? styles.inputView : styles.landscapeInputView}
                        autoCapitalize="none"
                    />
                </View>
                <View style={this.state.viewMode === 'portrait' ? styles.explanationView : [styles.explanationView, { paddingLeft: 20 }]}>
                    <TextInput
                        placeholder="Explanation/Example"
                        placeholderTextColor="#7d7d7d"
                        value={this.state.explanation}
                        onChangeText={explanation => this.setState({ explanation })}
                        style={styles.explanation}
                        autoCapitalize="none"
                        multiline
                        numberOfLines={10}
                    />
                </View>
                <View style={this.state.viewMode === 'portrait' ? styles.button : [styles.button, { width: '40%' }]}>
                    <Button
                        icon={
                            <Icon
                                name="dictionary"
                                size={25}
                                color="white"
                            />
                        }
                        title="Add To My Dictionary"
                        titleStyle={{ fontSize: 16 }}
                        iconRight
                        onPress={this.updateDictionary}
                        buttonStyle={{ borderRadius: 6, backgroundColor: '#bb6aff', height: 50 }}
                    />
                </View>
                <ImageBackground source={pageEnd} style={styles.pageEnd} >             
                    <TouchableOpacity onPress={() => this.wordListHandler()} >
                        <View style={styles.buttom}>
                            <Icon2
                                name="folder-open-o"
                                size={20}
                                color="white"
                            />
                            <Text style={{ color: 'white', marginLeft: 5 }}>Open list</Text>
                        </View>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    inputView: {
        marginTop: 18,
        width: "90%",
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        borderRadius: 5,
        height: 50,
        paddingLeft: 20,
    },
    landscapeInputView: {
        marginTop: 18,
        width: "45%",
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        borderRadius: 5,
        height: 50,
        paddingLeft: 20
    },
    portraitWordInput: {
        width: "100%",
        alignItems: 'center'
    },
    landscapeWordInput: {
        flexDirection: 'row',
        width: '95%',
        justifyContent: 'space-around',
        paddingLeft: 20
    },
    explanation: {
        marginTop: 18,
        width: "90%",
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        borderRadius: 5,
        height: 90,
        paddingLeft: 20,
        paddingTop: 20
    },
    explanationView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: "63%",
        flex: 1,
        alignSelf: 'flex-end',
        marginTop: 20,
        marginRight: 20
    },
    image: {
        width: "100%",
        height: 130,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40
    },
    pageEnd: {
        flexDirection: 'row',
        width: "100%",
        height: 33,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    buttom: {
        flexDirection: 'row'
    },
    text: {
        fontSize: 24,
        color: "#575757"
    }
});

export default Home;