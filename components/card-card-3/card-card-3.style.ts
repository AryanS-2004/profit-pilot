import { ThemeColors } from "@/constants/Colors";
import { ThemeFont } from "@/constants/Font";
import { ThemeText } from "@/constants/Text";
import { Dimensions, StatusBar, StyleSheet } from "react-native";

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 24,
    borderBottomStartRadius: height * 0.03,
    borderBottomEndRadius: height * 0.03,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: ThemeColors.White
  },
  container: {
    width: '100%',
    borderRadius: height * 0.03,
  },
  expiry: {
    fontFamily: ThemeFont.med,
  },
  expiryDate: {
    fontFamily: ThemeFont.bold,
  },
  name: {
    fontFamily: ThemeFont.med,
  },
  number: {
    fontFamily: ThemeFont.sb,
    fontSize: ThemeText.l,
  },
  numberContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.03,
  },
  topContainer: {
    padding: height * 0.03,
    borderTopStartRadius: height * 0.03,
    borderTopEndRadius: height * 0.03,
  },
  visaIcon: {
    width: height * 0.09,
    height: height * 0.03,
  },
  wifiContainer: {

  },
  wifiIcon: {
    width: height * 0.03,
    height: height * 0.03,
  },
})