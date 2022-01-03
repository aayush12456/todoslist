
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from "./MyComponents/Todos"
import React, { useState } from 'react';
import {Footer} from './MyComponents/Footer';
import {About} from './MyComponents/About';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  const onDelete=(todo)=>{
    console.log("delete component ")
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const [todos, setTodos] = useState([
    {
      sno:1,
      title:"go to the market",
      desc:"you need to go to market"      
    },
    {
      sno:2,
      title:"go to the mall",
      desc:"you need to go to mall"      
    }
  ]
  )

  return (
    <>
    <Router>
       <Header title={"TodosList"} searchBar={true}/>
       
       <Switch>
       <Route exact path="/" render={()=>{
         return(
           <>
           <Todos todos={todos} onDelete={onDelete}/>
           </>
         )
       }}>
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
         
       <Footer/>
      </Router>
      </>  
     
  );
}

export default App;
