import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import {  } from 'react-native';
import { WebView } from "react-native-webview";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

import Transak from "./src/components/Transak";
import Rapid from "./src/components/Rapid";
// import Home from "./src/components/Home";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Follow from "./src/components/Follow";

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Buy/Sell Crypto using Transak" component={Transak} />
      <Drawer.Screen name="About" component={TabNavigator} />
      {/* <Drawer.Screen name="About" component={About} /> */}
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="Follow" component={Follow} />
      {/* <Drawer.Screen name="Rapid" component={Rapid} /> */}
    </Drawer.Navigator>
  );
}

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tab1" component={Tab1} />
        <Tab.Screen name="Tab2" component={Tab2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default function App() {
  return (
    <>
      <NavigationContainer>
        {/* <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Transak} />
          <Drawer.Screen name="About" component={About} />
          <Drawer.Screen name="Contact" component={Contact} />
          <Drawer.Screen name="Follow" component={Follow} />
          <Drawer.Screen name="Rapid" component={Rapid} />
        </Drawer.Navigator> */}
        <Stack.Navigator>
        <Stack.Screen name="Transak" component={DrawerNavigator} />
        <Stack.Screen name="Rapid" component={Rapid} />
      </Stack.Navigator>
      </NavigationContainer>
      {/* <Rapid/> */}
      {/* <Transak /> */}
    </>
  );
}
function Tab1() {
  return (
    <>
    <Text>Tab1</Text>
    </>
  );
}
function Tab2() {
  return (
    <>
    <Text>Tab2</Text>
    </>
  );
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection:'column',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
