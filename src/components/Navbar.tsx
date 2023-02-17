import { UnlockIcon } from "@chakra-ui/icons"
import { Flex, Box, Heading, Text, Button, Spacer, HStack, useToast, Avatar, AvatarBadge } from "@chakra-ui/react"

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
				{/* name property displays first letter in avatar */}
				{/* incase of invalid image */}
				<Avatar name="mario"  bg="purple" color="white" src="/img/mario.png">
					{/* avatar badge component */}
					<AvatarBadge width="1.3em" bg="teal.500" >
						<Text fontSize="xs">3</Text>
					</AvatarBadge>
				</Avatar>	
				<Text>mario@netninja.dev</Text>
				<Button colorScheme="purple" onClick={showToast}>Log Out</Button>
			</HStack>
		</Flex>
	)
}

export default Navbar