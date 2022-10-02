import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TextInput
          style={styles.text}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.bottom}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.items}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
            keyExtractor={(item, index) => {
              return item.id;
            
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  top: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,

    marginBottom: 20,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  bottom: {
    flex: 5,
  },
  text: {
    borderWidth: 1,
    borderColor: "blue",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  items: {
    margin: 10,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#001075",
    color: "white",
  },
  goalText: {
    color: "white",
  },
});
