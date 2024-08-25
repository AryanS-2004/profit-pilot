import { useMemo } from "react"
import { View, Text } from "react-native"
import BottomSheet from '@gorhom/bottom-sheet'


export default function BottomSheetTransactionHistory() {

  const snapPoints = useMemo(() => ['43%', '100%'], [])
  return (
    <>
      <BottomSheet
        snapPoints={snapPoints}
      >
        <View>
          <Text>This is Transaction History Sheet!!🤩🤩</Text>
        </View>

      </BottomSheet>
    </>
  )
}