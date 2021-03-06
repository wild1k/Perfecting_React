import React from "react";
import "./App.css";
import ContactCard from "./Components/ContactCard";
// import Footer from "./Components/Footer";
// import Main from "./Components/MyInfo";
// import Header from "./Components/Header";
import ToDoItems from "./Components/ToDoItems";
import Joke from "./Components/Joke";
import Products from "./Components/Products";
import todoData from "./utils/TodoData";




class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: todoData,
    }
  }

render(){
  const jokesArray = [
    {
      id: 1,
      question: "Why are elevator jokes the best?",
      punchLine: "Because they work on every level",
    },
 {    id: 2,
      question: "Did you hear about the restaurant in space?",
      punchLine: "The food isn't very good but the atmosphere is out of this world",
    },
   {
     id: 3,
      punchLine: "Money talks: mine always says goodbye.",
    },
];
const prodArray = [
  {
      id:0,
      name: "Shout",
      price: parseFloat(3.75),
  },
  {
      id:1,
      name: "Comet",
      price: parseFloat(2.95),
  },
  {
      id:2,
      name: "TP",
      price: parseFloat(13.75),
  },
];
  const toDoComponent = this.state.todos.map(todos => <ToDoItems key={todos.id} todoData={todos}/>)
  const ProdComponent = prodArray.map(items => <Products key={items.id} prodArray={items}/>)
  
    const jokeComponent = jokesArray.map(jokes => <Joke key={jokes.id} question={jokes.question} punchLine={jokes.punchLine}/>)
  
    return (
      <>
        <ContactCard
          contact={{
            name: "Mr. Unicorn",
            phone: "206 349 3894",
            email: "unicorn@gmail.com",
            imgUrl:
              "https://www.sciencenewsforstudents.org/wp-content/uploads/2020/03/1030_onwardunicorns-1-1028x579.png",
            altImg: "unicorn on rock",
          }}
        />
        <ContactCard
          contact={{
            name: "Mr. kitty",
            phone: "206 349 3243",
            email: "lotty@gmail.com",
            imgUrl: "http://www.placekitten.com/200/300",
            altImg: "cute kitten",
          }}
        />
       <>
    
        {jokeComponent}

        {ProdComponent}
        
        {toDoComponent}
  </>
      </>
    )
  }




}


export default App;
