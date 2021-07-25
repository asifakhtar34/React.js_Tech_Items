// import logo from './logo.svg';
import "./App.css";
import Header from './MyComponents/Header'
import {Footer} from './MyComponents/Footer'
import {Todos} from './MyComponents/Todos'
import {AddTech} from './MyComponents/AddTech'
import {useState} from 'react';


function App() {
  const [techList, settechList] = useState([
    {
      tech:"React.js",
      desc: "Learn Fundamentals of React"
    },
    {
      tech:"Php with MySql",
      desc: "Learn Php & MySql"
    },
    {
      tech:"Node.js with express",
      desc: "Learn Node.js & express for the backend"
    },
    {
      tech:"Firebase/Digital Ocean",
      desc: "Learn Firebase/Digital Ocean for deploying the websites"
    }

  ])

  const onDelete = (tech)=>{
    // console.log("i am deleted", tech)
    settechList( techList.filter((item)=>{
      return item !== tech}))
    
  }
  

   
  
   
    return ( 
      <>
        <Header title= "Tech-Stack List"  />
        <AddTech add={settechList} newTechList = {techList} onDelete={onDelete} />
        <Todos tech = {techList} onDelete={onDelete}/>
        <Footer />
        
        </>
    );
}

export default App;