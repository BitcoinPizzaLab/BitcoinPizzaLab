import { Flex, Text } from '@chakra-ui/react'

interface TopTipsProps {
  className?: string;
  id: string | number;
}

export function TopTips(props: TopTipsProps) {
  const { id } = props;

  return <Flex fontSize={['12px', '12px', '14px']} color="#fff" justifyContent="center" position="absolute" bgColor="blackAlpha.600" w="100%" h={["20px", "20px", "30px"]} lineHeight={["20px", "20px", "30px"]} top="0" left="0">
    <Text fontSize={["16px"]} pr="1" fontFamily="sans-serif">#</Text>{id}
  </Flex>;
}