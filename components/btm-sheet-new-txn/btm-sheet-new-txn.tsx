import { useMemo } from "react"
import { View, Text } from "react-native"
import BottomSheet from '@gorhom/bottom-sheet'



export default function BottomSheetNewTransaction() {

  const snapPoints = useMemo(() => ['43%', '100%'], [])
  return (
    <>
      <BottomSheet
        snapPoints={snapPoints}
        enablePanDownToClose={true}
      >
        <View>
          <Text>New Transaction Sheet!!🤩🤩</Text>
        </View>
      </BottomSheet>
    </>
  )
}