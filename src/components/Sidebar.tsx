import { CalendarIcon, EditIcon, AtSignIcon } from "@chakra-ui/icons"
import { List, ListIcon, ListItem } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
	return (
		// ul tag
		<List color="white" fontSize="1.2em" spacing={4}>
			{/* li tag */}
			<ListItem>
				<NavLink to="/">
					{/* Using icons */}
					{/* use the as prop to use a specific icon */}
					<ListIcon as={CalendarIcon} color="white"/>
					Dashboard
				</NavLink>
			</ListItem>

			<ListItem>
				<NavLink to="/create">
				<ListIcon as={EditIcon} color="white"/>
					New Task
				</NavLink>
			</ListItem>

			<ListItem>
				<NavLink to="/profile">
				<ListIcon as={AtSignIcon} color="white"/>
					Profile
				</NavLink>
			</ListItem>
		</List>
	)
}

export default Sidebar