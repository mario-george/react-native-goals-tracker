import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";
export default function App() {
  const [goals, setGoals] = useState([]);
  const [goalText, setGoalText] = useState("");
  const goalTextHandler = (enteredText) => {
    setGoalText(enteredText);
  };
  const addGoalHandler = () => {
    setGoals((prevState) => {
      return [...prevState, goalText];
    });
    console.log(goals);
  };
  return (
    <View className="flex-1 mt-24 bg-white  justify-start items-start">
      <View className="flex-row justify-center space-x-6 border-b w-[90%] mx-auto pb-12">
        <TextInput
          placeholder="Enter a goal"
          className=" border  mr-2 w-[70%]"
          onChangeText={goalTextHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View className=" w-full pt-4">
        {goals.map((e, i) => {
          return <Text key={i}>{e}</Text>;
        })}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

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
if you have flex-direction: row :

Main Axis: Horizontal from left to right.
Cross Axis: Vertical from top to bottom.
flex-direction: row-reverse:

Main Axis: Horizontal from right to left.
Cross Axis: Vertical from top to bottom.
flex-direction: column:

Main Axis: Vertical from top to bottom.
Cross Axis: Horizontal from left to right.
flex-direction: column-reverse:

Main Axis: Vertical from bottom to top.
Cross Axis: Horizontal from left to right.

justify content is adjusting the content along the main axis
align items is adjusting the content along the cross axis
flex property applys to items inside a flex box container

*/

/* 
place your cursor and hit ctrl space for vs code suggestions
*/

/* 
react native is used instead of react dom for web bu useHoks is he same for react native
*/
/* 
for react native you have for button onPress instead of onClick as opposed to the web
you add a pointer to a function so that it doesn't execute as soon as the code is parsed 
for TextInput you have onChangeText prop and add a pointer to the function and it receives the entered Text as a prop to that function



*/
