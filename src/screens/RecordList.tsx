import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import {IRecord} from '../types';

const missionData = {
  'archery-mission-lvl': {
    fails: 9,
    gameId: 'archery-world-tour',
    playTime: 5291.706,
    wins: 8,
  },
  'archery-world-mission-1': {
    fails: 9,
    gameId: 'archery-world-tour',
    playTime: 981,
    wins: 6,
  },
  'bubble-woods-mission-1': {
    fails: 19,
    gameId: 'bubble-woods',
    playTime: 1206,
    wins: 9,
  },
  'bubble-woods-mission-lvl': {
    fails: 1,
    gameId: 'bubble-woods',
    playTime: 100,
    wins: 2,
  },
  'candy-bubble-mission-lvl': {
    fails: 6,
    gameId: 'candy-bubble',
    playTime: 1558,
    wins: 6,
  },
};

const Card = ({item}: {item: IRecord}) => (
  <View style={styles.cardContainer}>
    <Text style={styles.text}>name: {item.gameId}</Text>
    <Text style={styles.text}>play time:{item.playTime}</Text>
    <Text style={styles.text}>wins: {item.wins}</Text>
    <Text style={styles.text}>fails: {item.fails}</Text>
  </View>
);

const RecordList = () => {
  const data: Array<IRecord> = Object.values(missionData).reduce(
    (accumulator, mission) => {
      const {gameId, wins, fails, playTime} = mission;

      const existingGame: IRecord | undefined = accumulator.find(
        (game: IRecord) => game.gameId === gameId,
      );
      if (existingGame) {
        existingGame.wins += wins;
        existingGame.fails += fails;
        existingGame.playTime += playTime;
      } else {
        accumulator.push({gameId, wins, fails, playTime});
      }

      return accumulator;
    },
    [] as Array<IRecord>,
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.gameId}
        renderItem={Card}
      />
    </View>
  );
};

export default RecordList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 14,
    color: 'black',
  },
  cardContainer: {alignItems: 'center', borderWidth: 1, marginVertical: 10},
});
