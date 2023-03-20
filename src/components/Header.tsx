import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import Logo from '../assets/logo.gif'

interface HeaderProps {
  className?: string;
}

export function Header(props: HeaderProps) {
  const { className } = props;

  return <Box className={className}>

  </Box>;
}