import { ThemeColors } from "@/constants/Colors";
import { ThemeFont } from "@/constants/Font";
import { ThemeText } from "@/constants/Text";
import { Dimensions, StatusBar, StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 60,
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
    gap: 12
  },
  nameContainer: {
    paddingVertical: 8,
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
    width: 24,
    height: 24,
  },
  notificationIconContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  profileIcon: {
    width: 52,
    height: 52,
  },
})