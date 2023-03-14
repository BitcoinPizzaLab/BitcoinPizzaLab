import { Flex } from '@chakra-ui/react'

interface TopTipsProps {
  className?: string;
  id: string | number;
}

export function TopTips(props: TopTipsProps) {
  const { id } = props;

  return <Flex fontSize={['12px', '12px', '16px']} color="#fff" justifyContent="center" position="absolute" bgColor="blackAlpha.600" w="100%" h={["20px", "20px", "40px"]} lineHeight={["20px", "20px", "40px"]} top="0" left="0">
    #{id}
  </Flex>;
}