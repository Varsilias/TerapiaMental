import React from 'react';
import {Item, ItemProps} from '../../Home/components/FeaturedTherapists';
import {FlatList, StyleSheet, View} from 'react-native';

const TherapistList = ({therapists}: {therapists: ItemProps[]}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={therapists}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={item => item.rating as string}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
});

export default TherapistList;
