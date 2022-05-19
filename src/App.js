
import './App.css';
import {useState} from 'react'
import {useEffect} from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {MessageForm} from "./components/MessageForm";
import {Message} from './components/Message'



function App() {
  const [message, setMessage] = useState([])
  const [name, setName] = useState('')


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

      <MessageForm name = {name} setName = {setName} sendMessage = {sendMessage}></MessageForm>




    {message.map((item)=> {

      return (
        <Message id = {item.id} name = {item.name} author = {item.author} key = {item.id} ></Message>



      )
    })}

    </div>
  )






}
export default App;


