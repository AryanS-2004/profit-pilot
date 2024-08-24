import { Link, useRouter } from 'expo-router';
import { StyleSheet, View, Text, Image, StatusBar, TouchableOpacity, Dimensions, Pressable } from 'react-native';
import icons from '../../assets/assets'
import { styles } from './card-card-3.style';
import { userData } from '@/constants/UserData';
import assets from '../../assets/assets';
import { ThemeColors } from '@/constants/Colors';
import { useState } from 'react';


export default function Card3({ item }: { item: any }) {

  const [showBalance, setShowBalance] = useState<boolean>(true);
  const router = useRouter();
  return (
    <>
      <Pressable
        style={[styles.container]}
        onPress={
          () => {
            router.push({
              pathname: '/Statistic',
              params: {
                item: JSON.stringify(item)
              }
            })
          }}
      >
        <View
          style={[styles.topContainer, {
            backgroundColor: item.id % 2 ? ThemeColors.pGreen : ThemeColors.pBlack,
          }]}
        >
          <View style={styles.wifiContainer}>
            <Image source={item.id % 2 ? assets.Wifi : assets.WifiWhite} style={styles.wifiIcon} />
          </View>
          <View style={styles.numberContainer}>
            <Text style={[styles.number, {
              color: item.id % 2 ? ThemeColors.pBlack : ThemeColors.sWhite
            }]}>{item.number.slice(0, 4)}</Text>
            <Text style={[styles.number, {
              color: item.id % 2 ? ThemeColors.pBlack : ThemeColors.sWhite
            }]}>{item.number.slice(4, 8)}</Text>
            <Text style={[styles.number, {
              color: item.id % 2 ? ThemeColors.pBlack : ThemeColors.sWhite
            }]}>{item.number.slice(8, 12)}</Text>
            <Text style={[styles.number, {
              color: item.id % 2 ? ThemeColors.pBlack : ThemeColors.sWhite
            }]}>{item.number.slice(12, 16)}</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.name}>
              {item.name}
            </Text>
            <Text style={styles.expiry}>
              Exp <Text style={styles.expiryDate}>{item.expiry}</Text>
            </Text>
          </View>
          <View>
            <Image source={assets.Visa} style={styles.visaIcon} />
          </View>
        </View>
      </Pressable >
    </>
  );
}

