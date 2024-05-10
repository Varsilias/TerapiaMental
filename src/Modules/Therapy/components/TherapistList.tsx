import React from 'react';
import {Item, ItemProps} from '../../Home/components/FeaturedTherapists';
import {FlatList, StyleSheet, View} from 'react-native';

const TherapistList = ({therapists}: {therapists: ItemProps[]}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={therapists}
        renderItem={({item}) => (
          <Item
            category={item.category}
            name={`${item.firstname} ${item.lastname}`}
            profileImage={{uri: item.profile_image}}
            rating={item.rating}
            id={item.id}
          />
        )}
        keyExtractor={item => `${item.firstname}-${item.profile_image}`}
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
