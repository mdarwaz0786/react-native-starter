import "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import App from "./App.js";
import { name as appName } from "./app.json";

const Main = () => (
  <SafeAreaProvider>
    <PaperProvider>
      <App />
    </PaperProvider>
  </SafeAreaProvider>
);

AppRegistry.registerComponent(appName, () => Main);
