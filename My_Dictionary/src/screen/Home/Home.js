import React, { Component } from "react";
import { View, Text, TextInput, Image, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import arrow from "../../assets/icons8-forward-50.png";

import shape from "../../assets/IOS/shape.jpg";
import pageEnd from "../../assets/IOS/roundedRectangle2_3x.png";

import { addWord } from "../../store/actions/index";

class Home extends Component {

    state = {
        word: "",
        family: "",
        meaning: "",
        explanation: "",
        fouced: false,
        Mfouced: false,
        Efouced: false
    }

    static navigatorButtons = {
        leftButtons: [
            {
                id: 'backBtn',
                title: 'Word List',
                //icon: 'arrow'
            }
        ],
        rightButtons: [],
    };

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
            if (event.id == 'backBtn') { // this is the same id field from the static navigatorButtons definition
                this.wordListHandler();
            }
        }
    }

    wordListHandler = () => {
        // this.props.navigator.push({
        //     screen: "dictionary.DictionaryScreen"
        // });
        this.props.navigator.pop();
    };

    addWordHandler = () => {
        this.props.onAddWord(
            this.state.word,
            //this.state.family,
            this.state.meaning,
            this.state.explanation
        );
    };

    onFocus() {
        this.setState({
            fouced: true
        })
    };

    onBlur() {
        this.setState({
            fouced: false
        })
    };

    onFocus2() {
        this.setState({
            Mfouced: true
        })
    };

    onBlur2() {
        this.setState({
            Mfouced: false
        })
    };

    onFocus3() {
        this.setState({
            Efouced: true
        })
    };

    onBlur3() {
        this.setState({
            Efouced: false
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={shape} style={styles.image} >
                    <Text style={styles.text}>Word List</Text>
                </ImageBackground>
                {/* <Text>Word List</Text>
                <Image source={shape} resizeMode="cover" style={styles.image} /> */}
                <TextInput
                    placeholder="The Word"
                    placeholderTextColor="#7d7d7d"
                    value={this.state.word}
                    onChangeText={word => this.setState({ word })}
                    style={[styles.inputView]}
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder="The Meaning "
                    placeholderTextColor="#7d7d7d"
                    value={this.state.meaning}
                    onChangeText={meaning => this.setState({ meaning })}
                    style={styles.inputView}
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder="Explanation/Example"
                    placeholderTextColor="#7d7d7d"
                    value={this.state.explanation}
                    onChangeText={explanation => this.setState({ explanation })}
                    style={styles.explanation}
                    autoCapitalize="none"
                    multiline
                    textAlignVertical
                    numberOfLines={10}
                />
                <View style={styles.button}>
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
                        onPress={this.addWordHandler}
                        buttonStyle={{ borderRadius: 6, backgroundColor: '#bb6aff', height: 50 }}
                    />
                </View>
                <ImageBackground source={pageEnd} style={styles.pageEnd} >
                    <View style={styles.buttom}>
                        <Icon3
                            name="ios-add-circle-outline"
                            size={20}
                            color="white"
                        />
                        <Text style={{ color: 'white' , marginLeft: 5}}>Add word</Text>
                    </View>
                    <View style={styles.buttom}>
                        <Icon2
                            name="folder-open-o"
                            size={20}
                            color="white"
                        />
                        <Text style={{ color: 'white', marginLeft: 5 }}>Open list</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }

    // render() {
    //     return (
    //         <View style={styles.container}>
    //             <View style={styles.subContainer}>
    //                 <TextInput
    //                     placeholder="The Word"
    //                     label="Word"
    //                     value={this.state.word}
    //                     onChangeText={word => this.setState({ word })}
    //                     onFocus={() => this.onFocus()}
    //                     onBlur={() => this.onBlur()}
    //                     style={this.state.fouced ? styles.inputViewFouced : styles.inputView}
    //                     autoCapitalize="none"
    //                 />
    //                 {/* <TextInput
    //                     placeholder="Type"
    //                     label="Family"
    //                     value={this.state.family}
    //                     onChangeText={family => this.setState({family})}
    //                     style={[styles.inputView, { width: "15%" }]}
    //                     autoCapitalize="none"
    //                     // inputContainerStyle={styles.inputContainer}
    //                     // labelStyle={styles.label}
    //                 /> */}
    //                 <TextInput
    //                     placeholder="The Meaning "
    //                     label="Meaning"
    //                     value={this.state.meaning}
    //                     onChangeText={meaning => this.setState({ meaning })}
    //                     onFocus={() => this.onFocus2()}
    //                     onBlur={() => this.onBlur2()}
    //                     style={this.state.Mfouced ? styles.inputViewFouced : styles.inputView}
    //                     autoCapitalize="none"
    //                 />
    //             </View>
    //             <TextInput
    //                 placeholder="Explanation/Example"
    //                 label="Explanation"
    //                 value={this.state.explanation}
    //                 onChangeText={explanation => this.setState({ explanation })}
    //                 style={this.state.Efouced ? styles.explanationFouced : styles.explanation}
    //                 autoCapitalize="none"
    //                 onFocus={() => this.onFocus3()}
    //                 onBlur={() => this.onBlur3()}
    //                 multiline
    //                 textAlignVertical
    //                 numberOfLines={10}
    //             />
    //             <View style={styles.button}>
    //                 {/* //<Button title="Add To My Dictionary" onPress={this.addWordHandler} />
    //                 //<Button title="Word List" onPress={this.wordListHandler} /> */}
    //                 <Button
    //                     icon={
    //                         <Icon
    //                             name="dictionary"
    //                             size={30}
    //                             color="white"
    //                         />
    //                     }
    //                     title="Add To My Dictionary"
    //                     ViewComponent={LinearGradient} 
    //                     linearGradientProps={{
    //                         colors: ['#5193F5', '#04569F'],
    //                         start: { x: 0, y: 0.5 },
    //                         end: { x: 1, y: 0.5 },
    //                     }}
    //                     onPress={this.addWordHandler}
    //                     buttonStyle={{ borderRadius: 10 }}
    //                 />
    //             </View>
    //         </View>
    //     );
    // }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    subContainer: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    inputView: {
        marginTop: 18,
        width: "90%",
        //marginTop: 70,
        //marginBottom: 15,
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
        //borderColor: '#3346FF',
        //borderWidth: 1
    },
    inputViewFouced: {
        width: "38%",
        marginTop: 60,
        marginBottom: 15,
        backgroundColor: 'white',
        shadowColor: "#0A0AC8",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        borderRadius: 15,
        height: 35,
        padding: 10
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
        paddingTop: 20,
        //borderColor: '#3346FF',
        //borderWidth: 1
    },
    explanationFouced: {
        marginTop: 15,
        width: "90%",
        backgroundColor: 'white',
        shadowColor: "#0A0AC8",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        borderRadius: 15,
        height: 70,
        padding: 10,
        paddingTop: 22
    },
    button: {
        width: "63%",
        flex: 1,
        alignSelf: 'flex-end',
        marginTop: 20,
        marginRight: 20
        //borderWidth: 1
    },
    image: {
        width: "100%",
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40
        //borderWidth: 1
    },
    pageEnd: {
        flexDirection: 'row',
        width: "100%",
        height: 33,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    buttom: {
        flexDirection: 'row',
        //padding: 8
    },
    text: {
        fontSize: 24,
        color: "#575757"
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onAddWord: (word, meaning, explanation) => dispatch(addWord(word, meaning, explanation))
    };
};

export default connect(null, mapDispatchToProps)(Home);