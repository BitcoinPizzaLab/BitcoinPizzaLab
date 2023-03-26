import { Box, Image, Flex, Link } from '@chakra-ui/react';
import { useMemo } from 'react';
import { SimpleImg } from 'react-simple-img';
import { TopTips } from './TopTips';

interface NftItemProps {
  className?: string;
  src: string;
  id: string;
  showId?: boolean;
  hashes: {
    [key: string]: string;
  };
  lowest?: string;
}

export function NftItem(props: NftItemProps) {
  const { className, src, id, showId = false, lowest, hashes } = props;

  const inscriptionId = useMemo(() => {
    if (!lowest) return;
    return hashes[lowest];
  }, [lowest, hashes]);

  return <Box position="relative" className={`${className} NFTItem`}>
    <SimpleImg className={lowest ? '' : 'gray'} width="100%" height="100%" src={src}></SimpleImg>

    {showId && <TopTips id={id} />}

    <Box
      zIndex="1"
      left="0"
      top="0"
      width="100%"
      height="100%"
      // bgColor="blackAlpha.0"
      opacity="0"
      position="absolute"
      color="#fff"
      fontSize={['12px', '12px', '14px']}
      transition="0.1s"
      _hover={{
        opacity: 1
      }}>
      {!showId && <TopTips id={id} />}

      <Flex justifyContent="center" position="absolute" bgColor="blackAlpha.600" w="100%" h={["20px", "20px", "30px"]} lineHeight={["20px", "20px", "30px"]} bottom="0" left="0">
        {lowest && <Link href={`https://ordinals.com/inscription/${inscriptionId}`} target="_blank" _hover={{
          textDecoration: 'none'
        }}>ORDS</Link>}

        {!lowest && <Link href={src} target="_blank" _hover={{
          textDecoration: 'none'
        }}>INSCRIBE</Link>}
      </Flex>
    </Box>
  </Box>;
}
