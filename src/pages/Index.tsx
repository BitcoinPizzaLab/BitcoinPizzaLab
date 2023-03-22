import Logo from '../assets/logo.gif'
import { Box, Image, Flex, Heading } from "@chakra-ui/react";
import { Table } from "../components/Table";
import { useCallback, useMemo, useState } from 'react';
import { getPizzaJson } from '../request';
import { useInterval, useMount } from 'react-use';

interface IndexProps {
  className?: string;
}

function Index(props: IndexProps) {
  const { className } = props;

  const [pizzaList, setPizzaList] = useState<{
    hash: string;
    id: string;
    lowest: string;
    hashes: {
      [key: string]: string;
    };
  }[]>([])

  const alreadyInscribeNum = useMemo(() => {
    const alreadyInscribe = pizzaList.filter(item => item.lowest);
    return alreadyInscribe.length;
  }, [pizzaList]);

  const fetchData = useCallback(() => {
    getPizzaJson().then((res) => {
      const data = Object.keys(res.data.list).map(key => {
        return {
          ...res.data.list[key],
          hash: key
        }
      })
      setPizzaList(data);
    });
  }, [])

  useMount(() => {
    fetchData();
  })

  useInterval(
    fetchData,
    60000
  );

  return <Box className={className}>
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

        <Heading display="flex" justifyContent="center" textAlign="center" size={["md", "lg"]}>
          {alreadyInscribeNum} / 522 INSCRIBED!
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

    <Table pizzaList={pizzaList} />
  </Box>;
}

export default Index;