import { Box, Card, CardBody, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react'
import Logo from '../assets/logo.png'

interface HeaderProps {
  className?: string;
}

export function Header(props: HeaderProps) {
  const { className } = props;

  return <Box className={className}>
    <Flex justifyContent="center" gap="5">
      <Image width={["100px", "140px"]} height={["100px", "140px"]} src={Logo} />

      <Flex justifyContent="center" gap="3" flexDirection="column">
        <Heading size={['sm', 'md', 'xl']} fontFamily="ka1" >
          Bitcoin Pizzas
        </Heading>
        <Heading fontFamily="ka1" size={["xs", "md"]}>
          The 522 Pizza NFTS collection on Bitcoin
        </Heading>
        <Heading display="flex" size={["xs", "md"]}>
          0 <Text px="4px" fontFamily="sans-serif">/</Text> 522 minted!
        </Heading>
      </Flex>
    </Flex>

    <Box fontSize={['12px', '14px', '16px']} my="10">
      <Text>
      Bitcoin Punks are the first byte-perfect uploads of the original Ethereum CryptoPunks onto the Bitcoin Blockchain using Ordinals.
      </Text>
      <br></br>
      <Text>
      To make this site, we are checking the hash of every image uploaded to Ordinals and comparing it against the original 10k punk images. The links to Bitcoin Punks are the first-seen inscriptions (lowest ID) that contain these hashes on Ordinals.
      </Text>
    </Box>

    <Divider my="10" borderColor="#400E32" />

    <Card borderRadius="0">
      <CardBody fontSize={['12px', '14px', '16px']}>
        <Text fontFamily="pixel3d">We are now kicking off a community review of the inscription set for the collection. Everybody is encouraged to inspect the public data source and use the tools on this page to verify that the inscriptions are correct for each punk.</Text>
        <br></br>
        <Text fontFamily="pixel3d">
        Please report any discrepancies via Discord!</Text>
      </CardBody>
    </Card>
  </Box>;
}