import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import data from "./data.json";
import Card from "./components/Card";
import style from "./style";

export default function App() {
  const renderFunction = ({ item }) => <Card data={item} />;
  const keyFunction = (item) => item.id.toString();
  return (
    <SafeAreaView style={style.container}>
      <Text
        style={{
          fontWeight: "bold",
          color: "red",
          fontSize: 40,
          textAlign: "center",
        }}
      >
        My Store
      </Text>
      <TextInput style={style.text} placeholder="Ara.." />
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={keyFunction}
        numColumns={2}
        data={data}
        renderItem={renderFunction}
      />
      <StatusBar />
    </SafeAreaView>
  );
}
