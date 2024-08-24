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
    gap: 4,
    backgroundColor: ThemeColors.bgGray,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 100,
  },

  chartSectionContainer: {
    backgroundColor: ThemeColors.sWhite,
    padding: 16,
    borderRadius: 16,
    borderBottomEndRadius: 0,
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
    width: 16,
    height: 16,
  },
  container: {
    flex: 1,
    minHeight: Dimensions.get('window').height,
    paddingTop: 20,
    paddingBottom: 36,
    paddingHorizontal: 24,
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
    width: 24,
  },
  monthContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 100,
    padding: 12,
    backgroundColor: ThemeColors.sWhite,
    marginVertical: 32,
  },
  monthText: {
    padding: 12,
    borderRadius: 100,
    fontFamily: ThemeFont.med
  }
})