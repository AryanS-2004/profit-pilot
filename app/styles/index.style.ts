import { ThemeText } from "@/constants/Text";
import { ThemeColors } from "@/constants/Colors";
import { StatusBar, StyleSheet } from "react-native";

export const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  buttonContainer: {
    width: "80%",
    marginHorizontal: 'auto',
    marginTop: 'auto',
    marginBottom: 12,
    textAlign: 'center',
    paddingVertical: 12,
    borderRadius: 16,
    backgroundColor: ThemeColors.pBlack,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,

  },
  buttonText: {
    color: ThemeColors.pGray,
    alignSelf: 'center',
    fontSize: ThemeText.sHeight,
    lineHeight: ThemeText.sHeight,
  }
})