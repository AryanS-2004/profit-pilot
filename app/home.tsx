import { Link, useRouter } from 'expo-router';
import { StyleSheet, View, Text, StatusBar, Image, TouchableOpacity, ScrollView, Dimensions, FlatList } from 'react-native';
import icons from '../assets/assets'
import { homeStyles } from './styles/home.style';
import ProfileCard from '@/components/profile-card/profile-card';
import { userData } from '@/constants/UserData';
import Card from '@/components/card-card/card-card';
import assets from '../assets/assets';

export default function HomeScreen() {

  const router = useRouter();
  return (
    <>
      <View style={homeStyles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View>
            <ProfileCard />
          </View>
          <View style={homeStyles.accountContainer}>
            <Text style={homeStyles.accountHeading}>Account</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <FlatList
                data={userData.cards}
                renderItem={({ item }) => <Card item={item} />}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={homeStyles.listContainer}
              />
            </ScrollView>
          </View>

          <View style={homeStyles.reqSendContainer}>
            <View style={homeStyles.requestContainer}>
              <Image source={assets.Recieve} style={homeStyles.requestIcon} />
              <Text style={homeStyles.requestText}>Request</Text>
            </View>
            <View style={homeStyles.requestContainer}>
              <Image source={assets.Send} style={homeStyles.requestIcon} />
              <Text style={homeStyles.requestText}>Transfer</Text>
            </View>
            <View style={homeStyles.plusContainer}>
              <Image source={assets.Plus} style={homeStyles.plusIcon} />
            </View>
          </View>
        </ScrollView>
      </View>


      <View style={homeStyles.floatingWindow}>
        <TouchableOpacity style={homeStyles.iconButton}
          onPress={() => router.navigate('/home')}
        >
          <Image source={icons.Home} style={homeStyles.iconButton} />
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.iconButton}
          onPress={() => router.navigate('/card')}
        >
          <Image source={icons.CardGray} style={homeStyles.iconButton} />

        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.iconButton}
          onPress={() => router.navigate('/qr')}
        >
          <Image source={icons.ScannerGray} style={homeStyles.iconButton} />
        </TouchableOpacity>
      </View>
    </>
  );
}
