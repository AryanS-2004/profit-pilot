import { Dimensions, StatusBar, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export const qrStyles = StyleSheet.create({
  cameraContainer: {
    width: 200, // Adjust width to your preference
    height: 200, // Adjust height to your preference
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 10, // Optional: Add rounded corners
    overflow: 'hidden', // Optional: Ensure camera view is contained within rounded corners
  },
  camera: {
    flex: 1,
    width: width,
    height: height * 0.7, // Adjust height to your needs
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    minHeight: Dimensions.get('window').height,
    paddingTop: 40,
    paddingBottom: 36,
    paddingHorizontal: 24,
    backgroundColor: '#fbfbfc'
  },
  floatingWindow: {
    position: 'absolute',
    bottom: height * 0.05,
    left: 0,
    right: 0,
    height: height * 0.075,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 4,
    borderRadius: height * 0.02,
    marginHorizontal: width * 0.25,
    elevation: height * 0.01,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  iconButton: {
    padding: 0,
    width: 24,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scannedDataContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  scannedDataText: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
  },
})