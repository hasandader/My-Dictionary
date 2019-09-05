import React from "react";
import { StyleSheet, FlatList } from "react-native";

import Card from "../Card/Card";

const CardList = props => {
    return (
        <FlatList 
            style={styles.listContainer}
            contentContainerStyle={{alignItems: 'center',
            justifyContent: 'center' , paddingBottom: 5}}
            data={props.words}
            renderItem={(info) => (
                <Card 
                    word={info.item.word}
                    meaning={info.item.meaning}
                    explanation={info.item.explanation}
                    close={props.onDelete}
                    delete={() => props.onWordDeleted(info.item.key)}
                    screenMode={props.dims}
                />
            )}
        /> 
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
        flex: 1
    }
});

export default CardList;