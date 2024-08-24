import { ThemeColors } from "@/constants/Colors";
import { ThemeFont } from "@/constants/Font";
import { ThemeText } from "@/constants/Text";
import { Dimensions, StatusBar, StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  accountContainer: {
  },
  accountHeading: {
    fontFamily: ThemeFont.med,
    fontSize: ThemeText.l,
    marginVertical: 4,
    marginTop: 8,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    minHeight: Dimensions.get('window').height,
    paddingTop: 20,
    marginBottom: 36,
    paddingHorizontal: 24,
  },
  floatingWindow: {
    position: 'absolute',
    bottom: 40, // Position the bar slightly above the bottom edge
    left: 0,
    right: 0,
    height: 60,
    alignSelf: 'center',
    backgroundColor: '#ffffff', // Bar background color
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 4,
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
  listContainer: {
    width: '100%',
    marginVertical: 8,
    gap: 20,
  },
  plusContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 100,
    backgroundColor: ThemeColors.pBlack,
  },
  plusIcon: {
    width: 32,
    height: 32,
  },
  reqSendContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  requestContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 100,
    backgroundColor: ThemeColors.sWhite,
  },
  requestIcon: {
    height: 32,
    width: 32,
  },
  requestText: {
    fontFamily: ThemeFont.sb,
    fontSize: ThemeText.n,
  },
})