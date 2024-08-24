import { Link, useRouter } from 'expo-router';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, Dimensions, ScrollView, Pressable, FlatList } from 'react-native';
import icons from '../assets/assets'
import ProfileCard from '@/components/profile-card/profile-card';
import { cardStyles } from './styles/card.style';
import { userData } from '@/constants/UserData';
import Card3 from '@/components/card-card-3/card-card-3';

export default function CardScreen() {
  const router = useRouter();

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
              data={userData.cards}
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

        {/* <View style={cardStyles.floatingWindow}>
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
        </View> */}
      </View>
    </>
  );
}
