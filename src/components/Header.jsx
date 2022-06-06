import Stack from "@mui/material/Stack";
import {Link} from "react-router-dom"

export const Header = ()=> {
    return  <Stack direction={"row"}>
        <Link  to = '/'>Home</Link>
        <Link to= '/profile'>Profile</Link>
        <Link to = '/chats'>Chats</Link>
    </Stack>
}