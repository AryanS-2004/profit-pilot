import { Link, useRouter } from 'expo-router';
import { StyleSheet, View, Text, StatusBar, Pressable, Image, ScrollView } from 'react-native';
import { indexStyles } from './styles/index.style';
import assets from '@/assets/assets';


export default function OnboardingScreen() {

  const router = useRouter();

  return (
    <>
      <View style={indexStyles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View>
            <Text style={indexStyles.titleText}>ProfitPilot.</Text>
          </View>
          <View style={indexStyles.graphicContainer}>
            <Image source={assets.HomePageGraphic} style={indexStyles.graphic} />
          </View>
          <View style={indexStyles.bottomContainer}>
            <View style={indexStyles.textContainer}>
              <View>
                <Text style={indexStyles.text1}>Your</Text>
                <Text style={indexStyles.text2}>Financial</Text>
                <Text style={indexStyles.text1}>Navigator</Text>
              </View>
              <Text style={indexStyles.text3}>Invest in projects that make a difference. Join us in supporting impactful initiatives and create a positive change in the world.</Text>
            </View>
            <Pressable
              style={indexStyles.buttonContainer}
              onPress={() => router.navigate('/home')}
            >
              <Text style={indexStyles.buttonText}>Get Started</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
