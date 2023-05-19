import React, {useContext} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RadioButton from '../../../components/RadioButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import CloseIcon from '../../../assets/svg/CloseIcon';
import {AppContext} from '../../../../App';
import {getGamesAPI} from '../../../api';
import {CategoryStrings, PlatformStrings} from '../../../types';

const FilterModal = () => {
  const {state, dispatch} = useContext(AppContext);
  const {visible} = state.toggleFilterModal;
  const {platformRadioValue, categoryRadioValue, sortingRadioValue} = state;

  const handleOnChoosePlatformFilter = (type: PlatformStrings) => {
    if (platformRadioValue !== type) {
      dispatch({type: 'CHOOSE_PLATFORM_RADIO_VALUE', payload: type});
    }
  };

  const handleOnChooseCategoryFilter = (type: CategoryStrings | null) => {
    if (categoryRadioValue !== type) {
      dispatch({type: 'CHOOSE_CATEGORY_RADIO_VALUE', payload: type});
    }
  };

  const handleCloseModal = () => {
    dispatch({type: 'TOGGLE_FILTER_MODAL', payload: false});
    getGamesAPI({
      platform: platformRadioValue,
      category: categoryRadioValue && categoryRadioValue,
      sortBy: sortingRadioValue,
    }).then(response => {
      dispatch({type: 'ADD_GAME', payload: response});
    });
  };

  const platformRadioButtons = [
    {
      label: 'All',
      selected: platformRadioValue === 'all',
      id: 0,
      onPress: () => handleOnChoosePlatformFilter('all'),
    },
    {
      label: 'PC',
      selected: platformRadioValue === 'pc' || platformRadioValue === 'all',
      id: 1,
      onPress: () => handleOnChoosePlatformFilter('pc'),
    },
    {
      label: 'Browser',
      selected:
        platformRadioValue === 'browser' || platformRadioValue === 'all',
      id: 2,
      onPress: () => handleOnChoosePlatformFilter('browser'),
    },
  ];

  const categoryRadioButtons = [
    {
      label: 'MMORPG',
      selected: categoryRadioValue === 'mmorpg' || categoryRadioValue === null,
      id: 0,
      onPress: () => handleOnChooseCategoryFilter('mmorpg'),
    },
    {
      label: 'Shooter',
      selected: categoryRadioValue === 'shooter' || categoryRadioValue === null,
      id: 1,
      onPress: () => handleOnChooseCategoryFilter('shooter'),
    },
    {
      label: 'Strategy',
      selected:
        categoryRadioValue === 'strategy' || categoryRadioValue === null,
      id: 2,
      onPress: () => handleOnChooseCategoryFilter('strategy'),
    },
    {
      label: 'Action',
      selected: categoryRadioValue === 'action' || categoryRadioValue === null,
      id: 3,
      onPress: () => handleOnChooseCategoryFilter('action'),
    },
    {
      label: 'Racing',
      selected: categoryRadioValue === 'racing' || categoryRadioValue === null,
      id: 4,
      onPress: () => handleOnChooseCategoryFilter('racing'),
    },
    {
      label: 'Sports',
      selected: categoryRadioValue === 'sports' || categoryRadioValue === null,
      id: 5,
      onPress: () => handleOnChooseCategoryFilter('sports'),
    },
    {
      label: 'MMO',
      selected: categoryRadioValue === 'mmo' || categoryRadioValue === null,
      id: 6,
      onPress: () => handleOnChooseCategoryFilter('mmo'),
    },
    {
      label: 'Survival',
      selected:
        categoryRadioValue === 'survival' || categoryRadioValue === null,
      id: 7,
      onPress: () => handleOnChooseCategoryFilter('survival'),
    },
    {
      label: 'Social',
      selected: categoryRadioValue === 'social' || categoryRadioValue === null,
      id: 8,
      onPress: () => handleOnChooseCategoryFilter('social'),
    },
    {
      label: 'All',
      selected: categoryRadioValue === null,
      id: 9,
      onPress: () => handleOnChooseCategoryFilter(null),
    },
  ];

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={handleCloseModal}>
      <SafeAreaView style={styles.safeAreaView}>
        <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
          <CloseIcon />
        </TouchableOpacity>
        <Text style={styles.titleText}>Platform:</Text>
        <View style={styles.radioButtonContainer}>
          {platformRadioButtons.map(item => (
            <RadioButton
              key={item.id}
              label={item.label}
              selected={item.selected}
              onPress={item.onPress}
            />
          ))}
        </View>
        <Text style={styles.titleText}>Category:</Text>
        <View style={styles.radioButtonContainer}>
          {categoryRadioButtons.map(item => (
            <RadioButton
              key={item.id}
              label={item.label}
              selected={item.selected}
              onPress={item.onPress}
            />
          ))}
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  radioButtonContainer: {
    margin: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  closeButton: {
    width: 24,
    height: 24,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgba(46, 58, 89, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  titleText: {fontSize: 18, fontWeight: '400', color: 'black'},
  safeAreaView: {flex: 1, backgroundColor: '#F9F9FA', paddingHorizontal: 10},
});
