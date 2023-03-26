import { Box } from '@chakra-ui/react'
import { Table } from '../components/Table';

interface GalleryProps {
  className?: string;
}

function Gallery(props: GalleryProps) {
  const { className } = props;

  return <Box className={className}>
    {/* <Table></Table> */}
  </Box>;
}

export default Gallery
