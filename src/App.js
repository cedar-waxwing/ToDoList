import React, { Component } from "react";
import List from "./components/List"
import Header from "./components/Header"

{/* Want to pass the list below -- the list items -- down into the list itself as a property.*/ }
class App extends React.Component {
  constructor(props) {
    super(props);
    {/*anything in this state, react saves as a const. can't push. can create new value and setstate. Create a new versions of array with concat or spred destructuring operator*/ }
    this.state = { newtodoitem: "", list: [] };

    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleChange = (event) => {
    this.setState({ newtodoitem: event.target.value });
    //console.log(this.state.newtodoitem)
  }

  //this is the updater function for the list on the page 
  handleSubmit = () => {
    let listCopy = [];
    let newEntry =
    {
      id: this.state.list.length,
      title: this.state.newtodoitem,
      completed: false
    }
    for (let i = 0; i < this.state.list.length; i++) {
      if (this.state.list.length > 0) {
        listCopy.push(this.state.list[i])
      }
      console.log(listCopy)
    }
    listCopy.push(newEntry)
    console.log(listCopy)

    this.setState({
      list: listCopy,
      newtodoitem: ""
    });
  }

  handleKeyPress = (event) => {
    //console.log(event)
    if (event.key === "Enter") {
      this.handleSubmit()
    }
  }

  entriesArray = (props) => {
    const entries = props.entries;
    const listItems = entries.map((entry) =>
      <li>{entry}</li>
    );
    return (
      <ul>{listItems}</ul>
    )
  }

  render = () => {
    return (
      /* below, this creates the entry field */
      <>
        <Header />
        {/*how to send data to the List child. This is how to create props:*/}
         {/* <List listdata={this.state.list}/>  */}
        <input type="text" value={this.state.newtodoitem}
          onChange={(e) => this.handleChange(e)} onKeyPress={this.handleKeyPress} />
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
