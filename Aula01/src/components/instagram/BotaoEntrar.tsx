import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

type BotaoEntrarProps = {
  onPress: () => void;
};

export default function BotaoEntrar({
  onPress,
}: BotaoEntrarProps) {
  return (
    <TouchableOpacity
      style={styles.botao}
      onPress={onPress}
    >
      <Text style={styles.texto}>
        Entrar
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    width: "100%",
    height: 48,
    backgroundColor: "#0095f6",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },

  texto: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
  },
});