import React from "react";
import Header from "./components/Header"
import Todo from "./components/Todo"

{/* Want to pass the list below -- the list items -- down into the list itself as a property.*/ }
class App extends React.Component {
  constructor(props) {
    super(props);
    {/*anything in this state, react saves as a const. can't push. can create new value and setstate. Create a new versions of array with concat or spred destructuring operator*/ }
    this.state = { newtodoitem: "", list: [], counter: 0 };
  }

  //local storage ________________________________
  componentDidMount = () => {
    let list = window.localStorage.getItem("list")

    if (list) {
      this.setState({ list: JSON.parse(list) })
    }
    else {
      window.localStorage.setItem("list", 0)
    }
  }
  componentDidUpdate = () => {
    window.localStorage.setItem("list", JSON.stringify(this.state.list))
  }

  handleChange = (event) => {
    this.setState({ newtodoitem: event.target.value });
    //console.log(this.state.newtodoitem)
  }
  //________________________________________________

  //this is the updater function for the list on the page 
  handleSubmit = () => {
    let listCopy = [];
    let newEntry =
    {
      id: this.state.list.length,
      title: this.state.newtodoitem,
      completed: false,
      deleted: false,
    }
    for (let i = 0; i < this.state.list.length; i++) {
      if (this.state.list.length > 0) {
        listCopy.push(this.state.list[i])
      }
      //console.log(listCopy)
    }
    listCopy.push(newEntry)
    // console.log(listCopy)

    this.setState({
      list: listCopy,
      newtodoitem: ""
    });
  }
  //________________________________________________

  handleKeyPress = (event) => {
    //console.log(event)
    if (event.key === "Enter") {
      this.handleSubmit()
      this.itemsLeft();
    }
  }

  entriesArray = () => {
    const entries = this.props.entries;
    const listItems = entries.map((entry) =>
      <li>{entry}</li>
    );
    return (
      <ul>{listItems}</ul>

    )
  }

  markComplete = (id) => {
    this.setState({
      list: this.state.list.filter(item => {
        if (item.id === id) {
          item.completed = !item.completed
        }
        return item;

      })
    })
  }

  handleDelete = (id) => {
    this.setState({
      list: this.state.list.map(item => {
        if (item.id === id) {
          item.deleted = true
        }
        return item;

      })
    })
  }

  itemsLeft = () => {
    this.state.counter = 0;
    for (let i = 0; i < this.state.list.length; i++) {
      if (this.state.list[i].completed == false) {
        this.state.counter++
      }
      // return "Items left:" + this.state.counter
    }
  }

    //for loop, looping through list array to check how many completed. counter++. output #.
    //Need to do this after I mark completed/not completed, 
    //because I only want to output the number remaining todo.
  

  //1. filter, 2. map
  //do a conditional render based on true or false
  //map -- filter only items wants to show 

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

        {this.state.list.filter((item, index) => {
          if (!item.deleted) {
            return item
          } else if (!item.completed) {
            //this.state.newtodoitem {{textDecorationLine: "line-through"}}
          }
        }).map((item, index) => {
          return (
            <Todo key={index} item={item} handleDelete={this.handleDelete} markComplete={this.markComplete}
            />
          )
        })
        }
        <div>Items left: {this.state.counter}</div>
        <button onClick=""> All </button>
        <button onClick=""> Remaining </button>
        <button onClick=""> Completed </button>
      </>

    );
  }
}

export default App
