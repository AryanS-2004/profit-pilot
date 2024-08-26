import { useRouter } from 'expo-router';
import { View, Text, Image, Pressable } from 'react-native';
import { styles } from './card-card-3.style';
import assets from '../../assets/assets';
import { ThemeColors } from '@/constants/Colors';
import { useState } from 'react';


export default function Card3({ item }: { item: CardType }) {

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
            backgroundColor: parseInt(item.id) % 2 ? ThemeColors.pGreen : ThemeColors.pBlack,
          }]}
        >
          <View style={styles.wifiContainer}>
            <Image source={parseInt(item.id) % 2 ? assets.Wifi : assets.WifiWhite} style={styles.wifiIcon} />
          </View>
          <View style={styles.numberContainer}>
            <Text style={[styles.number, {
              color: parseInt(item.id) % 2 ? ThemeColors.pBlack : ThemeColors.sWhite
            }]}>{item.number.slice(0, 4)}</Text>
            <Text style={[styles.number, {
              color: parseInt(item.id) % 2 ? ThemeColors.pBlack : ThemeColors.sWhite
            }]}>{item.number.slice(4, 8)}</Text>
            <Text style={[styles.number, {
              color: parseInt(item.id) % 2 ? ThemeColors.pBlack : ThemeColors.sWhite
            }]}>{item.number.slice(8, 12)}</Text>
            <Text style={[styles.number, {
              color: parseInt(item.id) % 2 ? ThemeColors.pBlack : ThemeColors.sWhite
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

