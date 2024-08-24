import { ThemeText } from "@/constants/Text";
import { ThemeColors } from "@/constants/Colors";
import { StatusBar, StyleSheet } from "react-native";
import { ThemeFont } from "@/constants/Font";

export const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: StatusBar.currentHeight,
    paddingTop: 40,
    marginBottom: 36,
    paddingHorizontal: 24,
  },
  buttonContainer: {
    width: "100%",
    marginHorizontal: 'auto',
    textAlign: 'center',
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: ThemeColors.pBlack,
    elevation: 8,
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
    gap: 16,
    marginBottom: 28
  },
  titleText: {
    color: ThemeColors.pBlack,
    fontSize: ThemeText.l,
    fontFamily: ThemeFont.sb,
  }
})