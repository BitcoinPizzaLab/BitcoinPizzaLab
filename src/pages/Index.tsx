import Logo from '../assets/logo.gif'
import { Box, Image, Flex, Heading } from "@chakra-ui/react";
import { Table } from "../components/Table";

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

  return <Flex h="100vh" direction="column" justifyContent="center" className={className}>

    <Box>
      <Flex my="10" justifyContent="center">
        <Image width={["200px", "300px"]} height={["200px", "300px"]} src={Logo} />
      </Flex>

      <Flex my="20" gap="5" justifyContent="center" direction="column">
        <Heading textAlign="center" fontFamily="ka1" size={["md", "lg"]}>
          BITCOIN PIZZAS
        </Heading>

        <Heading textAlign="center" fontFamily="ka1" size={["md", "md"]}>
          Pizza Labs
        </Heading>

        <Heading mt="70px" textAlign="center" size={["md", "lg"]}>
          1 SATOSHI = 1 PIZZA
        </Heading>

        {/* <Heading display="flex" justifyContent="center" textAlign="center" size={["md", "lg"]}>
          0 / 522 INSCRIBED!
        </Heading> */}

        <Heading display="flex" justifyContent="center" textAlign="center" size={["md", "lg"]}>
          Coming Soon...
        </Heading>
      </Flex>

    </Box>

    {/* <Flex direction="column" gap="2">
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
    </Flex> */}

    {/* <Table /> */}
  </Flex>;
}

export default Index;