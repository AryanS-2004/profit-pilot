import { Link, useRouter } from 'expo-router';
import { StyleSheet, View, Text, StatusBar, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import icons from '../assets/assets'
import { homeStyles } from './styles/home.style';

export default function HomeScreen() {

  const router = useRouter();
  return (
    <>
      <ScrollView style={homeStyles.container}>
        <Text>
          Home Screen
        </Text>
        <Link href="/Statistic">View Stats</Link>
      </ScrollView>


      <View style={homeStyles.floatingWindow}>
        <TouchableOpacity style={homeStyles.iconButton}
          onPress={() => router.navigate('/home')}
        >
          <Image source={icons.Home} style={homeStyles.iconButton} />
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.iconButton}
          onPress={() => router.navigate('/card')}
        >
          <Image source={icons.CardGray} style={homeStyles.iconButton} />

        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.iconButton}
          onPress={() => router.navigate('/qr')}
        >
          <Image source={icons.ScannerGray} style={homeStyles.iconButton} />
        </TouchableOpacity>
      </View>
    </>
  );
}
