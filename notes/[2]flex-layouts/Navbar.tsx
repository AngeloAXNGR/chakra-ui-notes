import { Flex, Box, Heading, Text, Button, Spacer, HStack } from "@chakra-ui/react"

const Navbar = () => {
	return (
		// Everything inside Flex tag are now flex itsms
		// <Flex 
		// 	color="white"
		// 	fontWeight="bold"
		// 	textAlign="center"

		// 	bg="gray.200"
		// 	justify="space-around"
		// 	wrap="wrap"
		// 	gap="20px"
	

		// >
		// 	<Box w="150px" h="50px" bg="red">1</Box>
		// 	<Box w="150px" h="50px" bg="blue">2</Box>
		// 	<Box flexGrow="2" w="150px" h="50px" bg="green">3</Box>
		// 	<Box flexGrow="1" w="150px" h="50px" bg="yellow">4</Box>
		// </Flex>

		<Flex as="nav" p="10px" alignItems="center">
			<Heading as="h1">Dojo Tasks</Heading>
			{/* Component in between the <Space/> tag will add gaps between elements*/}
			<Spacer/>
			{/* alternatively use gap props in Flex Tag */}
			<HStack spacing="20px">
				<Box bg="gray.200" p="10px">M</Box>
				<Text>mario@netninja.dev</Text>
				{/* colorScheme are color palette provided by chakra */}
				<Button colorScheme="purple">Log Out</Button>
			</HStack>
		</Flex>
	)
}

export default Navbar