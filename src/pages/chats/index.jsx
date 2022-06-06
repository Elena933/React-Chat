import {useEffect, useState} from "react"
import Stack from "@mui/material/Stack";
import {ChatList} from "../../components/ChatList";
import {MessageForm} from "../../components/MessageForm";
import {MessageList} from "../../components/MessageList";

export const ChatsPage = (props)=>{



    return (
            <Stack direction={"row"} spacing={4}>
                <ChatList></ChatList>
                {props.children}

            </Stack>



    )
}