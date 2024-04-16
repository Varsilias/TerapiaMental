import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error: any) {
    console.log('Error setting item' + error.message);
  }
};

export const getItemFor = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (error: any) {
    console.log('Error getting item' + error.message);
  }
};
