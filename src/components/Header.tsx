import { Box, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

interface HeaderProps {
  className?: string;
}

export function Header(props: HeaderProps) {
  const { className } = props;

  return <Flex maxW="1300px" m="auto" mt="5" borderRadius="5px" fontSize={['10px', '12px', '16px']} gap={["3", "4", "10"]} justifyContent="center" lineHeight="60px" height="60px" bgColor="#ffc803"  className={className}>
    <Box  ml="30px">
    <Link to="/">
      HOME
    </Link>
    </Box>

    {/* <Link to="gallery">GALLERY</Link> */}
    <a>HOW TO INSCRIBE</a>
    <a>DONATE</a>
    <a href="https://twitter.com/pizzalabs_btc" target="_blank">TWITTER</a>
  </Flex>;
}