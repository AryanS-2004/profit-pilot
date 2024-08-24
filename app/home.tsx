import { Link, useRouter } from 'expo-router';
import { StyleSheet, View, Text, StatusBar, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import icons from '../assets/assets'
import { homeStyles } from './styles/home.style';
import ProfileCard from '@/components/profile-card/profile-card';

export default function HomeScreen() {

  const router = useRouter();
  return (
    <>
      <ScrollView style={homeStyles.container}>
        <View>
          <ProfileCard />
        </View>
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
