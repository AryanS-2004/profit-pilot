import { usePathname, useRouter } from "expo-router";
import { styles } from "./floating-window.style";
import { TouchableOpacity, View, Image } from "react-native";
import assets from "@/assets/assets";

export default function FloatingWindow() {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <>
      <View style={styles.floatingWindow}>
        <TouchableOpacity style={styles.iconButton}
          onPress={() => router.navigate('/home')}
        >
          <Image source={pathName === '/home' ? assets.Home : assets.HomeGray} style={styles.iconButton} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}
          onPress={() => router.navigate('/card')}
        >
          <Image source={pathName === '/card' ? assets.Card : assets.CardGray} style={styles.iconButton} />

        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}
          onPress={() => router.navigate('/qr')}
        >
          <Image source={pathName === '/qr' ? assets.Scanner : assets.ScannerGray} style={styles.iconButton} />
        </TouchableOpacity>
      </View>
    </>
  )
}