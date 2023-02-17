import { Box, SimpleGrid } from "@chakra-ui/react"
export default function Dashboard() {

  return (

    // minChildWidth makes grid more responsive 
    // otherwise, overflow happens to prevent squashing the
    // grid items together
    <SimpleGrid 
      p="10px" 
      columns={4} 
      spacing={10} 
      minChildWidth="250px"
      >
      {/* Grid Items Inside */}
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>

      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>

      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
    </SimpleGrid>
  )
}

