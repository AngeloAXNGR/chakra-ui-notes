import { Grid, GridItem } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function RootLayout() {
  return (
     <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem
        as="aside"
        // using break points
        colSpan={{base: 6, lg:2, xl:1}}
        bg="purple.400"
        minHeight={{lg:'100vh'}}
        p={{base: '20px', lg:'30px'}}
      >
        <span>Sidebar</span>
      </GridItem>
      <GridItem
        as="main"
        colSpan={{base: 6, lg:4, xl:5}}
        p="40px"
        
      >
        <Navbar/>
        <Outlet />
      </GridItem>
     </Grid>
  )
}
