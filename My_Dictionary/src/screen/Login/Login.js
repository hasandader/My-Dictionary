import React, { Component } from 'react';
import { View, Text, TextInput, Image, ImageBackground, Dimensions, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import profile from '../../assets/IOS/profile3x.png';
import shape from "../../assets/IOS/shape3x.jpg";
import mail from '../../assets/IOS/mail3x.png';
import lock from '../../assets/IOS/lock3x.png';

class Login extends Component {

    state = {
        viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
    }

    constructor(props) {
        super(props);
        Dimensions.addEventListener("change", this.updateStyles);
    }

    updateStyles = dims => {
        this.setState({
            viewMode: dims.window.height > 500 ? "portrait" : "landscape"
        });
    };

    static navigatorButtons = {
        leftButtons: [
            {
                id: 'backBtn',
                title: '',
                //icon: 'arrow'
            }
        ],
        rightButtons: [],
    };
    
    render() {

        let content;

        if (this.state.viewMode === 'portrait') {
            content = (
                <ImageBackground source={shape} style={styles.pageHeader} >
                    <Image source={profile} resizeMode="cover" style={styles.image} />
                    <Text style={{color: '#575757' , fontSize: 18 , fontWeight: 'bold'}}>Sign In</Text>
                </ImageBackground>
            );
        };

        return (
            <View style={styles.container}>
                {content}
                {/* <View style={{width: '100%'}}> */}
                <View style={this.state.viewMode === 'portrait' ? styles.emailView : [styles.emailView , {marginTop: 12}]}>
                    <Image source={mail} resizeMode='cover' style={styles.emailIcon} />
                    <TextInput
                        placeholder="Email "
                        placeholderTextColor="#7d7d7d"
                        //value={this.state.meaning}
                        //onChangeText={meaning => this.setState({ meaning })}
                        //style={this.state.viewMode === 'portrait' ? styles.inputView : styles.landscapeInputView}
                        autoCapitalize="none"
                    />
                </View>
                <View style={styles.emailView}>
                    <Image source={lock} resizeMode='cover' style={styles.lockIcon} />
                    <TextInput
                        placeholder="Password "
                        placeholderTextColor="#7d7d7d"
                        //value={this.state.meaning}
                        //onChangeText={meaning => this.setState({ meaning })}
                        //style={this.state.viewMode === 'portrait' ? styles.inputView : styles.landscapeInputView}
                        autoCapitalize="none"
                    />
                </View>
                {/* </View> */}
                {/* <View style={{width: '60%'}}>
                    <Text style={{fontSize: 10}}>Forgot your <Text style={{textDecorationLine:'underline' , color: '#bb6aff' , fontSize: 10}}>password?</Text></Text>
                </View> */}
                <View style={styles.button}>
                    <Button
                        title="LOGIN"
                        titleStyle={{ fontSize: 16 }}
                        onPress={() => this.props.navigator.push({
                            screen: "dictionary.DictionaryScreen"})}
                        buttonStyle={{ borderRadius: 6, backgroundColor: '#bb6aff', height: 50 }}
                    />
                </View>
                <Text style={{fontSize: 10 , flex: 1 , marginTop: 10}}>Don't have an account? <Text style={{textDecorationLine:'underline' , color: '#bb6aff' , fontSize: 10}} onPress={() => this.props.navigator.pop()}>Sign Up</Text></Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '18%',
        height: 68,
        marginBottom: 25
    },
    pageHeader: {
        width: "100%",
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
    },
    emailView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "70%",
        height: 35,
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
        marginBottom: 15
    },
    emailIcon: {
        width: 22,
        height: 14,
        marginRight: 10
    },
    lockIcon: {
        width: 18,
        height: 22,
        marginRight: 10
    },
    button: {
        width: "70%",
        //flex: 1,
        //alignSelf: 'flex-end',
        marginTop: 40,
        //marginRight: 20
    }
})

export default Login;