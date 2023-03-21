import { Box, Checkbox, Divider, Flex, Grid, GridItem, Image } from '@chakra-ui/react'
import { useState } from 'react';
import preview1 from '../assets/useless/cryptopizza_0.png'
import { NftItem } from './NftItem';

interface TableProps {
  className?: string;
}

const arr = Array.from({
  length: 522
})

const imagesList = arr.map((item, i) => {
  return `https://bitcoinpizzalab.pages.dev/output/cryptopizza_${i+1}.png`
});

export function Table(props: TableProps) {
  const { className } = props;
  const [showId, setShowId] = useState(false)

  return (
    <>
      <Box maxW="1400px" m="auto" px={['10px', '20px', '80px']} my="10">
        <Flex mb="5">
          <Checkbox onChange={() => setShowId(!showId)} isChecked={showId}>Always show IDs</Checkbox>
        </Flex>

        <Grid templateColumns={['repeat(3, 1fr)', 'repeat(4, 1fr)', 'repeat(5, 1fr)', 'repeat(6, 1fr)']} gap={1} className={className}>
          {imagesList.map((url, i) => {
            return (
              <GridItem key={i} w='100%' bg='#F2921D'>
                <NftItem showId={showId} id={i} src={url}></NftItem>
              </GridItem>
            )
          })}
        </Grid>
      </Box>
    </>)
    ;
}