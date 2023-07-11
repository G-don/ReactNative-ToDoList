import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button, Image, SafeAreaView, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const screenWidth = Dimensions.get('window').width;

export default function App() {
  const [toDoGoals, setToDoGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredToDoText) {
    setToDoGoals(currentToDoGoals => [
      ...currentToDoGoals,
      { text: enteredToDoText, key: Math.random().toString() }
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setToDoGoals(currentToDoGoals => {
      return currentToDoGoals.filter(goal => goal.key !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
        <SafeAreaView style={styles.safeAreaContainer}>
          <View style={styles.appContainer}>
            {toDoGoals.length === 0 ? (
            <View style={styles.centeredContent}>
              <Image style={styles.image} source={require('./assets/Images/goal.png')} />
              <View style={styles.buttonContainer}>
                <Button
                  title="Add New Goal"
                  color="#6F9283"
                  onPress={startAddGoalHandler}
                  style={[styles.button, { width: screenWidth * 0.9 }]}
                />
              </View>
            </View>
          ) : (
            <>
              <View style={styles.topContent}>
                <Button title="Add New Goal" color="#6F9283" onPress={startAddGoalHandler} />
              </View>
              <View style={styles.goalsContainer}>
                <FlatList
                  data={toDoGoals}
                  renderItem={itemData => (
                    <GoalItem text={itemData.item.text} id={itemData.item.key} onDeleteItem={() => deleteGoalHandler(itemData.item.key)} />
                  )}
                  alwaysBounceVertical={false}
                />
              </View>
            </>
          )}
          <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#353531'
  },
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContent: {
    marginTop: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    opacity: 0.5,
  },
  goalsContainer: {
    flex: 1,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 8,
  },
  button: {
    flex: 1,
  },
});
