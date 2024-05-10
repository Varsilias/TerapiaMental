import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {StackNavigationType} from '../../../Navigation/types/navigation';
import {RouteProp} from '@react-navigation/native';
import ProfileImage from './ProfileImage';
import TherapistIntro from './TherapistIntro';
import {useGetTherapist} from '../hooks';
import {handleError} from '../../../General/utils/helpers';
import Toast from 'react-native-toast-message';

const TherapistProfile = ({
  route,
}: {
  navigation: StackNavigationType;
  route: RouteProp<Record<string, any>>;
}) => {
  const params = route.params;
  console.log('Therapist ID', params);
  const [_, setProfile] = useState<any>({});

  const {mutate: getProfile} = useGetTherapist({
    onSuccess(res) {
      const data = res?.data;
      console.log(JSON.stringify(data, null, 2));
      setProfile(data);
    },
    onError(error: any) {
      console.log(error);

      handleError(error, message => {
        console.log(message);
        Toast.show({type: 'error', text1: 'Error', text2: message});
      });
    },
  });

  useEffect(() => {
    getProfile({id: params?.id ?? 1});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <View style={styles.container}>
      <ProfileImage />
      <TherapistIntro />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default TherapistProfile;
