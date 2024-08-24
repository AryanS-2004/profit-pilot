import { ThemeColors } from "@/constants/Colors";
import { ThemeFont } from "@/constants/Font";
import { ThemeText } from "@/constants/Text";
import { Dimensions, StatusBar, StyleSheet } from "react-native";

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  accountContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  accountTitle1: {
    color: ThemeColors.lGray,
    fontFamily: ThemeFont.sb,
    fontSize: ThemeText.s,
  },
  accountTitle2: {
    color: ThemeColors.pBlack,
    fontFamily: ThemeFont.sb,
    fontSize: ThemeText.n,
    marginTop: 3,
  },
  balance: {
    fontFamily: ThemeFont.sb,
    fontSize: ThemeText.xl,
    color: ThemeColors.pBlack,
  },
  balanceContainer: {
    marginTop: 8,
  },
  balanceEyeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceText: {
    color: ThemeColors.lGray,
    fontFamily: ThemeFont.sb,
    fontSize: ThemeText.ms,
  },
  container: {
    width: width * 0.9 * 0.8,
    padding: 24,
    borderRadius: 30,
  },
  eyeContainer: {
    borderColor: ThemeColors.lGray,
    borderWidth: 0.5,
    borderRadius: 100,
    padding: 6,
  },
  eyeIcon: {
    width: 32,
    height: 32,
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  usContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    padding: 4,
    paddingRight: 12,
    borderRadius: 100,
    backgroundColor: ThemeColors.lGray,
  },
  usaIcon: {
    width: 32,
    height: 32,
  },
  usaText: {
    fontFamily: ThemeFont.sb,
    fontSize: ThemeText.ms,
    color: ThemeColors.pBlack,
  },
  visaIcon: {
    width: 70,
    height: 24,
  },
})