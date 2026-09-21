import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export default function BotaoFacebook() {
  return (
    <TouchableOpacity style={styles.botao}>
      <Text style={styles.texto}>
        Entrar com o Facebook
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    marginBottom: 40,
  },

  texto: {
    color: "#385185",
    fontSize: 14,
    fontWeight: "600",
  },
});