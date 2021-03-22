import React, { Component } from "react";
import List from "./components/List"

{/* Want to pass the list below -- the list items -- down into the list itself as a property.*/ }
class App extends React.Component {
  constructor(props) {
    super(props);
  {/*anything in this state, react saves as a const. can't push. can create new value and setstate. Create a new versions of array with concat or spred destructuring operator*/}
    this.state = { newtodoitem: "", list: [] };

    {/*what is this doing lol*/ }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ newtodoitem: event.target.value });
    console.log(this.state.newtodoitem)
  }

  //this is the updater function for the list on the page 
  handleSubmit() {
    this.setState(prevState => ({
      list: [...prevState.list, {
        id: this.state.list.length,
        title: this.state.newtodoitem,
        completed: false
      }],
      newtodoitem: ""
    }))
  }
  

  render() {
    return (
      /* below, this creates the entry field */
          <>
            <input type="text" value={this.state.newtodoitem}
            onChange={this.handleChange} />
            <button onClick={this.handleSubmit}> New </button>
          </>
    );
  }
}

// state = {
//   list: [
//     {
      // id: 1,
      // title: "this is the first example",
      // completed: false
//     },
//     {
//       id: 2,
//       title: "este es el segundo ejemplo",
//       completed: true
//     },
//     {
//       id: 3,
//       title: "c'est le troisième exemple",
//       completed: false
//     }
//   ]
// }

//this is not being used currently -- will need to be used to set completed to true or false. Toggle whether complete or not. 
// markComplete = (id) => {
//   this.setState({
//     list: this.state.list.map(item => {
//       if (item.id === id) {
//         //here, setting to !item.completed bc if set to false, it will stay false and not toggle. This sets it to the opposite. 
//         item.completed = !item.completed
//       }
//       return item;
//     })
//   });
// }

// render() {
//   return (
//     <div className="App">
//       {/* {taking the list in the state and passing it into the list componant as a prop.} */}
//       <List list={this.state.list} />
//     </div>
//   );
// }


export default App
