import { v4 as uuidv4 } from "uuid";
import dummyImg from "./assets/dummyImg.jpg"; //image imported from asset folder

function App() {
  const sayHello = import.meta.env.VITE_SAY_HELLO;  //sayHello msg from .env file
  const apiKey = import.meta.env.VITE_API_KEY;  
  const id = uuidv4();  //id generated using uuid
  return (
    <div>
        <h2>Vite + React App</h2>
        <p>Generated UUID: {id}</p>
        <br />
        <img src={dummyImg} alt="Logo" width="200" />
        <br />
        <p>Msg: {sayHello}</p>
        <p>Api key: {apiKey}</p>
    </div>
  )
}
export default App
