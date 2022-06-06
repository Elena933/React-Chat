
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
import {Routing} from "./pages";
import {Header} from "./components/Header";





function App() {

  return (
    <div className='App'>
        <Header/>
      <Routing/>

    </div>
  )


}
export default App;


