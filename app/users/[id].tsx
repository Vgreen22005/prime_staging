import {  useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function UserPage() {
    const { id } = useLocalSearchParams();
  return (
    <View>
        <Text>User Page: {id}</Text>
    </View>
  )
}
