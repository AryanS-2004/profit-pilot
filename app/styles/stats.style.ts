import { Dimensions, StatusBar, StyleSheet } from "react-native";

export const statsStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    minHeight: Dimensions.get('window').height,
    paddingTop: 40,
    marginBottom: 36,
    paddingHorizontal: 24,
  },
  buttonContainer: {

  }
})