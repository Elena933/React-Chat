import logo from './logo.svg';
import './App.css';
import Message from './Message'

function App() {
const message = 'React.js'


  return (
    <div className="App">
      <h1>Welcome <Message props = {message}/></h1>
    </div>
  );
}

export default App;
