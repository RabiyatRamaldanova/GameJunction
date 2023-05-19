import React, {useContext, useEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GameCard} from '../components';
import {getGamesAPI} from '../api';
import {IGame} from '../types';
import {Modals} from './Modals';
import {AppContext} from '../../App';

const renderItem = ({item}: {item: IGame}) => (
  <GameCard
    title={item?.title}
    description={item?.short_description}
    platform={item?.platform}
    category={item?.genre}
    image={item?.thumbnail}
  />
);

const CardList = () => {
  const {state, dispatch} = useContext(AppContext);
  const gameList = state.gameList;

  useEffect(() => {
    getGamesAPI({platform: 'all', sortBy: 'relevance'}).then(response => {
      dispatch({type: 'ADD_GAME', payload: response});
    });
  }, [dispatch]);

  const handleOpenFilterModal = () => {
    dispatch({type: 'TOGGLE_FILTER_MODAL', payload: true});
  };

  const handleOpenSortingModal = () => {
    dispatch({type: 'TOGGLE_SORTING_MODAL', payload: true});
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.filterSortButtonsContainer}>
          <TouchableOpacity
            style={styles.categoryContainer}
            onPress={handleOpenFilterModal}>
            <Text style={styles.categoryText}>Filter by</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.categoryContainer}
            onPress={handleOpenSortingModal}>
            <Text style={styles.categoryText}>Sort by</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
          data={gameList}
          renderItem={renderItem}
        />
      </View>
      <Modals />
    </>
  );
};

export default CardList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9FA',
    alignItems: 'center',
  },
  categoryContainer: {
    backgroundColor: 'rgba(72, 85, 99, 0.5)',
    height: 20,
    width: 100,
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 5,
  },
  filterSortButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 10,
  },
  categoryText: {fontSize: 13, color: 'black'},
  contentContainerStyle: {marginBottom: 10},
});
