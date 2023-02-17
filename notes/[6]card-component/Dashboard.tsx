import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Heading, Box, Card, CardBody, CardFooter, CardHeader, Flex, SimpleGrid, Text, HStack, Button, Divider } from "@chakra-ui/react"
import { useLoaderData } from "react-router-dom"
export default function Dashboard() {

  // Alternatively, you can use useEffect to load data
  // this comes from react-router-dom
  // Dont forget to add a loader prop for this component in App.tsx
  let tasks:any;
  // let task:any;
  tasks = useLoaderData()
  console.log(tasks);

  const taskElements = tasks.map((task:any) => {
    return(
      <Card key={task.id} borderTop="8px" borderColor="purple.400" bg="white">
        <CardHeader>
          <Flex gap={5}>
            <Box w="50px" h="50px">
              <Text>AV</Text>
            </Box>
            <Box>
              <Heading as="h3" size="sm">{task.title}</Heading>
              <Text>By: {task.author}</Text>
            </Box>
          </Flex>
        </CardHeader>

        <CardBody color="gray.500">
          <Text>{task.description}</Text>
        </CardBody>

        {/* Divider component */}
        <Divider
          borderColor="gray.200"
        />

        <CardFooter>
          <HStack>
            {/* variant ghost apply background color on hover */}
            <Button variant="ghost" leftIcon={<EditIcon/>}>Watch</Button>
            <Button variant="ghost" leftIcon={<ViewIcon/>}>Comment</Button>
          </HStack>
        </CardFooter>
      </Card>
    )
  })


  return (
    <SimpleGrid 
      p="10px" 
      spacing={10} 
      minChildWidth="300px"
      >
        {tasks && taskElements}
    </SimpleGrid>
  )
}


// Fetch data using a loader
export const tasksLoader = async() => {
  const response = await fetch(`http://localhost:3000/tasks`)

  return response.json()
}