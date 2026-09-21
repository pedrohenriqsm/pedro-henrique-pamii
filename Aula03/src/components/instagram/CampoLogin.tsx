import { Input, InputField } from "@/components/ui/input";

type CampoLoginProps = {
  placeholder: string;
  value: string;
  onChangeText: (texto: string) => void;
  secureTextEntry?: boolean;
};

export default function CampoLogin({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}: CampoLoginProps) {
  return (
    <Input className="w-full h-12 bg-[#fafafa] border-[#dbdbdb] mb-[15px]">
      <InputField
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </Input>
  );
}