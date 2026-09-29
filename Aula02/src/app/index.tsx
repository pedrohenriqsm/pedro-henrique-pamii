import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import TituloCadastro from "../components/cadastro/TituloCadastro";
import CampoNome from "../components/cadastro/CampoNome";
import BotaoConfirmar from "../components/cadastro/BotaoConfirmar";

export default function HomeScreen() {
  const [nome, setNome] = useState("");

  function confirmar() {
  alert(`Olá, ${nome}!`    
  );
}

  return (
    <View style={styles.container}>
      <TituloCadastro />

      <CampoNome
        nome={nome}
        setNome={setNome}
      />

      <BotaoConfirmar
        onPress={confirmar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
});