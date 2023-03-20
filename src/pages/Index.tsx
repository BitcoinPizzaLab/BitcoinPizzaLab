import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import Logo from '../assets/logo.gif'

interface IndexProps {
  className?: string;
}

function Index(props: IndexProps) {
  const { className } = props;

  return <Box h="100vh" className={className}>
    <Flex justifyContent="center">
      <Box>
        <Image boxSizing="border-box" border="10px solid #ffc803" borderRadius="50%" width={["100px", "300px"]} height={["100px", "300px"]} src={Logo} />
      </Box>

    </Flex>

    <Flex my="10" gap="5" justifyContent="center" direction="column">
      <Heading textAlign="center" fontFamily="ka1" size={["xs", "md"]}>
        BITCOIN PIZZAS: AN ANTI-NFT ARTISTIC EXPERIMENT
      </Heading>

      <Heading textAlign="center" fontFamily="ka1" size={["xs", "md"]}>
        Pizza Labs
      </Heading>

      <Heading textAlign="center" fontFamily="ka1" size={["xs", "md"]}>
        1 SATOSHI = 1 PIZZA
      </Heading>

      <Heading display="flex" justifyContent="center" textAlign="center" fontFamily="ka1" size={["xs", "md"]}>
        0 <Text px="4px" fontFamily="sans-serif"> / </Text> 522 INSCRIBED!
      </Heading>
    </Flex>
  </Box>;
}

export default Index