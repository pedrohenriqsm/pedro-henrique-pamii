import { Button, ButtonText } from "@/components/ui/button";

type BotaoEntrarProps = {
  onPress: () => void;
};

export default function BotaoEntrar({
  onPress,
}: BotaoEntrarProps) {
  return (
    <Button
      className="w-full h-12 bg-[#0095f6] mb-[25px]"
      onPress={onPress}
    >
      <ButtonText className="text-white">
        Entrar
      </ButtonText>
    </Button>
  );
}