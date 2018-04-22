import { StackNavigator } from "react-navigation";
import Dashboard from "./components/dashboard";
import About from "./components/about";

const RootStack = StackNavigator(
  {
    Dashboard: {
      screen: Dashboard
    },
    About: {
      screen: About
    }
  },
  {
    initialRouteName: "Dashboard"
  }
);

export default RootStack;
