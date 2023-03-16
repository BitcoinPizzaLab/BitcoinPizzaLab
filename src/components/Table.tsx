import { Box, Checkbox, Flex, Grid, GridItem, Image } from '@chakra-ui/react'
import { useState } from 'react';
import preview1 from '../assets/useless/cryptopizza_0.png'
import { NftItem } from './NftItem';

interface TableProps {
  className?: string;
}

const arr = Array.from({
  length: 100
})

export function Table(props: TableProps) {
  const { className } = props;
  const [showId, setShowId] = useState(false)

  return (<Box my="10">
    <Flex mb="5">
      <Checkbox onChange={() => setShowId(!showId)} isChecked={showId}>Always show IDs</Checkbox>


    </Flex>
    <Grid templateColumns={['repeat(3, 1fr)', 'repeat(4, 1fr)', 'repeat(5, 1fr)', 'repeat(6, 1fr)']} gap={1} className={className}>
      {arr.map((item, i) => {
        return (
          <GridItem key={i} w='100%' bg='#F2921D'>
            <NftItem showId={showId} id={i} src={preview1}></NftItem>
          </GridItem>
        )
      })}
    </Grid>
  </Box>)
    ;
}