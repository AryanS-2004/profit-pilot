import { Link, useRouter } from 'expo-router';
import { StyleSheet, View, Text, Image, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import icons from '../../assets/assets'
import { styles } from './profile-card.style';
import { userData } from '@/constants/UserData';
import assets from '../../assets/assets';


export default function ProfileCard() {

  const router = useRouter();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.imgContainer}>
            <Image source={userData.icon} style={styles.profileIcon} />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameContainerText1}>Welcome Back,</Text>
            <Text style={styles.nameContainerText2}>{userData.name}</Text>
          </View>
        </View>
        <View style={styles.notificationIconContainer}>
          <Image source={assets.Notification} style={styles.notificationIcon} />
        </View>
      </View >
    </>
  );
}




// HOME  -> CARD CLICK ->  STATISTICS PAGE




