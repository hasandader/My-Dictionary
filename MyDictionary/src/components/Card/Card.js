import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import trash from "../../assets/IOS/trash3x.png";

const Card = props => {
    let mode = props.screenMode;
    return (
        <View style={mode === 'portrait' ? styles.container : [styles.container , {width: '80%'}]}>

            <View style={{width: '90%'}}>

                <View style={styles.words}>
                    <View style={styles.word}>
                        <Text style={styles.wordText}>{props.word}</Text>
                    </View>
                    <View style={styles.meaningView}>
                        <Text style={styles.meaningText}>{props.meaning}<Text>{props.key}</Text></Text>
                    </View>
                </View>
                <ScrollView style={{flex: 1}}>
                <View style={styles.explanation}>
                    
                        <Text style={styles.explanationText}>{props.explanation}</Text>
                    
                </View>
                </ScrollView>
            </View>

            <View style={mode === 'portrait' ? styles.rightSide : [styles.rightSide , {width: '5%'}]}>
                <TouchableOpacity style={styles.close} onPress={props.delete} >
                    <Image source={trash} resizeMode="cover" style={styles.image} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '90%',
        height: 110,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        marginTop: 20,
        borderRadius: 5
    },
    rightSide: {
        width: "10%",
        justifyContent: 'flex-end'
    },
    words: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    word: {
        paddingLeft: 20,
        paddingBottom: 5,
        width: "50%"
    },
    wordText: {
        fontWeight: 'bold',
        color: '#4c0099'
    },
    meaningView: {
        paddingBottom: 5,
        width: "45%"
    },
    explanationText: {
        color: "#7d7d7d"
    },
    meaningText: {
        fontWeight: 'bold',
        color: '#e8aa03'
    },
    explanation: {
        width: "100%",
        alignItems: 'flex-start',
        paddingLeft: 20
    },
    image: {
        width: "85%",
        height: 20,
        marginBottom: 10
    }
});

export default Card;