import {
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function DivisorOu() {
  return (
    <View style={styles.container}>

      <View style={styles.linha} />

      <Text style={styles.texto}>
        OU
      </Text>

      <View style={styles.linha} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 25,
  },

  linha: {
    flex: 1,
    height: 1,
    backgroundColor: "#dbdbdb",
  },

  texto: {
    marginHorizontal: 15,
    color: "#8e8e8e",
    fontSize: 12,
    fontWeight: "600",
  },
});