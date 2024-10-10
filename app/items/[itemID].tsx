import {  useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function UserPage() {
    const { itemID } = useLocalSearchParams();
  return (
    <View>
        <Text> Item {itemID}</Text>
    </View>
  )
}