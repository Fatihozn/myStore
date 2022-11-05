import React from "react";
import { View, Image, Text } from "react-native";
import style from "../style";
export default function Card({ data }) {
  return (
    <View style={style.card}>
      <Image style={style.image} source={{ uri: data.imgURL }} />
      <Text style={style.title}> {data.title} </Text>
      <Text style={style.price}> {data.price} </Text>
      {!data.inStock && <Text style={style.stok}>STOKTA YOK</Text>}
    </View>
  );
}
