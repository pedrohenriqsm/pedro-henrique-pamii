import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import LogoInstagram from "../components/instagram/LogoInstagram";
import CampoLogin from "../components/instagram/CampoLogin";
import EsqueceuSenha from "../components/instagram/EsqueceuSenha";
import BotaoEntrar from "../components/instagram/BotaoEntrar";
import DivisorOu from "../components/instagram/DivisorOu";
import BotaoFacebook from "../components/instagram/BotaoFacebook";
import RodapeCadastro from "../components/instagram/RodapeCadastro";

export default function InstagramLogin() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>

      <LogoInstagram />

      <CampoLogin
        placeholder="Telefone, nome de usuário ou email"
        value={usuario}
        onChangeText={setUsuario}
      />

      <CampoLogin
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <EsqueceuSenha />

      <BotaoEntrar
        onPress={() => alert("Tentando entrar...")}
      />

      <DivisorOu />

      <BotaoFacebook />

      <RodapeCadastro />

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