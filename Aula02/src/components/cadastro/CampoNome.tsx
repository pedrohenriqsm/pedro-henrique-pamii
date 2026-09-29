import { Input, InputField } from "@/components/ui/input";

type CampoNomeProps = {
  nome: string;
  setNome: (texto: string) => void;
};

export default function CampoNome({
  nome,
  setNome,
}: CampoNomeProps) {
  return (
    <Input className="w-full mb-5">
      <InputField
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />
    </Input>
  );
}