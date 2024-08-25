import { Link, useRouter, useLocalSearchParams } from 'expo-router';
import { StyleSheet, View, Text, StatusBar, FlatList, TouchableOpacity, Image, Pressable, ScrollView } from 'react-native';
import { statsStyles } from './styles/stats.style';
import { userData } from '@/constants/UserData';
import Card2 from '@/components/card-card-2/card-card-2';
import { homeStyles } from './styles/home.style';
import assets from '@/assets/assets';
import { useEffect, useState } from 'react';
import { ThemeColors } from '@/constants/Colors';
import LineChartExample from '@/components/chart/chart';
import { checkFirstLaunch, getUserData } from './store-retrieve-data';
import FloatingWindow from '@/components/floating-window/floating-window';

export default function StatsScreen() {

  const params = useLocalSearchParams();
  const { item } = params;
  const parsedItem = JSON.parse(item as string);
  const router = useRouter();

  const months = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];

  const [selectedMonth, setSelectedMonth] = useState<number>(0);
  const [userData, setUserData] = useState<UserType>();
  const [cards, setCards] = useState<CardType[]>();

  useEffect(() => {
    checkFirstLaunch();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      const data = await getUserData();
      if (data) {
        setUserData(data);
        setCards(data.cards);
      }
    };
    loadData();
  }, []);

  if (userData && cards && parsedItem) {
    return (
      <>
        <View style={statsStyles.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <Card2 item={parsedItem} />
            <View style={statsStyles.monthContainer}>
              <FlatList
                data={months}
                renderItem={({ item, index }) => <Pressable
                  key={index}
                  onPress={() => setSelectedMonth(index)}
                >
                  <Text style={[statsStyles.monthText, {
                    backgroundColor: selectedMonth === index ? ThemeColors.pBlue : ThemeColors.sWhite,
                    color: selectedMonth === index ? ThemeColors.pBlack : ThemeColors.pGray
                  }]}>
                    {item}
                  </Text>
                </Pressable>}
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={statsStyles.listContainer}
              />
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
          <FloatingWindow />
        </View>
      </>
    );
  }
}
