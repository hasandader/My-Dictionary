import { Navigation } from "react-native-navigation";
import {Provider} from 'react-redux';

import HomeScreen from "./src/screen/Home/Home";
import DictionaryScreen from "./src/screen/Dictionary/Dictionary";
import configureStore from './src/store/configureStore';

const store = configureStore();


Navigation.registerComponent("dictionary.HomeScreen", 
() => HomeScreen,
store,
Provider
);

Navigation.registerComponent("dictionary.DictionaryScreen", 
() => DictionaryScreen,
store,
Provider
);

Navigation.startSingleScreenApp({
  screen: {
    screen: "dictionary.HomeScreen"
  }
});