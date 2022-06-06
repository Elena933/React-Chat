import {useEffect, useState} from "react"
import Stack from "@mui/material/Stack";
import {MessageForm} from "../../components/MessageForm";
import {MessageList} from "../../components/MessageList";

export  const ChatPage = ()=>{
    const [message, setMessage] = useState([])
    const [name, setName] = useState('')
    // const [chat, setChat] = useState([{name: name, id: Date.now()}])


    const sendMessage = (author, name)=>{
        setMessage([...message, {
            name:name, id:Date.now(), author: author,
        }])

    }



    useEffect(() => {
        if (message.length === 0) {
            return
        }
        if (message[message.length -1].author === 'bot'){
            return

        }
        const timer = setTimeout(() => {
            sendMessage('bot', 'hi')
        }, 2000);
        return() => {
            clearTimeout(timer)
        }
    }, [message]);

    return <Stack direction={"column"} spacing={2}>
        <MessageForm name = {name} setName = {setName} sendMessage = {sendMessage}></MessageForm>

        <MessageList messages = {message}></MessageList>
    </Stack>
}