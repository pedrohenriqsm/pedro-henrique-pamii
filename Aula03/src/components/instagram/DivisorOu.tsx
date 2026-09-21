import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";

export default function DivisorOu() {
  return (
    <HStack className="items-center w-full mb-[25px]">

      <Box className="flex-1 h-px bg-[#dbdbdb]" />

      <Text className="mx-[15px] text-[#8e8e8e] text-[12px]">
        OU
      </Text>

      <Box className="flex-1 h-px bg-[#dbdbdb]" />

    </HStack>
  );
}