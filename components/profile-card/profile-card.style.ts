import { ThemeColors } from "@/constants/Colors";
import { ThemeFont } from "@/constants/Font";
import { ThemeText } from "@/constants/Text";
import { Dimensions, StatusBar, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: height * 0.075,
    width: "100%",

  },
  imgContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: height * 0.015
  },
  nameContainer: {
    paddingVertical: height * 0.01,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  nameContainerText1: {
    color: ThemeColors.pGray,
    fontSize: ThemeText.s,
    fontWeight: "500",
    fontFamily: ThemeFont.med,
  },
  nameContainerText2: {
    color: ThemeColors.pBlack,
    fontSize: ThemeText.n,
    fontWeight: "500",
    fontFamily: ThemeFont.sb,
  },
  notificationIcon: {
    width: height * 0.035,
    height: height * 0.035,
  },
  notificationIconContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  profileIcon: {
    width: height * 0.065,
    height: height * 0.065,
  },
})