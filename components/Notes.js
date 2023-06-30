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
/* 
css classes in react native doesn't cascade if you made text-white on parent it won't inherit it into child components
applying rounded corners into Text component for react native work on android but not ios so we can wrap Text by View and add the radius to it

*/
/* 
ScrollView will give you scrollable View container element 
ScrollView takes the heigh of the parent contianer so you can wrap it by View to fix the hieght problem
*/

/* 
FlatList acts as ScrollView But 
*/


      {/*     <ScrollView className=" w-full pt-4">
        {goals.map((e, i) => {
          return (
            <View className="border m-3 p-3 bg-sky-500 rounded-lg" key={i}>
              <Text className="text-white">{e}</Text>
            </View>
          );
        })}
      </ScrollView> */}
      {/* flat list only render the items close to the user because if you have alot of items it will cause performance problem since ScrollView will need to load all the items then renders them unlike FlatList */}




      /* 
      Button doesn't take style prop but color prop if you want to build your button use Pressable and inside of it use View and Text
      */

      /* 
      
          <Pressable
      onPress={props.onDeleteItem.bind(this, props.id)}
      android_ripple={{color:"red"}}
      
    >
    pressable takes android_ripple an object with color property and style which is a callback function you can get the pressed from the argument and return the style accordingly
      */