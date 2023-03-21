import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'

interface HeaderProps {
  className?: string;
}

export function Header(props: HeaderProps) {
  const { className } = props;

  return <Flex fontSize={['10px', '12px', '16px']} gap={["3", "4", "10"]} justifyContent="center" lineHeight="60px" height="60px" bgColor="#ffc803" className={className}>
    <Box alignSelf="center">
      <Link to="/">
        <Image w={["35px", "50px"]} h={["35px", "50px"]} src={Logo} />
      </Link>
    </Box>

    <Link to="gallery">GALLERY</Link>
    <a>HOW TO INSCRIBE</a>
    <a>DONATE</a>
    <a href="https://twitter.com/pizzalabs_btc" target="_blank">TWITTER</a>
  </Flex>;
}