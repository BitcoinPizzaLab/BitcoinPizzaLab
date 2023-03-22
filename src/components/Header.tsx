import { Box, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useScrollDirection } from '../utils/useScrollDirection';

interface HeaderProps {
  className?: string;
}

export function Header(props: HeaderProps) {
  const { className } = props;
  const direction = useScrollDirection();

  return <>
    <Flex transition="0.5s" top={direction === 'up' ? '5' : '-50px'} opacity={direction === 'up' ? '1' : '0'} position="fixed" zIndex="2" maxW="1300px" w="90%" mx={["20px", "20px", "auto"]} borderRadius="5px" fontSize={['10px', '12px', '16px']} gap={["3", "4", "10"]} justifyContent="center" lineHeight="60px" height="60px" bgColor="#ffc803" left="50%" transform="translateX(-50%)">
      <Box ml={["0", "30px"]}>
        <Link to="/">
          HOME
        </Link>
      </Box>

      {/* <Link to="gallery">GALLERY</Link> */}
      <a>HOW TO INSCRIBE</a>
      <a>DONATE</a>
      <a href="https://twitter.com/pizzalabs_btc" target="_blank">TWITTER</a>
    </Flex>
    <Box h="60px"></Box>
  </>;
}