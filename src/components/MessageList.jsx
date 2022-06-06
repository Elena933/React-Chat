import List from '@mui/material/List';
import {Message} from "./Message";

export const MessageList = (props)=>{

    return <List>
        {
          props.messages.map((item)=>{
              return <Message name = {item.name} author ={item.author} key = {item.id} ></Message>
          })
        }
    </List>
}
