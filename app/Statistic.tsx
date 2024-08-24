import { Link } from 'expo-router';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { statsStyles } from './styles/stats.style';

export default function StatsScreen() {
  return (
    <>
      <View style={statsStyles.container}>
        <Text>
          Stats Screen
        </Text>
      </View>
    </>
  );
}
