import { StyleSheet, Text } from "react-native";

export default function LogoInstagram() {
  return (
    <Text style={styles.logoTexto}>
      Instagram
    </Text>
  );
}

const styles = StyleSheet.create({
  logoTexto: {
    fontSize: 42,
    fontFamily: "sans-serif-light",
    fontStyle: "italic",
    fontWeight: "bold",
    marginBottom: 40,
    color: "#000000",
  },
});