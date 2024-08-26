import AsyncStorage from '@react-native-async-storage/async-storage';
import { userData } from '@/constants/UserData';


export const checkFirstLaunch = async () => {
  try {
    const isInitialized = await AsyncStorage.getItem('@app_initialized');

    if (isInitialized === null) {
      await AsyncStorage.setItem('@user_data', JSON.stringify(userData));
      await AsyncStorage.setItem('@app_initialized', 'true');
      console.log('Initial data stored');
    } else {
      console.log('App already initialized');
    }
  } catch (e) {
    console.error('Error checking first launch:', e);
  }
};


export const getUserData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@user_data');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error retrieving user data:', e);
  }
};

export const updateUserData = async (newData: UserType) => {
  try {
    // console.log(newData);
    await AsyncStorage.setItem('@user_data', JSON.stringify(newData));
  } catch (e) {
    console.error('Error updating user data:', e);
  }
};
