import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function InstagramLogin() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      {/* Texto simulando a logo escrita do Instagram */}
      <Text style={styles.logoTexto}>Instagram</Text>

      {/* Campo de Usuário */}
      <TextInput
        style={styles.input}
        placeholder="Telefone, nome de usuário ou email"
        placeholderTextColor="#999"
        value={usuario}
        onChangeText={setUsuario}
      />

      {/* Campo de Senha */}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />

      {/* Esqueceu a senha */}
      <TouchableOpacity style={styles.esqueceuSenhaContainer}>
        <Text style={styles.esqueceuSenhaTexto}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      {/* Botão de Entrar */}
      <TouchableOpacity style={styles.botaoEntrar} onPress={() => alert('Tentando entrar...')}>
        <Text style={styles.textoBotaoEntrar}>Entrar</Text>
      </TouchableOpacity>

      {/* Divisor "OU" */}
      <View style={styles.divisorContainer}>
        <View style={styles.linha} />
        <Text style={styles.textoOu}>OU</Text>
        <View style={styles.linha} />
      </View>

      {/* Entrar com Facebook */}
      <TouchableOpacity style={styles.botaoFacebook}>
        <Text style={styles.textoFacebook}>Entrar com o Facebook</Text>
      </TouchableOpacity>

      {/* Rodapé: Criar nova conta */}
      <View style={styles.rodape}>
        <Text style={styles.textoCinza}>Não tem uma conta? </Text>
        <TouchableOpacity>
          <Text style={styles.textoCadastrese}>Cadastre-se.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  logoTexto: {
    fontSize: 42,
    fontFamily: 'sans-serif-light', /* No ambiente real usariamos a fonte oficial, mas essa simula bem */
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#000000',
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 14,
  },
  esqueceuSenhaContainer: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  esqueceuSenhaTexto: {
    color: '#00376b',
    fontSize: 12,
    fontWeight: '600',
  },
  botaoEntrar: {
    width: '100%',
    height: 48,
    backgroundColor: '#0095f6', /* Azul clássico do botão do Instagram */
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  textoBotaoEntrar: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  divisorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 25,
  },
  linha: {
    flex: 1,
    height: 1,
    backgroundColor: '#dbdbdb',
  },
  textoOu: {
    marginHorizontal: 15,
    color: '#8e8e8e',
    fontSize: 12,
    fontWeight: '600',
  },
  botaoFacebook: {
    marginBottom: 40,
  },
  textoFacebook: {
    color: '#385185',
    fontSize: 14,
    fontWeight: '600',
  },
  rodape: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#dbdbdb',
    width: '100%',
    justifyContent: 'center',
    paddingTop: 15,
  },
  textoCinza: {
    color: '#8e8e8e',
    fontSize: 12,
  },
  textoCadastrese: {
    color: '#0095f6',
    fontSize: 12,
    fontWeight: '600',
  },
});
