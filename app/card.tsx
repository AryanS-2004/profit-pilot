import { Text, View, ScrollView, Pressable, FlatList } from 'react-native';
import ProfileCard from '@/components/profile-card/profile-card';
import { cardStyles } from './styles/card.style';
import Card3 from '@/components/card-card-3/card-card-3';
import { useEffect, useState } from 'react';
import { checkFirstLaunch, getUserData } from './store-retrieve-data';
import FloatingWindow from '@/components/floating-window/floating-window';

export default function CardScreen() {
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

  if (userData && cards) {
    return (
      <>
        <View style={cardStyles.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <ProfileCard />
            <View>
              <Text style={cardStyles.title}>My Card</Text>
              <FlatList
                data={userData?.cards}
                renderItem={({ item }) => <Card3 item={item} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={cardStyles.listContainer}
              />
            </View>
            <Pressable
              style={cardStyles.buttonContainer}
            >
              <Text style={cardStyles.buttonText}>Add New Card</Text>
            </Pressable>
          </ScrollView>
          <FloatingWindow />
        </View>
      </>
    );
  }
}
