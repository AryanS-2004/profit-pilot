import { Link, useRouter } from 'expo-router';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, Dimensions } from 'react-native';
import icons from '../assets/assets'
import ProfileCard from '@/components/profile-card/profile-card';
import { cardStyles } from './styles/card.style';

export default function CardScreen() {
  const router = useRouter();

  return (
    <>
      <View style={cardStyles.container}>
        <Text>
          Card Screen
        </Text>
        <ProfileCard />
      </View>
      <View style={cardStyles.floatingWindow}>
        <TouchableOpacity style={cardStyles.iconButton}
          onPress={() => router.navigate('/home')}
        >
          <Image source={icons.Home} style={cardStyles.iconButton} />
        </TouchableOpacity>
        <TouchableOpacity style={cardStyles.iconButton}
          onPress={() => router.navigate('/card')}
        >
          <Image source={icons.CardGray} style={cardStyles.iconButton} />

        </TouchableOpacity>
        <TouchableOpacity style={cardStyles.iconButton}
          onPress={() => router.navigate('/qr')}
        >
          <Image source={icons.ScannerGray} style={cardStyles.iconButton} />
        </TouchableOpacity>
      </View>
    </>
  );
}
