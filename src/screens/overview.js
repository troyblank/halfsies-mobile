import React from 'react';
import { StyleSheet, View, Button, FlatList, Text } from 'react-native';
import { RegularText } from '../components';

const OverviewScreen = props => {
    const { navigation } = props;
    const { navigate } = navigation;

  return (
    <View style={styles.screen}>
      <RegularText>This is the overview page</RegularText>
      <Button title="Create A Halfsie" onPress={() => navigate('create')} />
    </View>
  );
};

const styles = StyleSheet.create({
    screen: {
      padding: 50
    }
});
  

export default OverviewScreen;
