import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: { flex: 1 },
  card: {
    flex: 1,
    backgroundColor: "#eceff1",
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  title: {
    marginTop: 5,
    fontSize: 17,
    fontWeight: "bold",
  },
  stok: {
    fontSize: 18,
    color: "red",
  },
  image: {
    height: Dimensions.get("window").height / 4,
    width: "100%",
    borderRadius: 10,
    resizeMode: "contain",
  },
  price: {
    margin: 5,
    color: "#333333",
    fontSize: 16,
  },
  text: {
    backgroundColor: "#eceff1",
    color: "black",
    margin: 10,
    borderRadius: 20,
    padding: 10,
    height: 50,
  },
});
