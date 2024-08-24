import { Link, useRouter, useLocalSearchParams } from 'expo-router';
import { StyleSheet, View, Text, StatusBar, FlatList, TouchableOpacity, Image, Pressable, ScrollView } from 'react-native';
import { statsStyles } from './styles/stats.style';
import { userData } from '@/constants/UserData';
import Card2 from '@/components/card-card-2/card-card-2';
import { homeStyles } from './styles/home.style';
import assets from '@/assets/assets';
import { useState } from 'react';
import { ThemeColors } from '@/constants/Colors';
import LineChartExample from '@/components/chart/chart';

export default function StatsScreen() {

  const params = useLocalSearchParams();
  const { item } = params;
  const parsedItem = JSON.parse(item as string);
  const router = useRouter();

  const months = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];

  const [selectedMonth, setSelectedMonth] = useState<number>(0);

  if (parsedItem) {
    return (
      <>
        <View style={statsStyles.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <Card2 item={parsedItem} />
            <View style={statsStyles.monthContainer}>
              {months.map((month, index) => (
                <Pressable
                  key={index}
                  onPress={() => setSelectedMonth(index)}
                >
                  <Text style={[statsStyles.monthText, {
                    backgroundColor: selectedMonth === index ? ThemeColors.pBlue : ThemeColors.sWhite,
                    color: selectedMonth === index ? ThemeColors.pBlack : ThemeColors.pGray
                  }]}>
                    {month}
                  </Text>
                </Pressable>
              ))}
            </View>
            <View style={statsStyles.chartSectionContainer}>
              <View style={statsStyles.chartSectionHeaderContainer}>
                <Text style={statsStyles.chartSectionTitle}>Transaction</Text>
                <View style={statsStyles.chartOptionSection}>
                  <Text style={statsStyles.chartOption}>
                    Earning
                  </Text>
                  <Image source={assets.ChevronDown} style={statsStyles.chevDownIcon} />
                </View>
              </View>
              <LineChartExample />
            </View>
          </ScrollView>
          <View style={statsStyles.floatingWindow}>
            <TouchableOpacity style={statsStyles.iconButton}
              onPress={() => router.navigate('/home')}
            >
              <Image source={assets.Home} style={statsStyles.iconButton} />
            </TouchableOpacity>
            <TouchableOpacity style={statsStyles.iconButton}
              onPress={() => router.navigate('/card')}
            >
              <Image source={assets.CardGray} style={statsStyles.iconButton} />
            </TouchableOpacity>
            <TouchableOpacity style={statsStyles.iconButton}
              onPress={() => router.navigate('/qr')}
            >
              <Image source={assets.ScannerGray} style={statsStyles.iconButton} />
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}
