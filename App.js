import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white ">
      <View className="">
        <Text className="bg-red-400 rounded-lg shadow-xl  px-3">Testing</Text>
      </View>
      <Text>lol12342342654364565464564</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

/* you can have nested view mainly used for positioning and styling
any string must be wrapped in Text component 
Button is self closing tag and take title prop
View and Title can take style prop */
/* StyleSheet.create is for autocompletion and if there is a wrong style it will give Error
flex-1 means this container will take all the remaining availble space from the partent container
if there is 3 view two have flex -1 and one flex-2 the ones with flex-1 will take 1/4 of the space of the parent and the flex-2 will take 2/4(divide by the sum of the total of the flex) 
View by default uses flexbox which is not the same as a div and it has flex-col by default*/

/* 

you have in flexbox two axes the first main axis and the perpendicular is cross axis 
if you have flex-row the main axis is from left to right  && cross axis is from top to bottom
flex-row-reverse  main axis is from right to left && cross axis is from  bottom to top
flex-col main axis is from top to bottom && cross axis is from left to right 
flex-col-reverse main is from bottom to top && cross axis is from right to left

justify content is adjusting the content along the main axis
align items is adjusting the content along the cross axis
flex property applys to items inside a flex box container

*/

/* 
place your cursor and hit ctrl space for vs code suggestions
*/

/* 

*/
