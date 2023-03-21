import Marquee from "react-fast-marquee";
import Logo from '../assets/logo.gif'
import { Box, Image, Flex, Heading } from "@chakra-ui/react";

interface IndexProps {
  className?: string;
}

const arr = Array.from({
  length: 500
})

const imagesList = arr.map((item, i) => {
  return `https://bitcoinpizzalab.pages.dev/output/cryptopizza_${i + 1}.png`
});

function Index(props: IndexProps) {
  const { className } = props;

  return <Box className={className}>

    <Flex my="10" justifyContent="center">
      <Image width={["200px", "300px"]} height={["200px", "300px"]} src={Logo} />
    </Flex>

    <Flex my="20" gap="5" justifyContent="center" direction="column">
      <Heading textAlign="center" fontFamily="ka1" size={["md", "md"]}>
        BITCOIN PIZZAS
      </Heading>
      <Heading textAlign="center" size={["md", "md"]}>
        AN ANTI-NFT ARTISTIC EXPERIMENT
      </Heading>


      <Heading textAlign="center" fontFamily="ka1" size={["md", "lg"]}>
        Pizza Labs
      </Heading>

      <Heading textAlign="center" size={["md", "md"]}>
        1 SATOSHI = 1 PIZZA
      </Heading>

      <Heading display="flex" justifyContent="center" textAlign="center" size={["md", "md"]}>
        0 / 522 INSCRIBED!
      </Heading>
    </Flex>

    <Flex direction="column" gap="2">
      <Box>
        <Marquee direction="right" speed={40}>
          {imagesList.slice(250, 280).map(src => {
            return <Image mx="1" width={["200px"]} src={src} key={src} />
          })}
        </Marquee>
      </Box>

      <Box>
        <Marquee speed={50}>
          {imagesList.slice(0, 20).map(src => {
            return <Image mx="1" width={["200px"]} src={src} key={src} />
          })}
        </Marquee>
      </Box>
    </Flex>

  </Box>;
}

export default Index;