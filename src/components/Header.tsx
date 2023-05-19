import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({name}: {name: string}) => {
  return (
    <View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  name: {fontSize: 22, fontWeight: 'bold'},
});
