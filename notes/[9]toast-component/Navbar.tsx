import { UnlockIcon } from "@chakra-ui/icons"
import { Flex, Box, Heading, Text, Button, Spacer, HStack, useToast } from "@chakra-ui/react"

const Navbar = () => {
	const toast = useToast()
	const showToast = () => {
		toast({
			title:'Logged Out',
			description: 'Successfully Logged Out',
			// in ms
			duration: 5000,
			isClosable:true,
			status: 'success',
			position: 'top',
			icon:<UnlockIcon/>
		})
	}

	return (
		<Flex as="nav" p="10px" alignItems="center" mb="40px">
			<Heading as="h1">Dojo Tasks</Heading>
			<Spacer/>
			<HStack spacing="20px">
				<Box bg="gray.200" p="10px">M</Box>
				<Text>mario@netninja.dev</Text>
				<Button colorScheme="purple" onClick={showToast}>Log Out</Button>
			</HStack>
		</Flex>
	)
}

export default Navbar