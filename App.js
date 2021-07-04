import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Welcome: WelcomeScreen,
  },
  {
    initialRouteName: "Welcome",
    defaultNavigationOptions: {
      title: "Vehicles-app",
    },
  }
);

export default createAppContainer(navigator);
