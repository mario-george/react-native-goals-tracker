import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [goals, setGoals] = useState([]);
  const handleDeleteItem = (id) => {
    setGoals((currentGoalItems) => {
      return [...currentGoalItems.filter((item) => item.id !== id)];
    });
  };

  const addGoalHandler = (toBeAddedGoal) => {
    setGoals((prevState) => {
      return [
        ...prevState,
        { text: toBeAddedGoal, id: Math.random().toString() },
      ];
    });
    /* optimal way of setting a state */

    setModalStatus(false);
  };
  const [modalStatus, setModalStatus] = useState(false);

  return (
    <>
      <StatusBar style="light" />

      <View className="flex-1 mt-24  justify-start items-start">
        <View className="w-[95%] mx-auto">
          <Pressable
            onPress={() => {
              setModalStatus(true);
            }}
          >
            <View className=" bg-fuchsia-500  rounded-lg shadow-lg">
              <Text className="text-white text-lg text-center p-2">
                Add Goal
              </Text>
            </View>
          </Pressable>
        </View>

        <GoalInput
          onAddGoal={addGoalHandler}
          modalOpen={modalStatus}
          setModalStatus={setModalStatus}
        />
        <FlatList
          className="w-full pt-4"
          data={goals}
          renderItem={(itemData) => {
            const { index, item } = itemData;
            // if each item is an object which has a key property FlatList will automatically assign the key to each item or you can use a property called keyExtractor which take callback function with item and index  and return the key

            return (
              <GoalItem
                onDeleteItem={handleDeleteItem}
                text={item.text}
                id={item.id}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </>
  );
}
