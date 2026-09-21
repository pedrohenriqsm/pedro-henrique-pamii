import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export default function EsqueceuSenha() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.texto}>
        Esqueceu a senha?
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-end",
    marginBottom: 30,
  },

  texto: {
    color: "#00376b",
    fontSize: 12,
    fontWeight: "600",
  },
});