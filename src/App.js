
import './App.css';
import {useState} from 'react'
import {useEffect} from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {MessageForm} from "./components/MessageForm";
import {Message} from './components/Message'
import {Chat} from './components/Chat'
import {ChatList} from "./components/ChatList";
import {MessageList} from "./components/MessageList";




function App() {
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


  return (
    <div className='App'>
      <Stack direction={"row"} spacing={4}>
        <ChatList></ChatList>
        <Stack direction={"column"} spacing={2}>
          <MessageForm name = {name} setName = {setName} sendMessage = {sendMessage}></MessageForm>

          <MessageList messages = {message}></MessageList>
        </Stack>
      </Stack>


    </div>
  )






}
export default App;


