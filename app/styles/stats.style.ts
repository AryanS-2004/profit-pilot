import { ThemeColors } from "@/constants/Colors";
import { ThemeFont } from "@/constants/Font";
import { ThemeText } from "@/constants/Text";
import { Dimensions, StatusBar, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

export const statsStyles = StyleSheet.create({
  chartOption: {
    fontFamily: ThemeFont.sb,
    fontSize: ThemeText.s,
    color: ThemeColors.pBlack
  },
  chartOptionSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: height * 0.005,
    backgroundColor: ThemeColors.bgGray,
    paddingVertical: height * 0.01,
    paddingHorizontal: height * 0.015,
    borderRadius: height,
  },

  chartSectionContainer: {
    backgroundColor: ThemeColors.sWhite,
    padding: height * 0.02,
    borderRadius: height * 0.02,
    // borderBottomEndRadius: 0,
    // borderBottomStartRadius: 0,

  },
  chartSectionHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chartSectionTitle: {
    fontFamily: ThemeFont.bold,
    fontSize: ThemeText.n,
  },
  chevDownIcon: {
    width: height * 0.02,
    height: height * 0.02,
  },
  container: {
    flex: 1,
    minHeight: Dimensions.get('window').height - height * 0.1,
    paddingTop: height * 0.015,
    paddingBottom: height * 0.04,
    paddingHorizontal: height * 0.03,
    backgroundColor: ThemeColors.bgGray,
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
    paddingHorizontal: 4,
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
    height: height * 0.03,
  },
  listContainer: {
    width: '100%',
    justifyContent: 'space-between'
  },
  monthContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: height,
    padding: height * 0.01,
    backgroundColor: ThemeColors.sWhite,
    marginVertical: height * 0.015,
  },
  monthText: {
    padding: height * 0.015,
    borderRadius: height,
    fontFamily: ThemeFont.med
  }
})