import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function RodapeCadastro() {
  return (
    <View style={styles.rodape}>

      <Text style={styles.textoCinza}>
        Não tem uma conta?{" "}
      </Text>

      <TouchableOpacity>
        <Text style={styles.textoCadastrese}>
          Cadastre-se.
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  rodape: {
    flexDirection: "row",
    position: "absolute",
    bottom: 20,
    borderTopWidth: 1,
    borderTopColor: "#dbdbdb",
    width: "100%",
    justifyContent: "center",
    paddingTop: 15,
  },

  textoCinza: {
    color: "#8e8e8e",
    fontSize: 12,
  },

  textoCadastrese: {
    color: "#0095f6",
    fontSize: 12,
    fontWeight: "600",
  },
});