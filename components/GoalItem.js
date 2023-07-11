import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <Pressable 
      android_ripple={{color: '#EC4E20'}} 
      onPress={props.onDeleteItem}
      style={({pressed}) => pressed && styles.pressedItem}
      >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text> 
      </View>
    </Pressable>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#6A6A62',
    color: 'white',
    borderWidth: 1,
    borderColor: '#FF9505',
    },
  pressedItem: {
    opacity: 0.5
    },
  goalText: {
    color: 'white',
    padding: 8
    }
});