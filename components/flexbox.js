import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function FlexBox() {
  return (
    <View className="flex-1 bg-white flex-col-reverse justify-start items-end">
      <View className=" bg-red-500">
        <Text className="bg-white  rounded-lg shadow-xl  px-3"></Text>
      </View>
      <View className=" bg-green-500">
        <Text className="bg-white rounded-lg shadow-xl  px-3"></Text>
      </View>
      <View className=" bg-blue-500">
        <Text className="bg-white rounded-lg shadow-xl  px-3"></Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
