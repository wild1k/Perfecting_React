// import React, { Component } from "react";
import React from "react"
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";


// class App extends Component {
//     constructor(){
//           super()
//           this.state = {
//               isLoggedIn: false,
//           }
//     }
  
//     render(){
//         let statusDisplay;
//         if(!this.state.isLoggedIn){
//             statusDisplay = "In"
//         } else {
//             statusDisplay = "out"
//         }
//         return (
//             <div>
//                 <h1>
//                     You are logged {statusDisplay}
//                 </h1>
//             </div>

//         )
//     }
// }



// class Header extends Component {
// render(){
//     return (
//       <div>
//         <p>Welcome, {this.props.username}</p>
//       </div>
//     );
//   }


// }



// class Greeting extends Component {
//   render() {


  
//     const date = new Date();
//     const hours = date.getHours();
//     let timeOfDay;

//     if (hours < 12) {
//       timeOfDay = "Morning";
//     } else if (hours >= 12 && hours < 17) {
//       timeOfDay = "Afternoon";
//     } else {
//       timeOfDay = "Night";
//     }
//     return <h1>Good {timeOfDay} to you, Sir or Madam!</h1>;
//   }
// }

ReactDOM.render(<App/>, document.getElementById("root"));
