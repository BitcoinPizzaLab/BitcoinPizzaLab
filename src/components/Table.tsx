import { Box, Checkbox, Text, Flex, Grid, GridItem, Input } from '@chakra-ui/react'
import { useMemo, useState } from 'react';
import { NftItem } from './NftItem';

interface TableProps {
  className?: string;
  pizzaList: {
    hash: string;
    id: string;
    lowest: string;
    hashes: {
      [key: string]: string;
    };
  }[]
}

export function Table(props: TableProps) {
  const { className, pizzaList } = props;
  const [showId, setShowId] = useState(false);
  const [searchId, setSearchId] = useState('');

  const pizzaListFilter = useMemo(() => {
    if (searchId) {
      return pizzaList.filter(item => item.id === searchId);
    }

    return pizzaList;
  }, [pizzaList, searchId]);

  return (
    <>
      <Box maxW="1400px" m="auto" px={['10px', '20px', '80px']} my="10">
        <Flex gap="3" justifyContent="space-between" mb="5">
          <Checkbox flexShrink="0" onChange={() => setShowId(!showId)} isChecked={showId}><Text fontSize={["14px", "16px"]}>
            Always show IDs
          </Text></Checkbox>

          <Input onChange={(e) => {
            setSearchId(e.target.value);
          }} w="50%" placeholder='Find Pizza ID' size='xs' />
        </Flex>

        {pizzaListFilter.length === 1 && pizzaListFilter.map((item) => {
          return (
            <Flex borderRadius="5px" overflow="hidden" key={item.id} bg='#F2921D' w={['80%', '30%']} m="auto" mt="50px">
              <NftItem hashes={item.hashes} showId={showId} id={item.id} src={`https://develop.bitcoinpizzalab.pages.dev/output/cryptopizza_${item.id}.png`}></NftItem>
            </Flex>
          )
        })}

        {pizzaListFilter.length > 1 && <Grid gap="2" templateColumns={['repeat(3, 1fr)', 'repeat(4, 1fr)', 'repeat(5, 1fr)', 'repeat(8, 1fr)']} className={className}>
          {pizzaListFilter.map((item) => {
            return (
              <GridItem borderRadius="5px" overflow="hidden" key={item.id} w='100%' bg='#F2921D'>
                <NftItem hashes={item.hashes} showId={showId} id={item.id} src={`https://develop.bitcoinpizzalab.pages.dev/output/cryptopizza_${item.id}.png`}></NftItem>
              </GridItem>
            )
          })}
        </Grid>}
      </Box>
    </>)
    ;
}