import { Link, useRouter } from 'expo-router';
import { StyleSheet, View, Text, StatusBar, Pressable } from 'react-native';
import { indexStyles } from './styles/index.style';

export default function OnboardingScreen() {

  const router = useRouter();

  return (
    <>
      <View style={indexStyles.container}>
        <Pressable
          style={indexStyles.buttonContainer}
          onPress={() => router.navigate('/home')}
        >
          <Text style={indexStyles.buttonText}>Get Started</Text>
        </Pressable>
        <Link href="/home"></Link>
      </View>
    </>
  );
}
