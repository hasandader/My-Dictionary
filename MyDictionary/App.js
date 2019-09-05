import { Navigation } from "react-native-navigation";

import HomeScreen from "./src/screen/Home/Home";
import DictionaryScreen from "./src/screen/Dictionary/Dictionary";


Navigation.registerComponent("dictionary.HomeScreen", 
() => HomeScreen
);

Navigation.registerComponent("dictionary.DictionaryScreen", 
() => DictionaryScreen
);

Navigation.startSingleScreenApp({
  screen: {
    screen: "dictionary.DictionaryScreen"
  }
});