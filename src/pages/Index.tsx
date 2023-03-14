import { Box } from '@chakra-ui/react'
import { Table } from '../components/Table';

interface IndexProps {
  className?: string;
}

function Index(props: IndexProps) {
  const { className } = props;

  return <Box className={className}>
    <Table></Table>
  </Box>;
}

export default Index