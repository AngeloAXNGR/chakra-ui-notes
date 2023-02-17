import { Container, Heading, Text, Box } from "@chakra-ui/react"
export default function Dashboard() {

  const boxStyles = {
    p: "10px",
    bg: "purple.400",
    color: 'white',
    m: "10px",
    textAlign: 'center',
    // Reason for using sx: certain style props don't exist such as filter
    filter:'blur(2px)',
    // You can also use pseudoclasses
    ':hover': {
      bg:'blue.200',
      color:'black'
    }
  }

  return (
    // Container is not full width and it is center aligned by default
    // Container is just a div
    // Container div can be overridden into a different html tag using as
    // In this case container will be changed from div to a section tag
    <Container 
      as="section"
      maxWidth="4xl" // either pixel or a custom width provided by chakra (e.g md)
      paddingY="20px"
    >
      {/* h2 by default */}
      {/* Apply style props */}
      <Heading
        my="30px"
        p="10px"
      >
        Chakra UI Components
      </Heading>

      {/* default p tag */}
      <Text
        marginLeft="30px" // or use ml
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text 
        ever since the 1500
      </Text>
      <Text
        ml="30px"
        color="blue.100"
        fontWeight="bold"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text 
        ever since the 1500
      </Text>

      {/* Box Component is just a div tag */}
      <Box
        my="30px"
        padding="20px"
        bg="orange.100"
        color="ghostwhite"
      >
        This is a box
      </Box>

      {/* Other way to pass style props using sx*/}
  
      <Box sx={boxStyles}>
        Test
      </Box>
    </Container>
  )
}
