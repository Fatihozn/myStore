import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Data from "./data.json";
import Card from "./components/Card";
import style from "./style";
import { useEffect, useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(Data);
  const renderFunction = ({ item }) => <Card data={item} />;
  const keyFunction = (item) => item.id.toString();

  useEffect(() => {
    setData(Data);
    if (input !== "") {
      const filtred = Data.filter(
        (item) => item.title.toLowerCase().indexOf(input.toLowerCase()) !== -1
      );
      setData(filtred);
    }
  }, [input]);

  const onChange = (event) => {
    setInput(event.nativeEvent.text);
  };
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
      <TextInput onChange={onChange} style={style.text} placeholder="Ara.." />
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
