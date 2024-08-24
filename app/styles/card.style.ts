import { Dimensions, StatusBar, StyleSheet } from "react-native";

export const cardStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    minHeight: Dimensions.get('window').height,
  },
  floatingWindow: {
    position: 'absolute',
    bottom: 40, // Position the bar slightly above the bottom edge
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#ffffff', // Bar background color
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 16, // Rounded corners
    marginHorizontal: 110, // Add some margin to the sides
    elevation: 5, // Add shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  iconButton: {
    padding: 0,
    width: 24,
  },
})