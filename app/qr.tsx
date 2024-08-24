import { Link, useRouter } from 'expo-router';
import { StyleSheet, View, Text, Image, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import icons from '../assets/assets'
import { qrStyles } from './styles/qr.style';

export default function QRScreen() {

  const router = useRouter();
  return (
    <>
      <View style={qrStyles.container}>
        <Text>
          QR Screen
        </Text>
      </View>
      <View style={qrStyles.floatingWindow}>
        <TouchableOpacity style={qrStyles.iconButton}
          onPress={() => router.navigate('/home')}
        >
          <Image source={icons.Home} style={qrStyles.iconButton} />
        </TouchableOpacity>
        <TouchableOpacity style={qrStyles.iconButton}
          onPress={() => router.navigate('/card')}
        >
          <Image source={icons.CardGray} style={qrStyles.iconButton} />

        </TouchableOpacity>
        <TouchableOpacity style={qrStyles.iconButton}
          onPress={() => router.navigate('/qr')}
        >
          <Image source={icons.ScannerGray} style={qrStyles.iconButton} />
        </TouchableOpacity>
      </View>
    </>
  );
}

