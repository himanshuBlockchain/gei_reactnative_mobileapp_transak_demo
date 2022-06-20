import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import {  } from 'react-native';
import { WebView } from "react-native-webview";

export default function Contact() {
  return (
    <>
      {/* <View>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View> */}
      <WebView
        source={{
          html: '<iframe width="100%" height="100%" src="https://www.rapidinnovation.io/" frameborder="0"></iframe>',
        }}
        scalesPageToFit={false}
      />
      <Text
        style={{
          color: "#aabbcc",
          textAlignVertical: "center",
          fontWeight: "700",
          textAlign: "center",
          fontSize: 12,
        }}
      >
        Contact Us{" "}
      </Text>
      <Text
        style={{
          color: "#aabbcc",
          textAlignVertical: "center",
          fontWeight: "700",
          textAlign: "center",
          fontSize: 15,
        }}
      >
        Powered By RapidInnovation.io
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection:'column',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
