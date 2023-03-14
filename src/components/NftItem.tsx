import { Box, Image, Flex, Link } from '@chakra-ui/react'
import { TopTips } from './TopTips';

interface NftItemProps {
  className?: string;
  src: string;
  id: number;
  showId?: boolean;
}

export function NftItem(props: NftItemProps) {
  const { className, src, id, showId=false } = props;

  return <Box position="relative" className={`${className}`}>
    <Image src={src}></Image>

    {showId && <TopTips id={id} />}

    <Box
      zIndex="1"
      left="0"
      top="0"
      width="100%"
      height="100%"
      bgColor="blackAlpha.0"
      opacity="0"
      position="absolute"
      color="#fff"
      fontSize={['12px', '12px', '16px']}
      transition="0.1s"
      _hover={{
        bgColor: 'blackAlpha.300',
        opacity: 1
      }}>
      {!showId && <TopTips id={id} />}

      <Flex justifyContent="center" position="absolute" bgColor="blackAlpha.600" w="100%" h={["20px", "20px", "40px"]} lineHeight={["20px", "20px", "40px"]} bottom="0" left="0">
        <Box></Box>

        <Link _hover={{
          textDecoration: 'none'
        }}>PFP</Link>
      </Flex>
    </Box>
  </Box>;
}
