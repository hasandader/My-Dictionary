// import { ADD_WORDS, DELETE_WORDS } from "../actions/actionTypes";
// //import AsyncStorage from '@react-native-community/async-storage';
// //import console = require("console");

// export const addWord = async (word, meaning, explanation) => {
//     //return dispatch => {
//         try {
//             let words = [];
//             let priorWords = await AsyncStorage.getItem('dictionary');
//             if (priorWords === null) { words = []; }
//             let parsedPriorWords = JSON.parse(priorWords);
//             const dictionaryWords = {
//                 key:  '_' + Math.random().toString(36).substr(2, 9),
//                 word: word,
//                 meaning: meaning,
//                 explanation: explanation
//             };
//             words = [...parsedPriorWords, dictionaryWords];
//             AsyncStorage.setItem('dictionary', JSON.stringify(words));

//             alert(words);
//         } catch (error) {
//             alert(error);
//         }
//     //};
// };

// export const getWords = () => {
//     return dispatch => {
//         try {
//             let list = AsyncStorage.getItem('dictionary')
//             list = JSON.parse(list);
//             // const words = [];
//             // for (let key in list) {
//             //     words.push({
//             //         ...list[key],
//             //         key: key
//             //     });
//             // }
//             dispatch(addWords(list));
//         }

//         catch (err) {
//             alert(err);
//         }
//     };
// };

// export const deleteWords = (key) => {
//     return dispatch => {
//         fetch("https://chat-app-adca6.firebaseio.com/dictionary/" + key + ".json" , {
//             method: "DELETE"
//         })
//         .catch(err => {
//             alert("Something went wrong, sorry :/");
//         })
//         .then(res => res.json())
//         .then(parsedRes => {
//             console.log("Done!");
//         });
//     };
// };

// export const addWords = words => {
//     return {
//         type: ADD_WORDS,
//         words: words
//     };
// };

// export const deleteWord = (key) => {
//     return {
//         type: DELETE_WORDS,
//         key: key
//     };
// };