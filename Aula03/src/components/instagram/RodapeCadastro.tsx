import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";

export default function RodapeCadastro() {
  return (
    <HStack className="absolute bottom-5 w-full justify-center items-center">

      <Text className="text-[#8e8e8e] text-[12px]">
        Não tem uma conta?{" "}
      </Text>

      <Text className="text-[#0095f6] text-[12px] font-bold">
        Cadastre-se.
      </Text>

    </HStack>
  );
}