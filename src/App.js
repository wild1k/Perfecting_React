import React from "react";
import "./App.css";
import ContactCard from "./Components/ContactCard";
// import Footer from "./Components/Footer";
// import Main from "./Components/MyInfo";
// import Header from "./Components/Header";
import ToDo from "./Components/ToDoItems";
import Joke from "./Components/Joke"

function App() {
  return (
    <>
    <ContactCard contact={{name:"Mr. Unicorn", phone:"206 349 3894", email:"unicorn@gmail.com", imgUrl:"https://www.sciencenewsforstudents.org/wp-content/uploads/2020/03/1030_onwardunicorns-1-1028x579.png", altImg:"unicorn on rock"}} />
    <ContactCard contact={{name:"Mr. kitty", phone:"206 349 3243", email:"lotty@gmail.com", imgUrl:"http://www.placekitten.com/200/300", altImg:"cute kitten"}}/>
<Joke question={"Why are elevator jokes the best?"} punchline={"Because they work on every level"}/>
<Joke question={"Did you hear about the restaurant in space?"} punchline={"The food isn't very good but the atmosphere is out of this world"}/>
<Joke punchline={"Money talks: mine always says is goodbye."}/>
 <ToDo/>
 <ToDo/>
 <ToDo/>
 <ToDo/>
 <ToDo/>
    </>
  );
}

export default App;
