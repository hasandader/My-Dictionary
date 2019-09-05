import { ADD_WORDS, DELETE_WORDS } from "../actions/actionTypes";
//import console = require("console");

export const addWord = (word, meaning, explanation) => {
    return dispatch => {
        const wordSet = {
            word: word,
            //family: family,
            meaning: meaning,
            explanation: explanation,
            //key1: '_' + Math.random().toString(36).substr(2, 9)
        };
        fetch("https://chat-app-adca6.firebaseio.com/dictionary.json", {
            method: "POST",
            body: JSON.stringify(wordSet),
            headers: {
                "Content-Type": "application/json"
              }
        })
        .catch(err => console.log(err))
        .then(res => res.json())
        .then(parsedRes => {
            console.log(parsedRes);
        });
    };
};

export const getWords = () => {
    return dispatch => {
        fetch("https://chat-app-adca6.firebaseio.com/dictionary.json")
        .catch(err => console.log(err))
        .then(res => res.json())
        .then(parsedRes => {
            const words = [];
            for (let key in parsedRes) {
                words.push({
                    ...parsedRes[key],
                    key: key
                });
            }
            dispatch(addWords(words));
        })
        .catch(err => {
            alert("Something went wrong, sorry :/" + err);
            console.log(err);
        });
    };
};

export const deleteWords = (key) => {
    return dispatch => {
        fetch("https://chat-app-adca6.firebaseio.com/dictionary/" + key + ".json" , {
            method: "DELETE"
        })
        .catch(err => {
            alert("Something went wrong, sorry :/");
        })
        .then(res => res.json())
        .then(parsedRes => {
            console.log("Done!");
        });
    };
};

export const addWords = words => {
    return {
        type: ADD_WORDS,
        words: words
    };
};

export const deleteWord = (key) => {
    return {
        type: DELETE_WORDS,
        key: key
    };
};