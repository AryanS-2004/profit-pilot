import { ThemeText } from "@/constants/Text";
import { ThemeColors } from "@/constants/Colors";
import { Dimensions, StatusBar, StyleSheet } from "react-native";
import { ThemeFont } from "@/constants/Font";

const { height, width } = Dimensions.get('window');

export const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: StatusBar.currentHeight,
    paddingTop: height * 0.05,
    paddingBottom: height * 0.025,
    paddingHorizontal: width * 0.05,
    backgroundColor: '#fbfbfc'
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    width: "100%",
    marginHorizontal: 'auto',
    textAlign: 'center',
    paddingVertical: height * 0.02,
    borderRadius: height * 0.02,
    backgroundColor: ThemeColors.pBlack,
    elevation: height * 0.01,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    color: ThemeColors.pWhite,
    alignSelf: 'center',
    fontSize: ThemeText.n,
    fontFamily: ThemeFont.med,
    fontWeight: "500",
  },
  graphicContainer: {},
  graphic: {
    maxWidth: '100%',
    height: height * 0.48,
  },
  text1: {
    color: ThemeColors.pBlack,
    fontSize: ThemeText.xxxxl,
    lineHeight: ThemeText.xxxxl + 4,
    fontFamily: ThemeFont.reg,
  },
  text2: {
    color: ThemeColors.pBlack,
    fontSize: ThemeText.xxxxl,
    lineHeight: ThemeText.xxxxl,
    fontFamily: ThemeFont.sb,
  },
  text3: {
    fontFamily: ThemeFont.reg,
    color: ThemeColors.pGray,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: height * 0.02,
    marginBottom: height * 0.035
  },
  titleText: {
    color: ThemeColors.pBlack,
    fontSize: ThemeText.l,
    fontFamily: ThemeFont.sb,
  }
})