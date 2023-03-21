import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'

export function Container() {
  return (
    <Box
      width="100vw"
      overflow="hidden"
      position="relative"
      // bgColor="#F2CD5C"
      minH="calc(100vh)"
      bgColor="#151515">
      {/* <Header></Header> */}

      <Box margin="auto"
        color="#f7931a"
      // padding={['10px', '20px', '80px']}
      >
        <Outlet />
      </Box>
    </Box>
  )
}
