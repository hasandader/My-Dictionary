import React from "react";
//import { StyleSheet, FlatList } from "react-native";
import {
    Animated,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import Icon from "react-native-vector-icons/Ionicons";

import Card from "../Card/Card";

const CardList = props => {
    //et close = props.onDelete;
    return (
        // <FlatList 
        //     style={styles.listContainer}
        //     data={props.words}
        //     renderItem={(info) => (
        //         <Card 
        //             word={info.item.word}
        //             //family={info.item.family}
        //             meaning={info.item.meaning}
        //             explanation={info.item.explanation}
        //             length={info.item.explanation.length}
        //             close={props.onDelete}
        //             delete={() => props.onWordDeleted(info.item.key)}
        //             //key1={info.item.key}
        //         />
        //     )}
        // />
        <View style={props.dims === "portrait" ? styles.container : styles.landspacecontainer}>
            <SwipeListView
                data={props.words}
                renderItem={(data, rowMap) => (
                    <Card
                        word={data.item.word}
                        meaning={data.item.meaning}
                        explanation={data.item.explanation}
                        length={data.item.explanation.length}
                        close={props.onDelete}
                        delete={() => props.onWordDeleted(data.item.key)}
                    />
                )}
                renderHiddenItem={(data, rowMap) => (
                    <View style={styles.rowBack}>
                        <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={() => props.onWordDeleted(data.item.key)}>
                            <Animated.View
                                style={[
                                    styles.trash
                                ]}
                            >
                                 <Icon name="ios-trash" size={30} color="red" />
                            </Animated.View>
                        </TouchableOpacity>
                    </View>
                )}
                //leftOpenValue={75}
                rightOpenValue={-70}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    },
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    landspacecontainer: {
        backgroundColor: 'white',
        flex: 1,
        width: "90%",
        marginLeft: 70
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        //backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        //bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        //top: 0,
        width: 75,
        //height: 30,
    },
    landspacebackRightBtn: {
        alignItems: 'flex-end',
        marginRight: 30,
        //bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        //top: 0,
        width: 75,
        //height: 30
    },
    backRightBtnRight: {
        //backgroundColor: 'red',
        right: 0
    },
    trash: {
        height: 25,
        width: 25,
    }
});

export default CardList;