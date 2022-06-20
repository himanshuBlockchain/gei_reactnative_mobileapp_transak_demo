import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import {  } from 'react-native';
import { WebView } from "react-native-webview";

export default function Transak({navigation}) {
  return (
    <>
      {/* <View>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View> */}
      <WebView
        source={{
          html: '<iframe width="100%" height="100%" src="https://staging-global.transak.com?apiKey=866d1237-ee1b-4010-8672-70d136e5ddfb" frameborder="0"></iframe>',
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
        This is a Demo Single Page App For GEI App
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
      <Button
        title="Go to Rapid"
         onPress={() => navigation.navigate('Rapid')}
      />
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
