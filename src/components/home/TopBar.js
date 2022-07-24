import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TopBar = ({
  bsAmount,
  handleClear,
  dolarAmount,
  dolarPrice,
  handleModal,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 16 }}>
          Valor actual del Bolivar: {dolarPrice}
        </Text>
        <TouchableOpacity style={styles.buttons} onPress={handleModal}>
          <Text>Cambiar Valor</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.topBarContainer}>
        <Text style={styles.amountTexts}>{bsAmount} Bsf.</Text>
        <Text style={styles.amountTexts}>{dolarAmount} $.</Text>
        <TouchableOpacity style={styles.buttons} onPress={handleClear}>
          <Text>Borrar todo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "white" },
  topBarContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    paddingHorizontal: 11,
    marginBottom: 7,
  },
  amountTexts: {
    textAlign: "right",
    fontSize: 20,
  },
  buttons: {
    borderWidth: 1,
    width: 120,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5,
  },
});

export default TopBar;
