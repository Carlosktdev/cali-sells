import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import add from "../../assets/add.png";
import remove from "../../assets/remove.png";

const IceCreamCard = ({ name, img, sellAmount, handleAdd, handleRemove }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleRemove(name)}>
        <Image source={remove}></Image>
      </TouchableOpacity>
      <Image source={{ uri: img }} style={styles.iceCreamImg}></Image>
      <View style={styles.detailsContainer}>
        <Text>{name}</Text>
        <Text style={styles.amountText}>{sellAmount}</Text>
      </View>

      <TouchableOpacity onPress={() => handleAdd(name)}>
        <Image source={add}></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    margin: 4,
    borderRadius: 10,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    height: 110,
    alignItems: "center",
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  iceCreamImg: {
    width: 90,
    height: 90,
  },
  amountText: {
    fontSize: 30,
  },
});

export default IceCreamCard;
