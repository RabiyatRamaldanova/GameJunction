import React, {useContext} from 'react';
import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import RadioButton from '../../../components/RadioButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import CloseIcon from '../../../assets/svg/CloseIcon';
import {AppContext} from '../../../../App';
import {getGamesAPI} from '../../../api';
import {SortByStrings} from '../../../types';

const SortingModal = () => {
  const {state, dispatch} = useContext(AppContext);
  const {visible} = state.toggleSortingModal;
  const {platformRadioValue, categoryRadioValue, sortingRadioValue} = state;

  const handleOnChooseSortingFilter = (type: SortByStrings) => {
    if (sortingRadioValue !== type) {
      dispatch({type: 'CHOOSE_SORTING_RADIO_VALUE', payload: type});
    }
  };

  const handleCloseModal = () => {
    dispatch({type: 'TOGGLE_SORTING_MODAL', payload: false});
    getGamesAPI({
      sortBy: sortingRadioValue,
      platform: platformRadioValue,
      category: categoryRadioValue && categoryRadioValue,
    }).then(response => {
      dispatch({type: 'ADD_GAME', payload: response});
    });
  };

  const sortingRadioButtons = [
    {
      label: 'Release date',
      selected: sortingRadioValue === 'release-date',
      id: 0,
      onPress: () => handleOnChooseSortingFilter('release-date'),
    },
    {
      label: 'Popularity',
      selected: sortingRadioValue === 'popularity',
      id: 1,
      onPress: () => handleOnChooseSortingFilter('popularity'),
    },
    {
      label: 'Alphabetical',
      selected: sortingRadioValue === 'alphabetical',
      id: 2,
      onPress: () => handleOnChooseSortingFilter('alphabetical'),
    },
    {
      label: 'Relevance',
      selected: sortingRadioValue === 'relevance',
      id: 3,
      onPress: () => handleOnChooseSortingFilter('relevance'),
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
        <View style={styles.radioButtonContainer}>
          {sortingRadioButtons.map(item => (
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

export default SortingModal;

const styles = StyleSheet.create({
  radioButtonContainer: {
    margin: 12,
    justifyContent: 'center',
    alignItems: 'center',
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
  safeAreaView: {flex: 1, backgroundColor: '#F9F9FA', paddingHorizontal: 10},
});
