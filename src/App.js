import React from "react";
import Header from "./components/Header"
import Todo from "./components/Todo"

{/* Want to pass the list below -- the list items -- down into the list itself as a property.*/ }
class App extends React.Component {
  constructor(props) {
    super(props);
    {/*anything in this state, react saves as a const. can't push. can create new value and setstate. Create a new versions of array with concat or spred destructuring operator*/ }
    this.state = { newtodoitem: "", list: [], counter: 0, filteredby: 2, alldone: 0 };
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
    this.itemsLeft();
  }

  handleChange = (event) => {
    this.setState({ newtodoitem: event.target.value });
    //console.log(this.state.newtodoitem)
  }
  //________________________________________________

  //this is the updater function for the list on the page 

  handleSubmit = () => {
    if (this.state.newtodoitem.length > 0) {

    let newEntry =
    {
      id: this.state.list.length,
      title: this.state.newtodoitem,
      completed: false,
      deleted: false,
    }
    let listCopy = this.state.list.concat(newEntry)
  
    this.setState({
      list: listCopy,
      newtodoitem: ""
    });

  }
}
  //________________________________________________

  handleKeyPress = (event) => {
    //console.log(event)
    if (event.key === "Enter") {
      this.handleSubmit()
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
      list: this.state.list.map(item => {
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
    let increment = 0
    // this.state.counter = 0;
    //look into using reduce instead of for loop
    for (let item of this.state.list) {
      console.log(item)
      if (!item.completed && !item.deleted) {
        increment++
        console.log("incrementing", increment)
      }
    }
    this.setState(previousState => {
      if (previousState.counter != increment) {
        return { counter: increment }
      }
    })
  }

  allItems = () => {
    this.setState({
      filteredby: 2
    })
  };

  remainingItems = () => {
    this.setState({
      filteredby: 1
    })
  };

  completedItems = () => {
    this.setState({
      filteredby: 0
    })
  };

  completeAll = () => {
      this.setState({
        list: this.state.list.map(item => {
            item.completed = true
          return item;
  
        })
      })
  }

  deleteAll = () => {
    this.setState({
      list: this.state.list.map(item => {
        if (item.completed == true) {
          item.deleted = true
        }
        return item;

      })
    })
}

uncompleteAll = () => {
  this.setState({
    list: this.state.list.map(item => {
        item.completed = false
      return item;

    })
  })
}


  render = () => {
    return (
      /* below, this creates the entry field */
      <>
        <Header />
        {/*how to send data to the List child. This is how to create props:*/}
        {/* <List listdata={this.state.list}/>  */}
        <div class="card-body position-relative text-center">
        <input type="text" value={this.state.newtodoitem}
          onChange={(e) => this.handleChange(e)} onKeyPress={this.handleKeyPress} />
          &nbsp;
        <button onClick={this.handleSubmit} class="btn btn-warning"> New </button>

        {this.state.list.filter((item, index) => {
          if (!item.deleted) {
            if (this.state.filteredby == 2) {
              return item
            } else if (this.state.filteredby == 1 && !item.completed) {
              return item 
            } else if (this.state.filteredby == 0 && item.completed) {
              return item 
            }
          }

        }).map((item, index) => {
          return (
            <Todo key={index} item={item} handleDelete={this.handleDelete} markComplete={this.markComplete}
            />
          )
        })
        }
        </div>
        <div class="card-body position-relative text-center">
        <div>Items left: {this.state.counter}</div>
        <button onClick={this.allItems} class="btn btn-warning"> All </button> 
        &nbsp;
        <button onClick={this.remainingItems} class="btn btn-warning"> Remaining </button>
        &nbsp;
        <button onClick={this.completedItems} class="btn btn-warning"> Completed </button>
        <br></br>
        <br></br>
        <button onClick={this.completeAll} class="btn btn-warning"> Mark all completed </button>
        &nbsp;
        <button onClick={this.deleteAll} class="btn btn-warning"> Delete all completed </button>
        &nbsp;
        <button onClick={this.uncompleteAll} class="btn btn-warning"> Mark all to-do </button>
        </div>
      </>

    );
  }
}

export default App
