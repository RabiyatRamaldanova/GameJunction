import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {CategoryStrings, PlatformStrings} from '../types';
import useAppReducer from '../hooks/useAppReducer';

interface Props {
  title: string;
  image: string;
  description: string;
  platform: PlatformStrings;
  category: CategoryStrings;
}

const GameCard = ({title, image, description, platform, category}: Props) => {
  const {state} = useAppReducer();
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <View style={{paddingHorizontal: 10}}>
        <Text style={styles.titleText}>{title}</Text>
        <Text
          style={styles.descriptionText}
          numberOfLines={2}
          ellipsizeMode="tail">
          {description}
        </Text>
        <View style={styles.platformCategoryContainer}>
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryText}>{platform}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GameCard;

const styles = StyleSheet.create({
  container: {
    width: 350,
    backgroundColor: 'white',
    paddingBottom: 10,
    marginVertical: 5,
    elevation: 1,
    shadowColor: '#485563',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.65,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    paddingVertical: 5,
    width: 200,
  },
  categoryText: {fontSize: 13, color: 'black'},
  categoryContainer: {
    backgroundColor: 'rgba(72, 85, 99, 0.5)',
    height: 20,
    width: 100,
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 5,
  },
  platformCategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 15,
    color: 'black',
    width: 330,
  },
  image: {height: 200, width: 350},
});
