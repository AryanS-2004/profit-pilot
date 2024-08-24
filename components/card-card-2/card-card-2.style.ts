import { ThemeColors } from "@/constants/Colors";
import { ThemeFont } from "@/constants/Font";
import { ThemeText } from "@/constants/Text";
import { Dimensions, StatusBar, StyleSheet } from "react-native";

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  accountContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  accountTitle1: {
    color: ThemeColors.sGray,
    fontFamily: ThemeFont.sb,
    fontSize: ThemeText.s,
  },
  accountTitle2: {
    color: ThemeColors.pBlack,
    fontFamily: ThemeFont.sb,
    fontSize: ThemeText.n,
    marginTop: height * 0.005,
  },
  balance: {
    fontFamily: ThemeFont.sb,
    fontSize: ThemeText.xl,
    color: ThemeColors.pBlack,
  },
  balanceContainer: {
    marginTop: height * 0.01,
  },
  balanceEyeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceText: {
    color: ThemeColors.sGray,
    fontFamily: ThemeFont.sb,
    fontSize: ThemeText.ms,
  },
  container: {
    width: '100%',
    padding: height * 0.03,
    borderRadius: height * 0.0375,
    backgroundColor: ThemeColors.sWhite,
  },
  eyeContainer: {
    borderRadius: height,
    padding: height * 0.0075,
    marginRight: '30%',
  },
  eyeIcon: {
    width: height * 0.04,
    height: height * 0.04,
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: height * 0.015,
  },
  usContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: height * 0.0075,
    alignItems: 'center',
    padding: height * 0.0075,
    paddingRight: height * 0.015,
    borderRadius: height,
    backgroundColor: ThemeColors.bgGray,
  },
  usaIcon: {
    width: height * 0.04,
    height: height * 0.04,
  },
  usaText: {
    fontFamily: ThemeFont.sb,
    fontSize: ThemeText.ms,
    color: ThemeColors.pBlack,
  },
  visaIcon: {
    width: height * 0.09,
    height: height * 0.03,
  },
})