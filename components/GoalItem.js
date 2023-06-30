import { View, Pressable, Text } from "react-native";

const GoalItem = (props) => {
  return (
    <View className="border rounded-md bg-purple-600 m-2">
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.id)}
        android_ripple={{ color: "purple" }}
        style={(pressedData) => {
          const { pressed } = pressedData;
          return pressed && {opacity:0.5};
        }}
      >
        <Text className="text-white p-4 ">{props.text}</Text>
      </Pressable>
    </View>
  );
};
export default GoalItem;