import React from 'react'
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';




export const MessageForm = (props) => {
    return (<Stack direction={"row"} spacing={2}>
        <TextField  value={props.name} onChange={(event)=> props.setName(event.target.value)}/>
        <Button  variant="contained" endIcon={<SendIcon/>} onClick={()=> props.sendMessage ('user', props.name)}>
            Send
        </Button>
    </Stack>)
}