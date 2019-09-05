import React, { Component } from "react";
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import { connect } from "react-redux";
import Emoji from 'react-native-emoji';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/MaterialIcons";

import CradList from "../../components/CardList/CardList";
import { getWords, deleteWords } from "../../store/actions/words";

let wordList;
class Dictionary extends Component {

    state = {
        viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
        delete: false
    }

    static navigatorButtons = {
        leftButtons: [],
        rightButtons: [
            {
                id: 'backBtn',
                title: 'New Word',
                //icon: 'arrow'
            }
        ],
    };

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
        Dimensions.addEventListener("change", this.updateStyles);
    }

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
            if (event.id == 'backBtn') { // this is the same id field from the static navigatorButtons definition
                this.wordListHandler();
            }
        }
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

        setTimeout(() => this.props.onLoadWords(), 1);
      };

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.wordList !== this.props.words){
          wordList = this.props.onLoadWords();
          wordList = this.props.items;
        }
      }

    componentDidMount() {
        this.props.onLoadWords();
    }

    onDeleteHandler = () => {
        this.setState({
            delete: true
        });

        setTimeout(() => this.props.onLoadWords(), 1);

    };

    onDone = () => {
        this.setState({
            delete: false
        });

        setTimeout(() => this.props.onLoadWords(), 1);
    };

    onDeleteWord = (key) => {
        this.props.onDelete(key);

        setTimeout(() => this.props.onLoadWords(), 1);
    }

    addWordScreen = () => {
        this.props.navigator.push({
            screen: "dictionary.HomeScreen"
        });
    };

    render() {

        wordList = this.props.words;
        let text = "Delete Words";
        let close = this.state.delete;
        if (this.state.delete) {
            text = "Done";
        }

        let content;
        //let length = wordList.length

        if (wordList.length !== 0) { //wordList && wordList.length
            content = (
                <CradList words={this.props.words} onDelete={close} onWordDeleted={this.onDeleteWord} dims={this.state.viewMode} />
            );
        } else {
            content = (
                <View style={styles.startContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.contentText}>Your list is still empty</Text>
                        <Text style={styles.contentText}>Start learning and fill it now <Emoji name="nerd_face" style={{ fontSize: 20 }} /></Text>
                    </View>
                    <Button
                        icon={
                            <Icon
                                name="note-add"
                                size={30}
                                color="white"
                            />
                        }
                        title="Add New Word"
                        ViewComponent={LinearGradient}
                        linearGradientProps={{
                            colors: ['#5193F5', '#04569F'],
                            start: { x: 0, y: 0.5 },
                            end: { x: 1, y: 0.5 },
                        }}
                        onPress={this.addWordScreen}
                        buttonStyle={{ borderRadius: 10 }}
                    />
                </View>
            );
        }
        return (
            <View style={styles.container}>
                {/* <TouchableOpacity style={styles.delete} onPress={this.state.delete ? this.onDone : this.onDeleteHandler} >
                    <Text style={styles.text}>{text}</Text>
                </TouchableOpacity> */}
                {/* <CradList words={this.props.words} onDelete={close} onWordDeleted={this.onDeleteWord} /> */}
                {content}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    startContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //marginBottom: 100
        bottom: 80
    },
    textContainer: {
        alignItems: 'center',
        //borderWidth: 1,
        marginBottom: 40
    },
    contentText: {
        lineHeight: 30
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
    }
});

const mapStateToProps = state => {
    return {
        words: state.words.words
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadWords: () => dispatch(getWords()),
        onDelete: (key) => dispatch(deleteWords(key))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dictionary);