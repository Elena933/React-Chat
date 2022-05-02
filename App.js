
import './App.css';
import {useState} from 'react'
import {useEffect} from 'react'

function App() {
  const [messageList, setMessageList] = useState([]);
  const [name, setName]= useState('');
  const [author, setAuthor] = useState ('me');
  
  
  const addMessage = ()=>{
    let random = Math.random()
    setMessageList([...messageList,  {
      name: name, author: author,id: random
    }])

  }

  useEffect(()=>{
    setTimeout(()=> {
      if (messageList.length > 0){
        alert('Done')
      }
    }, 1500)

  }, [messageList])

  
  return(
    <div class = 'form'>
    <input class='input' placeholder = 'type here' value = {name} onChange = {(event) => setName(event.target.value)}/>
    

    <button onClick={ addMessage}>Send</button>
  

    {messageList.map((item)=> {
        return(

          <div key={item.id}>
          
            <div style = {{color: 'blue'}}>
            {item.name}
            </div>

            <div style = {{color: 'blue'}}>
            {item.author} 
            </div>
           
          
          </div>
        )


    })}
    </div>

  )
   
  

   
  
}
  


export default App;
