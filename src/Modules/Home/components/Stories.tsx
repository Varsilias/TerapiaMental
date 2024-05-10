import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Item, ItemProps} from './FeatureStories';
import {Colors} from '../../../General/utils/constants';
import {useGetReviews} from '../../Therapy/hooks';
import {handleError} from '../../../General/utils/helpers';
import Toast from 'react-native-toast-message';

const Stories = () => {
  const [stories, setStories] = useState<ItemProps[]>([]);

  const {mutate: getReviews} = useGetReviews({
    onSuccess(res) {
      const data = res?.data;
      console.log(JSON.stringify(data, null, 2));
      setStories(data);
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
    getReviews({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {stories.map(item => (
          <Item
            location={item.location}
            name={item.name}
            profileImage={{uri: item.profile_image}}
            text={item.review}
            key={item.review}
            itemKey={`${item.review}`}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 25,
    backgroundColor: Colors.WHITE,
  },
});

export default Stories;
