import { ThemeColors } from "@/constants/Colors";
import { ThemeFont } from "@/constants/Font";
import { ThemeText } from "@/constants/Text";
import { Dimensions, StatusBar, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

export const homeStyles = StyleSheet.create({
  accountContainer: {
  },
  accountHeading: {
    fontFamily: ThemeFont.sb,
    fontSize: ThemeText.l,
    marginVertical: height * 0.005,
    marginTop: height * 0.01,
  },
  btmSheetHistoryContainer: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  btmSheetHistoryTitle: {
    fontFamily: ThemeFont.sb,
    fontSize: ThemeText.m,
    color: ThemeColors.pBlack,
  },
  btmSheetHistoryTitle2: {
    fontFamily: ThemeFont.med,
    fontSize: ThemeText.s,
    color: ThemeColors.pGray,
  },
  btmSheetHistorytitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height * 0.01,
  },
  btmSheetNewTxnContainer: {
    paddingHorizontal: height * 0.02,
  },
  btmSheetNewTxnClose: {
    fontFamily: ThemeFont.sb,
    fontSize: ThemeText.ms,
    color: ThemeColors.pGray,
  },
  btmSheetNewTxnTitle: {
    fontFamily: ThemeFont.sb,
    fontSize: ThemeText.m,
    color: ThemeColors.pBlack,
  },
  btmSheetNewTxnInputBox: {
    borderRadius: height * 0.025,
    backgroundColor: ThemeColors.lGray,
    padding: height * 0.01,
    marginTop: height * 0.01,
  },
  btmSheetNewTxnInputLabel: {
    marginTop: height * 0.01,
    fontFamily: ThemeFont.sb,
    fontSize: ThemeText.ms,
    color: ThemeColors.pGray,
  },
  btmSheetNewTxnSendBtnContainer: {
    padding: height * 0.01,
    paddingVertical: height * 0.015,
    marginTop: height * 0.02,
    backgroundColor: ThemeColors.pBlack,
    borderRadius: height * 0.015,
    width: width * 0.5,
    alignSelf: 'center'
  },
  btmSheetNewTxnSendBtnText: {
    color: ThemeColors.bgWhite,
    fontFamily: ThemeFont.med,
    fontSize: ThemeText.ms,
    alignSelf: 'center'
  },
  btmSheetNewTxnCardContainer: {
    borderRadius: height,
    backgroundColor: ThemeColors.sWhite,
    marginTop: height * 0.01,
  },
  btmSheetNewTxnCardText: {
    paddingVertical: height * 0.015,
    paddingHorizontal: height * 0.04,
    borderRadius: height,
    fontFamily: ThemeFont.med,
    fontSize: ThemeText.n
  },
  btmSheetNewTxnListContainer: {
    width: '100%',
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    minHeight: Dimensions.get('window').height,
    paddingTop: height * 0.025,
    paddingHorizontal: width * 0.05,
    backgroundColor: ThemeColors.lGray
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
    width: height * 0.03,
    height: height * 0.03,
  },
  listContainer: {
    width: '100%',
    marginVertical: 8,
    gap: height * 0.025,
  },
  plusContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: height * 0.02,
    borderRadius: height,
    backgroundColor: ThemeColors.pBlack,
  },
  plusIcon: {
    width: height * 0.04,
    height: height * 0.04,
  },
  reqSendContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.015,
  },
  requestContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: height * 0.01,
    paddingHorizontal: height * 0.015,
    borderRadius: height,
    backgroundColor: ThemeColors.bgWhite,
  },
  requestIcon: {
    height: height * 0.025,
    width: height * 0.025,
  },
  requestText: {
    fontFamily: ThemeFont.sb,
    fontSize: ThemeText.n,
  },
  todayText: {
    fontFamily: ThemeFont.sb,
    fontSize: ThemeText.ms,
    color: ThemeColors.pGray,
    marginVertical: height * 0.01,
  },
  transactionItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    marginVertical: height * 0.01,
  },
  transactionTitle: {
    fontFamily: ThemeFont.sb,
    fontSize: ThemeText.ms,
    color: ThemeColors.pBlack
  },
  transactionTitleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  transactionTime: {
    fontFamily: ThemeFont.reg,
    fontSize: ThemeText.ms,
    color: ThemeColors.pGray
  },
  transactionAmount: {
    fontFamily: ThemeFont.reg,
    fontSize: ThemeText.n,
  },
  transactionLogo: {
    width: height * 0.03,
    height: height * 0.03,
  },
  transactionLogoContainer: {
    padding: height * 0.015,
    borderRadius: height,
    backgroundColor: ThemeColors.lGray
  },
})