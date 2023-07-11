import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';
import { useState } from 'react';
function GoalInput(props) {
const [enteredToDoText, setEnteredToDoText] = useState('');

function goalInputHandler(enteredText) {
        setEnteredToDoText(enteredText);
        }

function addGoalHandler() {
        props.onAddGoal(enteredToDoText);
        setEnteredToDoText('');
    }
        
    return (
      <Modal visible={props.visible} animationType="fade">
        <View style={styles.inputContainer}>
          <Image style={styles.image} source={require('../assets/Images/goal.png')}/>
            <TextInput 
              style={styles.textInput} 
              placeholder='Enter your Goal' 
              onChangeText={goalInputHandler} 
              value={enteredToDoText} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel} color='#8D9F87'/>
              </View>
                <View style={styles.button}>
                  <Button title='Add Goal' onPress={addGoalHandler} color='#6F9283'/>
            </View>
          </View>
        </View>
      </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#353531'
      },
      image: {
        width: 100,
        height: 100,
        margin: 20
      },
      textInput: {
        borderWidth: 2,
        width: '100%',
        padding: 16,
        borderColor: '#FF9505',
        backgroundColor: '#6A6A62',
        color: 'white',
        borderRadius: 6
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
      },
      button: {
        width: 100,
        marginHorizontal: 8
      }
});

export default GoalInput;