import { Link, useRouter } from 'expo-router';
import { StyleSheet, View, Text, Image, StatusBar, TouchableOpacity, Dimensions, Pressable } from 'react-native';
import icons from '../../assets/assets'
import { styles } from './card-card.style';
import { userData } from '@/constants/UserData';
import assets from '../../assets/assets';
import { ThemeColors } from '@/constants/Colors';
import { useState } from 'react';


export default function Card({ item }: { item: CardType }) {

  const [showBalance, setShowBalance] = useState<boolean>(true);
  const router = useRouter();
  return (
    <>
      <Pressable
        style={[styles.container, {
          backgroundColor: parseInt(item.id) % 2 ? ThemeColors.pBlue : ThemeColors.pGreen
        }]}

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
        <View style={styles.topContainer}>
          <View style={styles.usContainer}>
            <Image source={assets.USA} style={styles.usaIcon} />
            <Text style={styles.usaText}>US Dollar</Text>
          </View>
          <View>
            <Image source={assets.Visa} style={styles.visaIcon} />
          </View>
        </View>
        <View style={styles.balanceContainer}>
          <View>
            <Text style={styles.balanceText}>Your Balance</Text>
          </View>
          <View style={styles.balanceEyeContainer}>
            <View>
              <Text style={styles.balance}>${showBalance ? item.balance : "XXXX.XX"}</Text>
            </View>
            <Pressable
              onPress={() => setShowBalance(!showBalance)}
              style={styles.eyeContainer}
            >
              <Image source={showBalance ? assets.EyeOpen : assets.EyeClose} style={styles.eyeIcon} />
            </Pressable>
          </View>
        </View>
        <View style={styles.accountContainer}>
          <View>
            <View >
              <Text style={styles.accountTitle1}>Account Number</Text>
            </View>
            <View >
              <Text style={styles.accountTitle2}>**** {item.accountNumber.slice(-4)}</Text>
            </View>
          </View>
          <View>
            <View >
              <Text style={styles.accountTitle1}>Valid Thru</Text>
            </View>
            <View >
              <Text style={styles.accountTitle2}>{item.expiry}</Text>
            </View>
          </View>
        </View>
      </Pressable >
    </>
  );
}

