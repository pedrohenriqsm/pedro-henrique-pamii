import React, { useState } from "react";

import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";

export default function InstagramLogin() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <Box className="flex-1 bg-white items-center justify-center px-[30px]">

      <Text className="text-[42px] italic font-bold text-black mb-[40px]">
        Instagram
      </Text>

      <Input className="w-full h-12 bg-[#fafafa] border-[#dbdbdb] mb-[15px]">
        <InputField
          placeholder="Telefone, nome de usuário ou email"
          value={usuario}
          onChangeText={setUsuario}
        />
      </Input>

      <Input className="w-full h-12 bg-[#fafafa] border-[#dbdbdb] mb-[15px]">
        <InputField
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
      </Input>

      <Button className="self-end bg-transparent mb-[30px]">
        <ButtonText className="text-[#00376b] text-[12px]">
          Esqueceu a senha?
        </ButtonText>
      </Button>

      <Button
        className="w-full h-12 bg-[#0095f6] mb-[25px]"
        onPress={() => alert("Tentando entrar...")}
      >
        <ButtonText className="text-white">
          Entrar
        </ButtonText>
      </Button>

      <HStack className="items-center w-full mb-[25px]">
        <Box className="flex-1 h-px bg-[#dbdbdb]" />

        <Text className="mx-[15px] text-[#8e8e8e] text-[12px]">
          OU
        </Text>

        <Box className="flex-1 h-px bg-[#dbdbdb]" />
      </HStack>

      <Button className="bg-transparent mb-[40px]">
        <ButtonText className="text-[#385185]">
          Entrar com o Facebook
        </ButtonText>
      </Button>

      <HStack className="absolute bottom-5 w-full justify-center items-center">
        <Text className="text-[#8e8e8e] text-[12px]">
          Não tem uma conta?{" "}
        </Text>

        <Text className="text-[#0095f6] text-[12px] font-bold">
          Cadastre-se.
        </Text>
      </HStack>

    </Box>
  );
}