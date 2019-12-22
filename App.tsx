import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList, Text } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { RegularText } from './components';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const fetchFonts = () => {
  return Font.loadAsync({
    'muli': require('./assets/fonts/Muli-Regular.ttf'),
    'ovo': require('./assets/fonts/Ovo-Regular.ttf')
  });
};

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <RegularText>I should be muli text urita</RegularText>
      <Text>I should be not muli text</Text>
      <Text style={{ fontFamily: 'ovo' }}>I should be ovo text</Text>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
