import {useState, useEffect} from "react";
import './App.css';
import {Container} from "react-bootstrap"
import Navigation from "./components/Navigation";

function App() {
const [value, setValue] = useState<String>("");
const [clicked, setClicked] = useState<Boolean>(false);
  const handleChange = (e: any) => {
    setValue(e.target.value);
  
  }
 const handleClick = () => {
  setClicked(!false);
  console.log(clicked)
 } 

  return (
    <div className="App">
      <Container>
      <Navigation handleChange={handleChange} value={value} handleClick={handleClick} />
      </Container>
  
    </div>
  );
}

export default App;
