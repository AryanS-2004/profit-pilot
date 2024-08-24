import { ThemeColors } from "@/constants/Colors";
import { ThemeFont } from "@/constants/Font";
import { ThemeText } from "@/constants/Text";
import { Dimensions, StatusBar, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

export const cardStyles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    marginHorizontal: 'auto',
    marginTop: 24,
    textAlign: 'center',
    paddingVertical: height * 0.02,
    borderRadius: height * 0.02,
    backgroundColor: ThemeColors.pBlue,
    elevation: height * 0.01,
    shadowColor: ThemeColors.pBlue,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    color: ThemeColors.pBlack,
    alignSelf: 'center',
    fontSize: ThemeText.n,
    fontFamily: ThemeFont.sb,
    fontWeight: "500",
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    minHeight: Dimensions.get('window').height,
    paddingTop: height * 0.05,
    paddingBottom: height * 0.04,
    paddingHorizontal: height * 0.03,
    backgroundColor: ThemeColors.bgGray
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
    paddingHorizontal: height * 0.005,
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
    width: height * 0.03,
  },
  listContainer: {
    width: '100%',
    marginTop: height * 0.025,
    gap: height * 0.025,
  },
  title: {
    fontFamily: ThemeFont.sb,
    fontSize: ThemeText.m,
    marginTop: height * 0.01,

  },
})