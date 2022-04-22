import React from "react";
import { StyleSheet, View, Text } from "react-native";

const SignupPage = () => {
  return (
    <View>
      <Text>{'This is the signup page'}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  logo: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default SignupPage;