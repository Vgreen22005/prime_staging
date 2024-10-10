import { Link, router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomePage() {
  const itemList = [1, 2, 3, 4, 5, 6, 7];
  const itemList2 = [8, 9, 10, 11, 12, 13, 14, 15];

  // list of item objects with id and name
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
    { id: 6, name: "Item 6" },
    { id: 7, name: "Item 7" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.title}> Prime Staging </Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Link href="/users/1">Go to user 1</Link>
        <Pressable onPress={() => router.push({
          pathname: "/users/[id]",
          params: { id: "2"}
        })}>
          <Text> Go to User 2</Text></Pressable>
          {
            itemList.map((item) => (
              <Link key={item} href={`/items/${item}`}>Go to item {item} using LINK</Link>
            ))
          }
          {
            itemList2.map((item) => (
              <Pressable key={item} onPress={() => router.push({
                pathname: "/items/[itemID]",
                params: { itemID: item.toString()}
              })}>
                <Text>Go to item {item} using Pressable</Text>
              </Pressable>
            ))
          }
          {
            items.map((item) => (
              <Link key={item.id} href={`/items/${item.id}`}>Go to {item.name}</Link>
            ))
          }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    alignSelf: "center",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
