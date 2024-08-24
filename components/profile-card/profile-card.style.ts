import { ThemeColors } from "@/constants/Colors";
import { ThemeText } from "@/constants/Text";
import { Dimensions, StatusBar, StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    width: "90%",
    marginHorizontal: 'auto',
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  nameContainerText1: {
    color: ThemeColors.pGray,
    fontSize: ThemeText.sSize,
    fontWeight: "500"
  },
  nameContainerText2: {
    color: ThemeColors.pBlack,
    fontSize: ThemeText.nSize,
    fontWeight: "500"
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
    width: 48,
    height: 48,
  },
})