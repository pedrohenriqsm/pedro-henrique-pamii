import { Button, ButtonText } from "@/components/ui/button";

type BotaoConfirmarProps = {
  onPress: () => void;
};

export default function BotaoConfirmar({
  onPress,
}: BotaoConfirmarProps) {
  return (
    <Button
      className="w-full bg-[#0095f6]"
      onPress={() => onPress()}
    >
      <ButtonText className="text-white">
        Confirmar
      </ButtonText>
    </Button>
  );
}