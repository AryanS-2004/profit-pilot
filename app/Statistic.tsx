import { useLocalSearchParams } from 'expo-router';
import { View, Text, FlatList, Pressable, ScrollView } from 'react-native';
import { statsStyles } from './styles/stats.style';
import Card2 from '@/components/card-card-2/card-card-2';
import { useEffect, useState } from 'react';
import { ThemeColors } from '@/constants/Colors';
import LineChartExample from '@/components/chart/chart';
import { checkFirstLaunch, getUserData } from './store-retrieve-data';
import FloatingWindow from '@/components/floating-window/floating-window';
import { Picker } from '@react-native-picker/picker';

export default function StatsScreen() {

  const params = useLocalSearchParams();
  const { item } = params;
  const parsedItem = JSON.parse(item as string);

  const getLatestMonths = () => {
    const today = new Date();
    const months = [];
    for (let i = 0; i < 6; i++) {
      months.unshift({
        month: today.toLocaleString('default', { month: 'short' }),
        value: today.getMonth() + 1
      });
      today.setMonth(today.getMonth() - 1);
    }
    return months;
  };

  const [selectedMonth, setSelectedMonth] = useState<number>(0);
  const [selectedView, setSelectedView] = useState<string>('earning');
  const [userData, setUserData] = useState<UserType>();
  const [cards, setCards] = useState<CardType[]>();
  const months = getLatestMonths();

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
                renderItem={({ item, index }) => (
                  <Pressable
                    key={index}
                    onPress={() => { setSelectedMonth(index) }}
                  >
                    <Text style={[statsStyles.monthText, {
                      backgroundColor: selectedMonth === index ? ThemeColors.pBlue : ThemeColors.sWhite,
                      color: selectedMonth === index ? ThemeColors.pBlack : ThemeColors.pGray
                    }]}>
                      {item.month}
                    </Text>
                  </Pressable>
                )}
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
                  <Picker
                    selectedValue={selectedView}
                    style={statsStyles.pickerStyle}
                    onValueChange={(itemValue, itemIndex) => setSelectedView(itemValue)}
                  >
                    <Picker.Item label="Earning" value="earning" />
                    <Picker.Item label="Spending" value="spending" />
                  </Picker>
                </View>
              </View>
              <LineChartExample
                card={parsedItem}
                month={months[selectedMonth].value}
                earning={selectedView === 'earning' ? 1 : 0}
              />
            </View>
          </ScrollView>
          <FloatingWindow />
        </View>
      </>
    );
  }
}
