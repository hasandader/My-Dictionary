import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Card = props => {
    var boo = false;
    let content = null;
    if (props.close) {
        content = (
            <TouchableOpacity style={styles.close} onPress={props.delete} >
                <Icon name="ios-close" size={20} color="#273746" />
            </TouchableOpacity>
        )
    }
    return (
        <View style={props.length > 50 ? styles.container2 : (props.length < 1 ? styles.container3 : styles.container)}>

            <View style={styles.subContainer}>
                <View style={styles.word}>
                    <Text style={styles.wordText}>{props.word}</Text>
                </View>
                <View style={styles.meaningView}>
                    <Text style={styles.meaningText}>{props.meaning}<Text>{props.key}</Text></Text>
                </View>

                {content}

            </View>
            <View style={styles.explanation}>
                <Text>{props.explanation}</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        borderWidth: 1,
        borderColor: "#aaa",
        height: 60,
        width: "95%",
        marginTop: 5,
        marginLeft: 9,
        backgroundColor: 'white'
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        borderWidth: 1,
        borderColor: "#aaa",
        height: 90,
        width: "95%",
        marginTop: 5,
        marginLeft: 9,
        backgroundColor: 'white'
    },
    container3: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        borderWidth: 1,
        borderColor: "#aaa",
        height: 42,
        width: "95%",
        marginTop: 5,
        marginLeft: 9,
        paddingTop: 16,
        backgroundColor: 'white'
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
       // width: "100%"
    },
    close: {
        alignSelf: 'flex-end',
        borderRadius: 20,
        height: 20,
        width: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor: "#eee"
    },
    word: {
        paddingLeft: 25,
        paddingBottom: 5,
        width: "50%"
    },
    meaningView: {
        paddingBottom: 5,
        width: "45%"
    },
    meaning: {
        borderWidth: 1,
    },
    explanation: {
        width: "100%",
        alignItems: 'flex-start',
        paddingLeft: 20
    },
    wordText: {
        fontWeight: 'bold',
        color: '#04569F'
    },
    meaningText: {
        fontWeight: 'bold',
        color: '#F76B1C'
    }
});

export default Card;