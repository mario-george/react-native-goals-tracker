import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Modal,
  Pressable,
  Text,
  Image,
} from "react-native";
const GoalInput = (props) => {
  const [goalText, setGoalText] = useState("");

  const goalTextHandler = (enteredText) => {
    setGoalText(enteredText);
  };
  function addGoalHandler() {
    // you can either use helper handler function or .bind(this,passARGUMENT WHEN CALLING THE FUNCTION)
    props.onAddGoal(goalText);
    setGoalText("");
  }
  return (
    <Modal visible={props.modalOpen} animationType="slide" className="">
      <View className="flex-1 bg-purple-600">
        <View className="flex-1 justify-center w-[90%] mx-auto pb-12 ">
        <Image
          className="h-[100px] w-[100px] mx-auto mb-4"
          source={require("../assets/images/goal.png")}
        />
          <TextInput
            placeholder="Enter a goal"
            className=" border p-3 py-3 mb-4 rounded-lg shadow-lg placeholder:bg-white text-lg"
            onChangeText={goalTextHandler}
            value={goalText}
          />
          <View className="flex-row space-x-4 justify-center">
            <Pressable className="" onPress={addGoalHandler}>
              <View className="bg-fuchsia-500 p-2 rounded-lg shadow-lg   w-36">
                <Text className="text-white text-lg text-center ">
                  Add Goal
                </Text>
              </View>
            </Pressable>
            <Pressable
              className=""
              onPress={() => {
                props.setModalStatus(false);
              }}
            >
              <View className="bg-rose-600 p-2 rounded-lg shadow-lg  w-36">
                <Text className="text-white text-lg text-center ">Cancel</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default GoalInput;
